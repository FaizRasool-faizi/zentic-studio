"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Send, Mic, MicOff, Volume2, VolumeX, Bot, Trash2, ArrowLeft } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm ZENTIC AI, your intelligent business assistant powered by Groq's Llama 3.3 70B model.\n\nI can help you with:\n• Information about our AI services and pricing\n• How AI automation can help your business\n• Booking a free strategy call\n• Answering any questions about ZENTIC Studio\n\nYou can type or use the microphone to speak to me. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [interimTranscript, setInterimTranscript] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const speak = useCallback((text: string) => {
    if (!voiceEnabled) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*_#`•]/g, "").replace(/👋|🤖|✨|💬|🚀/g, "");
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.05;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.name.includes("Google") && v.lang.startsWith("en")) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    stopSpeaking();

    const userMsg: Message = { role: "user", content: text.trim(), timestamp: new Date() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const reply = data.reply || "Sorry, I could not generate a response. Please try again.";
      const assistantMsg: Message = { role: "assistant", content: reply, timestamp: new Date() };
      setMessages((prev) => [...prev, assistantMsg]);
      speak(reply);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Please check your connection.", timestamp: new Date() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      (window as Window & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported. Please use Chrome or Edge.");
      return;
    }

    stopSpeaking();
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => { setListening(true); setInterimTranscript(""); };
    recognition.onend = () => { setListening(false); setInterimTranscript(""); };
    recognition.onerror = () => { setListening(false); setInterimTranscript(""); };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setInterimTranscript(interim);
      if (final) {
        setInput(final);
        setTimeout(() => sendMessage(final), 300);
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
    setInterimTranscript("");
  };

  const clearChat = () => {
    stopSpeaking();
    setMessages([{
      role: "assistant",
      content: "Chat cleared! How can I help you?",
      timestamp: new Date(),
    }]);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div style={{ minHeight: "100vh", background: "#050810", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{
        background: "rgba(12,17,32,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", gap: "6px",
            color: "#64748b", textDecoration: "none", fontSize: "13px",
          }}>
            <ArrowLeft size={16} /> Back
          </Link>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Bot size={18} color="white" />
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#f1f5f9", margin: 0, fontFamily: "Syne, sans-serif" }}>
                ZENTIC AI Assistant
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: speaking ? "#f59e0b" : listening ? "#ef4444" : "#34d399",
                  display: "inline-block",
                }} />
                <span style={{ fontSize: "11px", color: "#64748b" }}>
                  {speaking ? "Speaking..." : listening ? "Listening..." : "Llama 3.3 70B · Online"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Header controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => { setVoiceEnabled(!voiceEnabled); if (speaking) stopSpeaking(); }}
            title={voiceEnabled ? "Mute voice output" : "Enable voice output"}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: voiceEnabled ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${voiceEnabled ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "8px", padding: "7px 12px",
              fontSize: "12px", color: voiceEnabled ? "#a78bfa" : "#475569",
              cursor: "pointer", fontFamily: "DM Sans, sans-serif",
            }}
          >
            {voiceEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            {voiceEnabled ? "Voice On" : "Voice Off"}
          </button>
          <button
            onClick={clearChat}
            title="Clear conversation"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px", padding: "7px 12px",
              fontSize: "12px", color: "#64748b",
              cursor: "pointer", fontFamily: "DM Sans, sans-serif",
            }}
          >
            <Trash2 size={13} /> Clear
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px", maxWidth: "800px", width: "100%", margin: "0 auto" }}>

        {/* Model info banner */}
        <div style={{
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: "12px", padding: "12px 16px",
          display: "flex", alignItems: "center", gap: "10px",
          marginBottom: "24px",
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
          <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
            Powered by <strong style={{ color: "#a78bfa" }}>Groq</strong> · Model: <strong style={{ color: "#a78bfa" }}>Llama 3.3 70B Versatile</strong> · Voice I/O enabled · Conversation memory active
          </p>
        </div>

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "16px",
            }}
          >
            {/* Avatar for assistant */}
            {msg.role === "assistant" && (
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginRight: "10px", flexShrink: 0, alignSelf: "flex-end",
              }}>
                <Bot size={15} color="white" />
              </div>
            )}

            <div style={{ maxWidth: "75%" }}>
              <div style={{
                background: msg.role === "user"
                  ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                  : "#0c1120",
                border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                padding: "14px 18px",
                color: msg.role === "user" ? "white" : "#cbd5e1",
                fontSize: "14px", lineHeight: 1.7,
                whiteSpace: "pre-wrap",
              }}>
                {msg.content}
              </div>
              <p style={{
                fontSize: "10px", color: "#334155",
                margin: "4px 6px 0",
                textAlign: msg.role === "user" ? "right" : "left",
              }}>
                {formatTime(msg.timestamp)}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Loading */}
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "flex-end", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Bot size={15} color="white" />
            </div>
            <div style={{ background: "#0c1120", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px 20px 20px 4px", padding: "14px 18px", display: "flex", gap: "5px", alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: "bounce 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(12,17,32,0.95)",
        backdropFilter: "blur(20px)",
        padding: "16px 24px",
        position: "sticky", bottom: 0,
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Interim transcript */}
          {interimTranscript && (
            <div style={{ marginBottom: "8px", padding: "8px 14px", background: "rgba(99,102,241,0.08)", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.15)" }}>
              <p style={{ fontSize: "12px", color: "#a78bfa", margin: 0, fontStyle: "italic" }}>
                🎤 {interimTranscript}...
              </p>
            </div>
          )}

          <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>

            {/* Mic button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={listening ? stopListening : startListening}
              title={listening ? "Stop listening" : "Click to speak"}
              style={{
                width: "48px", height: "48px", borderRadius: "14px",
                border: "none", cursor: "pointer",
                background: listening
                  ? "linear-gradient(135deg, #ef4444, #dc2626)"
                  : "rgba(99,102,241,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: listening ? "0 0 20px rgba(239,68,68,0.4)" : "none",
                transition: "all 0.2s",
              }}
            >
              {listening
                ? <MicOff size={20} color="white" />
                : <Mic size={20} color="#a78bfa" />
              }
            </motion.button>

            {/* Text input */}
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder={listening ? "🎤 Listening... speak now" : "Type a message or click the mic to speak... (Enter to send)"}
              rows={1}
              style={{
                flex: 1,
                background: "#0c1120",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "13px 16px",
                fontSize: "14px", color: "#f1f5f9",
                outline: "none", fontFamily: "DM Sans, sans-serif",
                resize: "none", lineHeight: 1.5,
                minHeight: "48px", maxHeight: "120px",
                overflowY: "auto",
              }}
            />

            {/* Send button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              style={{
                width: "48px", height: "48px", borderRadius: "14px",
                border: "none",
                background: loading || !input.trim()
                  ? "rgba(99,102,241,0.2)"
                  : "linear-gradient(135deg, #6366f1, #7c3aed)",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: !loading && input.trim() ? "0 4px 16px rgba(99,102,241,0.3)" : "none",
                transition: "all 0.2s",
              }}
            >
              <Send size={18} color="white" />
            </motion.button>
          </div>

          <p style={{ fontSize: "11px", color: "#1e293b", textAlign: "center", marginTop: "8px" }}>
            Enter to send · Shift+Enter for new line · Click mic to speak
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      `}</style>
    </div>
  );
}
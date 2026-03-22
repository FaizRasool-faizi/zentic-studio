"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, VolumeX } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm ZENTIC AI, powered by Llama 3.3. Ask me anything about our services, pricing, or how AI can transform your business. I can also listen to your voice!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Text to speech
  const speak = useCallback((text: string) => {
    if (!voiceEnabled) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*_#`]/g, "").replace(/👋|🤖|✨|💬|🚀/g, "");
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.05;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.name.includes("Google") && v.lang.startsWith("en")
    ) || voices.find((v) => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  // Stop speaking
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  // Send message to Groq
  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
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
      const reply = data.reply || "Sorry, I could not get a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      speak(reply);
    } catch {
      const errMsg = "Network error. Please check your connection and try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: errMsg }]);
    } finally {
      setLoading(false);
    }
  };

  // Voice input
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as Window & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in your browser. Please use Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setTimeout(() => sendMessage(transcript), 300);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 100, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "340px", background: "#0c1120", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.6)" }}
          >
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Bot size={16} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "white", margin: 0 }}>ZENTIC AI</p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: speaking ? "#f59e0b" : "#34d399", display: "inline-block", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)" }}>
                    {speaking ? "Speaking..." : listening ? "Listening..." : "Llama 3.3 · Online"}
                  </span>
                </div>
              </div>

              {/* Voice toggle */}
              <button
                onClick={() => { setVoiceEnabled(!voiceEnabled); stopSpeaking(); }}
                title={voiceEnabled ? "Mute voice" : "Enable voice"}
                style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "6px", padding: "5px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {voiceEnabled ? <Volume2 size={14} color="white" /> : <VolumeX size={14} color="rgba(255,255,255,0.5)" />}
              </button>

              <button onClick={() => { setOpen(false); stopSpeaking(); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer", padding: "2px" }}>
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ height: "300px", overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    fontSize: "12px", lineHeight: 1.65,
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    padding: "10px 14px", maxWidth: "85%",
                    background: msg.role === "user" ? "linear-gradient(135deg, #6366f1, #7c3aed)" : "rgba(255,255,255,0.05)",
                    color: msg.role === "user" ? "white" : "#cbd5e1",
                    border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)",
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px 16px 16px 4px", padding: "12px 16px", display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: "bounce 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px", display: "flex", gap: "8px", alignItems: "center" }}>

              {/* Voice input button */}
              <button
                onClick={listening ? stopListening : startListening}
                title={listening ? "Stop listening" : "Speak to AI"}
                style={{
                  width: "36px", height: "36px", borderRadius: "10px", border: "none",
                  background: listening ? "linear-gradient(135deg, #ef4444, #dc2626)" : "rgba(99,102,241,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", flexShrink: 0,
                  boxShadow: listening ? "0 0 12px rgba(239,68,68,0.5)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {listening ? <MicOff size={15} color="white" /> : <Mic size={15} color="#a78bfa" />}
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder={listening ? "Listening..." : "Ask or speak..."}
                disabled={loading || listening}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px", padding: "9px 12px",
                  fontSize: "12px", color: "white",
                  outline: "none", fontFamily: "DM Sans, sans-serif",
                }}
              />

              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: loading || !input.trim() ? "rgba(99,102,241,0.3)" : "linear-gradient(135deg, #6366f1, #7c3aed)",
                  border: "none", cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                <Send size={14} color="white" />
              </button>
            </div>

            {/* Powered by */}
            <div style={{ padding: "6px 16px 10px", textAlign: "center" }}>
              <span style={{ fontSize: "10px", color: "#334155" }}>Powered by Groq · Llama 3.3 · 70B</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => { setOpen(!open); if (open) stopSpeaking(); }}
        style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #7c3aed)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 24px rgba(99,102,241,0.5)", color: "white",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </div>
  );
}
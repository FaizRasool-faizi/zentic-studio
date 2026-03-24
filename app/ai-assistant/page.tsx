"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, VolumeX } from "lucide-react";

// Type declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistantPage() {
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
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Text to speech
  const speak = useCallback((text: string) => {
    if (!voiceEnabled || typeof window === 'undefined') return;
    
    try {
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
    } catch (error) {
      console.error("Speech synthesis error:", error);
      setSpeaking(false);
    }
  }, [voiceEnabled]);

  // Stop speaking
  const stopSpeaking = () => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
    }
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
    if (typeof window === 'undefined') return;
    
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Voice input is not supported in your browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    try {
      const recognition = new SpeechRecognitionAPI();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setListening(true);
      recognition.onend = () => setListening(false);
      recognition.onerror = () => {
        setListening(false);
        console.error("Speech recognition error");
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setTimeout(() => sendMessage(transcript), 300);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (error) {
      console.error("Failed to start speech recognition:", error);
      alert("Could not access microphone. Please check your permissions.");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error("Error stopping recognition:", error);
      }
    }
    setListening(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#050810", padding: "clamp(80px, 12vh, 120px) max(16px, 4vw) clamp(40px, 8vh, 80px)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ 
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "16px"
          }}>
            AI Assistant
          </h1>
          <p style={{ fontSize: "16px", color: "#64748b" }}>
            Powered by Groq's Llama 3.3 · Real-time responses · Voice enabled
          </p>
        </div>

        {/* Chat Container */}
        <div style={{
          background: "#0c1120",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "24px",
          overflow: "hidden",
        }}>
          
          {/* Header with controls */}
          <div style={{
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <div style={{
              width: "40px", height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Bot size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "white", margin: 0 }}>ZENTIC AI Assistant</p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "4px" }}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: speaking ? "#f59e0b" : "#34d399",
                  display: "inline-block"
                }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)" }}>
                  {speaking ? "Speaking..." : listening ? "Listening..." : "Ready to help"}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              title={voiceEnabled ? "Mute voice" : "Enable voice"}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer"
              }}
            >
              {voiceEnabled ? <Volume2 size={16} color="white" /> : <VolumeX size={16} color="rgba(255,255,255,0.5)" />}
            </button>
          </div>

          {/* Messages */}
          <div style={{
            height: "500px",
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
              }}>
                <div style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                  padding: "12px 18px",
                  maxWidth: "70%",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                    : "rgba(255,255,255,0.05)",
                  color: msg.role === "user" ? "white" : "#cbd5e1",
                  border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)"
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "12px 18px",
                  display: "flex",
                  gap: "6px"
                }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{
                      width: "8px", height: "8px",
                      borderRadius: "50%",
                      background: "#a78bfa",
                      display: "inline-block",
                      animation: "bounce 1.2s ease-in-out infinite",
                      animationDelay: `${i * 0.2}s`
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(12px, 2vw, 20px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px"
          }}>
            <button
              onClick={listening ? stopListening : startListening}
              title={listening ? "Stop listening" : "Speak to AI"}
              style={{
                width: "44px", height: "44px",
                borderRadius: "12px",
                border: "none",
                background: listening
                  ? "linear-gradient(135deg, #ef4444, #dc2626)"
                  : "rgba(99,102,241,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {listening ? <MicOff size={18} color="white" /> : <Mic size={18} color="#a78bfa" />}
            </button>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={listening ? "Listening..." : "Type your message or use voice..."}
              disabled={loading || listening}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
                color: "white",
                outline: "none",
                fontFamily: "DM Sans, sans-serif"
              }}
            />
            
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              style={{
                width: "44px", height: "44px",
                borderRadius: "12px",
                background: loading || !input.trim()
                  ? "rgba(99,102,241,0.3)"
                  : "linear-gradient(135deg, #6366f1, #7c3aed)",
                border: "none",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Send size={18} color="white" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
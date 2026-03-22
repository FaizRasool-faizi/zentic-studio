"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const getBotReply = (input: string): string => {
  const msg = input.toLowerCase();
  if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing"))
    return "Our packages start at $999 for a single AI chatbot. We also have monthly retainers from $2,499. Want me to walk you through the options?";
  if (msg.includes("chatbot") || msg.includes("chat bot"))
    return "We build GPT-powered chatbots trained on your business data — for websites, WhatsApp, Telegram, and Slack. This one you're talking to is a demo!";
  if (msg.includes("automat"))
    return "We design automation workflows using n8n, Make, and custom Python pipelines. Most clients save 30–100 hours per month. Want a free audit?";
  if (msg.includes("how long") || msg.includes("timeline") || msg.includes("deadline"))
    return "Most projects are delivered in 2–4 weeks. We move fast and communicate every day.";
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return "Hey! Great to meet you. I'm ZENTIC's AI assistant. Ask me anything about our services, pricing, or timelines.";
  if (msg.includes("contact") || msg.includes("talk") || msg.includes("call") || msg.includes("book"))
    return "Head to our Contact page to book a free 30-minute strategy call. No obligation, just clarity on how AI can help you.";
  if (msg.includes("agent") || msg.includes("agentic"))
    return "Our agentic AI systems are autonomous agents that research, plan, and execute tasks — built with LangChain and CrewAI frameworks.";
  if (msg.includes("web") || msg.includes("website") || msg.includes("develop"))
    return "We build premium Next.js websites and full-stack apps — fast, SEO-optimised, and production-ready.";
  return "Great question! Our speciality is AI automation, chatbots, and agentic systems. The best next step is a free strategy call — head to our Contact page to book one!";
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm ZENTIC's AI assistant. Ask me about our services, pricing, or how AI can help your business.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: getBotReply(trimmed) }]);
    }, 950);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "320px",
              background: "#0c1120",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={15} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1 }}>
                  ZENTIC AI
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#34d399",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>Online now</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                height: "256px",
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.6,
                      borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      padding: "10px 14px",
                      maxWidth: "85%",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                        : "rgba(255,255,255,0.05)",
                      color: msg.role === "user" ? "white" : "#cbd5e1",
                      border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px 16px 16px 4px",
                      padding: "12px 16px",
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#94a3b8",
                          display: "inline-block",
                          animation: "bounce 1.2s ease-in-out infinite",
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "12px",
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask anything..."
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "9px 12px",
                  fontSize: "12px",
                  color: "white",
                  outline: "none",
                  fontFamily: "DM Sans, sans-serif",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "9px 12px",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setOpen(!open)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #7c3aed)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(99,102,241,0.5)",
          color: "white",
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
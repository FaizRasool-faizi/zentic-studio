"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Phone,
  Linkedin,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@zentic.studio", sub: "We reply within 24 hours", color: "#6366f1" },
  { icon: Clock, label: "Working Hours", value: "Mon – Fri, 9am – 6pm", sub: "GMT+5 (Pakistan Standard Time)", color: "#22d3ee" },
  { icon: MapPin, label: "Location", value: "Remote · Worldwide", sub: "We work with clients globally", color: "#a78bfa" },
];

const serviceOptions = [
  "AI Automation", "Agentic AI System", "AI Chatbot",
  "AI Calling Agent", "Generative AI Solution",
  "Full Stack Web App", "Not sure yet — advise me",
];

const budgetOptions = [
  "Under $500", "$500 – $1,000", "$1,000 – $3,000",
  "$3,000 – $10,000", "$10,000+",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", color: "#0077b5" },
  { icon: MessageSquare, label: "WhatsApp", color: "#25d366" },
  { icon: Phone, label: "Telegram", color: "#229ed9" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "",
    service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const inputStyle = {
    width: "100%", background: "#050810",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", padding: "11px 14px",
    fontSize: "14px", color: "#f1f5f9",
    outline: "none", fontFamily: "DM Sans, sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", padding: "160px 24px 80px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "48px 48px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "999px", padding: "6px 16px", fontSize: "11px", fontWeight: 600, color: "#a78bfa", marginBottom: "28px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
            Let&apos;s Build Together
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: "24px", color: "#f1f5f9" }}>
            Start Your{" "}
            <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI Journey
            </span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.75, fontWeight: 300, maxWidth: "500px", margin: "0 auto" }}>
            Book a free 30-minute strategy call. We will map out exactly how AI can help your business — no obligation, no hard sell.
          </motion.p>
        </div>
      </section>

      {/* ── Main Grid ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "48px", alignItems: "start" }}>

          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px", color: "#f1f5f9", marginBottom: "8px" }}>Get in Touch</h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, fontWeight: 300, marginBottom: "36px" }}>
              Fill in the form and we will get back to you within 24 hours. Or reach out directly using the details below.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {contactInfo.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", background: "#0c1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "20px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${item.color}12`, border: `1px solid ${item.color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={18} color={item.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", marginBottom: "4px" }}>{item.label}</p>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: "#f1f5f9", marginBottom: "2px" }}>{item.value}</p>
                    <p style={{ fontSize: "12px", color: "#64748b" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "16px" }}>Also Find Us On</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {socials.map((social, i) => (
                  <button key={i} style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", color: "#94a3b8", cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                    <social.icon size={13} color={social.color} />
                    {social.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            {status === "success" ? (
              <div style={{ background: "#0c1120", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "24px", padding: "60px 40px", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <CheckCircle size={28} color="#4ade80" />
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "24px", fontWeight: 800, color: "#f1f5f9", marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, marginBottom: "28px" }}>
                  Thank you for reaching out. We will review your message and get back to you within 24 hours.
                </p>
                <button onClick={() => setStatus("idle")} style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)", border: "none", borderRadius: "10px", padding: "11px 24px", fontSize: "14px", fontWeight: 500, color: "white", cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#0c1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>Send Us a Message</h3>
                <p style={{ fontSize: "13px", color: "#475569", marginTop: "-12px" }}>Free consultation · No obligation · Reply within 24hrs</p>

                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                  </div>
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Company / Business Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company (optional)" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>

                {/* Service + Budget */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      style={{ ...inputStyle, color: formData.service ? "#f1f5f9" : "#475569", cursor: "pointer" }}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      style={{ ...inputStyle, color: formData.budget ? "#f1f5f9" : "#475569", cursor: "pointer" }}>
                      <option value="">Select budget</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", display: "block", marginBottom: "8px" }}>Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project, business challenge, or what you want to automate..."
                    rows={5} required
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 } as React.CSSProperties}
                    onFocus={(e) => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>

                {/* Error */}
                {errorMsg && (
                  <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "10px", padding: "12px 16px", fontSize: "13px", color: "#f87171" }}>
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={status === "loading"}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: status === "loading" ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #7c3aed)", border: "none", borderRadius: "12px", padding: "14px 28px", fontSize: "15px", fontWeight: 600, color: "white", cursor: status === "loading" ? "not-allowed" : "pointer", fontFamily: "DM Sans, sans-serif", boxShadow: "0 0 24px rgba(99,102,241,0.3)" }}>
                  {status === "loading" ? "Sending..." : <> Send Message — It&apos;s Free <ArrowRight size={16} /> </>}
                </button>

                <p style={{ fontSize: "11px", color: "#334155", textAlign: "center", marginTop: "-8px" }}>
                  We reply within 24 hours · No spam ever · Unsubscribe anytime
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
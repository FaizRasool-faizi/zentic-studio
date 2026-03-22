"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello.faizidevx@gmail.com", sub: "We reply within 24 hours", color: "#6366f1" },
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

// ── EmailJS Config ──
const EMAILJS_SERVICE_ID = "service_xacr458";
const EMAILJS_TEMPLATE_ID = "template_aea4r6o";
const EMAILJS_PUBLIC_KEY = "vR6ZXEehL3BLgyvUD";

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
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          service: formData.service || "Not specified",
          budget: formData.budget || "Not specified",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg("Failed to send. Please WhatsApp us directly: +92 329 4642268");
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

          {/* ── Left ── */}
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

            {/* Social Links */}
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "16px" }}>
                Also Find Us On
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href="https://www.linkedin.com/in/mfaizrasool/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(0,119,181,0.1)", border: "1px solid rgba(0,119,181,0.25)", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 500, color: "#0ea5e9", textDecoration: "none" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#0ea5e9">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/FaiziDevx" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(24,119,242,0.1)", border: "1px solid rgba(24,119,242,0.25)", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 500, color: "#60a5fa", textDecoration: "none" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#60a5fa">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://wa.me/923294642268" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 500, color: "#4ade80", textDecoration: "none" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#4ade80">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
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
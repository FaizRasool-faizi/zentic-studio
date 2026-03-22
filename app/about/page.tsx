"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Globe,
  CheckCircle,
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

const values = [
  { icon: Target, title: "Results First", desc: "We measure success by your ROI, not by lines of code. Every system we build is tied to a measurable business outcome.", color: "#6366f1" },
  { icon: Zap, title: "Speed Without Compromise", desc: "We move fast — most projects ship in 2–4 weeks — without cutting corners on quality, security, or documentation.", color: "#22d3ee" },
  { icon: Heart, title: "We Actually Care", desc: "We treat every client's business like our own. Your wins are our wins. We stay invested long after deployment.", color: "#a78bfa" },
  { icon: Globe, title: "Remote-First, World-Class", desc: "Our team operates fully remotely across time zones, bringing global expertise to every project we take on.", color: "#6366f1" },
];

const whyUs = [
  "We specialise exclusively in AI — not a side service",
  "Every project gets a dedicated AI architect",
  "We document everything so you're never dependent on us",
  "Transparent pricing — no surprise invoices",
  "We stay on as your long-term AI partner",
  "We have shipped 50+ AI systems across 12 industries",
];

const team = [
  { name: "Faiz Ahmed", role: "Founder & AI Architect", avatar: "FA", bg: "linear-gradient(135deg, #6366f1, #7c3aed)", bio: "Specialist in agentic AI systems, LLM pipelines, and automation architecture." },
  { name: "Sarah M.", role: "Lead AI Engineer", avatar: "SM", bg: "linear-gradient(135deg, #22d3ee, #0891b2)", bio: "Expert in NLP, RAG systems, and deploying production-grade AI at scale." },
  { name: "Omar K.", role: "Full Stack Developer", avatar: "OK", bg: "linear-gradient(135deg, #a78bfa, #7c3aed)", bio: "Builds the premium Next.js interfaces and APIs that wrap our AI systems." },
];

const visionMission = [
  { icon: Eye, label: "Our Vision", color: "#6366f1", title: "A world where every business runs on AI", desc: "We believe AI should not be a luxury reserved for tech giants. Our vision is a future where any business — from a 2-person startup to a 500-person enterprise — can harness the power of intelligent automation to compete and win." },
  { icon: Target, label: "Our Mission", color: "#22d3ee", title: "Make AI practical, fast, and profitable", desc: "Our mission is to cut through the AI hype and deliver systems that actually work in the real world. We design, build, and deploy AI solutions that save time, reduce costs, and generate revenue — with zero fluff." },
];

const stats = [
  { num: "50+", label: "Projects Shipped" },
  { num: "12+", label: "Industries Served" },
  { num: "98%", label: "Client Retention" },
  { num: "2–4", label: "Weeks to Delivery" },
  { num: "$2M+", label: "Client Revenue Generated" },
];

export default function AboutPage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", padding: "160px 24px 100px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "48px 48px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "999px", padding: "6px 16px", fontSize: "11px", fontWeight: 600, color: "#a78bfa", marginBottom: "28px", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
            Who We Are
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: "24px", color: "#f1f5f9" }}
          >
            We Are{" "}
            <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ZENTIC Studio
            </span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.75, fontWeight: 300, maxWidth: "560px", margin: "0 auto" }}
          >
            A premium AI agency obsessed with building intelligent systems that
            create real, measurable business value — not just impressive demos.
          </motion.p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section style={{ padding: "80px 24px", backgroundColor: "#0c1120", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {visionMission.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              style={{ background: "#050810", border: `1px solid ${item.color}20`, borderRadius: "20px", padding: "36px" }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${item.color}15`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <item.icon size={22} color={item.color} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: item.color, marginBottom: "10px", display: "block" }}>{item.label}</span>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "22px", fontWeight: 700, color: "#f1f5f9", marginBottom: "14px", lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.8 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Values ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "12px", display: "block" }}>What Drives Us</span>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9" }}>Our Core Values</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{ background: "#0c1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${v.color}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <v.icon size={20} color={v.color} />
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "17px", fontWeight: 700, color: "#f1f5f9", marginBottom: "10px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ padding: "100px 24px", backgroundColor: "#0c1120", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "12px", display: "block" }}>Why ZENTIC</span>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9", marginBottom: "20px", lineHeight: 1.15 }}>
              Why Businesses Choose Us Over Everyone Else
            </h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, fontWeight: 300 }}>
              There are hundreds of agencies. Here is why our clients keep coming back — and why they refer us to their network.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {whyUs.map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "#050810", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", padding: "16px 20px" }}>
                <CheckCircle size={17} color="#22d3ee" style={{ flexShrink: 0, marginTop: "1px" }} />
                <span style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "12px", display: "block" }}>The People</span>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9" }}>Meet the Team</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {team.map((member, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{ background: "#0c1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: member.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700, color: "white", margin: "0 auto 16px", boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "17px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>{member.name}</h3>
                <p style={{ fontSize: "12px", color: "#6366f1", fontWeight: 500, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{member.role}</p>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section style={{ padding: "80px 24px", backgroundColor: "#0c1120", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: "40px", fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "6px" }}>{stat.num}</div>
              <div style={{ fontSize: "12px", color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9", marginBottom: "16px" }}>
              Let&apos;s Build Something Great Together
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.7, fontWeight: 300, marginBottom: "32px" }}>
              Book a free 30-minute strategy call. We&apos;ll map out exactly how AI can help your business grow.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #6366f1, #7c3aed)", color: "white", fontWeight: 500, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontSize: "15px", boxShadow: "0 0 32px rgba(99,102,241,0.3)" }}>
              Book a Free Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
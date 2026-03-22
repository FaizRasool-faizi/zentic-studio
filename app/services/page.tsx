"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Zap,
  MessageSquare,
  Phone,
  Sparkles,
  Globe,
  Check,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    tagline: "Save 100+ hours every month",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.06)",
    border: "rgba(99,102,241,0.15)",
    desc: "We design end-to-end automation workflows using n8n, Make, Zapier, and custom Python pipelines. From CRM data sync to invoice processing, email routing to report generation — we automate every repetitive task that's draining your team's time and energy.",
    features: [
      "Custom workflow design & architecture",
      "CRM, email, and calendar automation",
      "Document processing & data extraction",
      "Multi-step pipeline with error handling",
      "Full testing, documentation & handover",
    ],
    deliverable: "Working automation live in 1–2 weeks",
    price: "From $799",
  },
  {
    icon: Zap,
    title: "Agentic AI Systems",
    tagline: "AI that works while you sleep",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
    border: "rgba(34,211,238,0.15)",
    desc: "We build multi-agent frameworks using LangChain, CrewAI, and AutoGen. Our agents can research competitors, write reports, qualify leads, process data, and take autonomous actions — all without human intervention. This is the frontier of AI, and we live here.",
    features: [
      "Multi-agent system design",
      "Tool use: web search, APIs, databases",
      "Autonomous task planning & execution",
      "Memory and context management",
      "Human-in-the-loop approval flows",
    ],
    deliverable: "Agent system live in 2–4 weeks",
    price: "From $2,499",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    tagline: "Support, leads, and sales 24/7",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.15)",
    desc: "Custom RAG-powered chatbots trained on your business data — your products, FAQs, tone of voice, and processes. Deploy on your website, WhatsApp, Telegram, or Slack. Handles support tickets, qualifies leads, books appointments, and answers questions instantly.",
    features: [
      "GPT-4 powered with your data (RAG)",
      "Website, WhatsApp, Telegram, Slack",
      "Lead capture & CRM integration",
      "Escalation to human agent flow",
      "Analytics dashboard & chat history",
    ],
    deliverable: "Chatbot live in 7–14 days",
    price: "From $999",
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    tagline: "Outbound & inbound calls, automated",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
    desc: "Voice AI agents that make and receive phone calls autonomously. They qualify inbound leads, follow up with prospects, remind customers about appointments, and collect feedback — all with a natural-sounding AI voice that represents your brand professionally.",
    features: [
      "Natural voice AI (ElevenLabs / Vapi)",
      "Outbound prospecting & follow-up",
      "Inbound lead qualification",
      "Appointment booking & reminders",
      "Call transcripts & CRM sync",
    ],
    deliverable: "Calling agent live in 2–3 weeks",
    price: "From $1,999",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    tagline: "Content, data, and creativity at scale",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.06)",
    border: "rgba(236,72,153,0.15)",
    desc: "Custom LLM pipelines for content generation, structured data extraction, document summarisation, and creative automation. We fine-tune models on your data, build prompt engineering systems, and create AI-powered tools your team will actually use every day.",
    features: [
      "LLM fine-tuning on your data",
      "Content generation pipelines",
      "PDF, document & web extraction",
      "Prompt engineering & optimisation",
      "API integration into your products",
    ],
    deliverable: "Solution live in 2–4 weeks",
    price: "From $1,499",
  },
  {
    icon: Globe,
    title: "Full Stack Web Development",
    tagline: "Premium apps built to convert",
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
    desc: "We build fast, beautiful, production-ready web applications using Next.js, React, TypeScript, and modern cloud infrastructure. Whether it's a marketing site, SaaS dashboard, or an AI-powered tool — we build it to perform, convert, and scale.",
    features: [
      "Next.js 15 + React 19 + TypeScript",
      "Tailwind CSS + Framer Motion UI",
      "Supabase / PostgreSQL / Prisma",
      "Stripe payments integration",
      "Vercel deployment + CI/CD pipeline",
    ],
    deliverable: "App live in 2–5 weeks",
    price: "From $1,299",
  },
];

const process = [
  { step: "01", title: "Free Discovery Call", desc: "30 minutes to understand your goals, pain points, and what success looks like for you." },
  { step: "02", title: "Custom Proposal", desc: "We send a detailed proposal with scope, timeline, pricing, and tech stack — within 24 hours." },
  { step: "03", title: "Build Sprint", desc: "We build in focused 1-week sprints with daily updates so you always know what's happening." },
  { step: "04", title: "Test & Handover", desc: "Full QA, documentation, training, and a clean handover so your team can run it independently." },
];

export default function ServicesPage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        padding: "160px 24px 100px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.15), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "999px", padding: "6px 16px",
              fontSize: "11px", fontWeight: 600,
              color: "#a78bfa", marginBottom: "28px",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#22d3ee", display: "inline-block",
            }} />
            What We Build
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800, letterSpacing: "-2px",
              lineHeight: 1.06, marginBottom: "24px", color: "#f1f5f9",
            }}
          >
            AI Services That{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Actually Deliver
            </span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{
              fontSize: "18px", color: "#64748b",
              lineHeight: 1.75, fontWeight: 300,
              maxWidth: "520px", margin: "0 auto 36px",
            }}
          >
            Every service is engineered for one thing — measurable results.
            No fluff, no overpromising, no disappearing after delivery.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "white", fontWeight: 500,
              padding: "13px 28px", borderRadius: "12px",
              textDecoration: "none", fontSize: "14px",
              boxShadow: "0 0 28px rgba(99,102,241,0.3)",
            }}>
              Get a Free Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/pricing" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8", fontWeight: 400,
              padding: "13px 28px", borderRadius: "12px",
              textDecoration: "none", fontSize: "14px",
            }}>
              See Pricing <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "flex", flexDirection: "column", gap: "32px",
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp} custom={0}
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: "24px", padding: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px", alignItems: "start",
              }}
            >
              {/* Left: info */}
              <div>
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: "14px", marginBottom: "20px",
                }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <s.icon size={24} color={s.color} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "22px", fontWeight: 700,
                      color: "#f1f5f9", marginBottom: "2px",
                    }}>
                      {s.title}
                    </h3>
                    <span style={{
                      fontSize: "12px", color: s.color,
                      fontWeight: 500,
                    }}>
                      {s.tagline}
                    </span>
                  </div>
                </div>

                <p style={{
                  fontSize: "15px", color: "#64748b",
                  lineHeight: 1.8, marginBottom: "28px", fontWeight: 300,
                }}>
                  {s.desc}
                </p>

                {/* Price + CTA */}
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: "16px", flexWrap: "wrap",
                }}>
                  <span style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "22px", fontWeight: 800,
                    background: `linear-gradient(135deg, ${s.color}, #a78bfa)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {s.price}
                  </span>
                  <Link href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: s.color,
                    color: "white", fontWeight: 500,
                    padding: "10px 20px", borderRadius: "10px",
                    textDecoration: "none", fontSize: "13px",
                    transition: "opacity 0.2s",
                  }}>
                    Get Started <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Right: features */}
              <div>
                <p style={{
                  fontSize: "11px", fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "#475569", marginBottom: "16px",
                }}>
                  What&apos;s Included
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {s.features.map((feat, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <Check size={15} color={s.color} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Deliverable badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: "999px", padding: "6px 14px",
                  fontSize: "12px", color: "#4ade80", fontWeight: 500,
                }}>
                  ✓ {s.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Process ── */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "72px" }}
          >
            <span style={{
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#a78bfa", marginBottom: "12px", display: "block",
            }}>
              How We Work
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9",
            }}>
              Our Delivery Process
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}>
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px", padding: "28px",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "56px", fontWeight: 800,
                  color: "rgba(99,102,241,0.08)",
                  position: "absolute", top: "-8px", right: "16px",
                  lineHeight: 1, pointerEvents: "none",
                }}>
                  {p.step}
                </div>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#6366f1",
                  marginBottom: "16px",
                  boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                }} />
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "16px", fontWeight: 700,
                  color: "#f1f5f9", marginBottom: "10px",
                }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "16px",
            }}>
              Not Sure Which Service You Need?
            </h2>
            <p style={{
              fontSize: "16px", color: "#64748b",
              lineHeight: 1.7, fontWeight: 300, marginBottom: "32px",
            }}>
              Book a free 30-minute call. We will listen to your situation and
              tell you honestly what will deliver the most ROI for your business.
            </p>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "white", fontWeight: 500,
              padding: "14px 32px", borderRadius: "12px",
              textDecoration: "none", fontSize: "15px",
              boxShadow: "0 0 32px rgba(99,102,241,0.3)",
            }}>
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
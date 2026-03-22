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
  Star,
  Check,
  Play,
  TrendingUp,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";

// ── Animation helper ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// ── Data ──────────────────────────────────────────────────────────
const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate repetitive workflows with intelligent pipelines that save hundreds of hours every month.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: Zap,
    title: "Agentic AI Systems",
    desc: "Autonomous AI agents that reason, plan, and execute multi-step tasks completely independently.",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    desc: "GPT-powered chatbots trained on your data — for support, lead gen, and FAQs, running 24/7.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    icon: Phone,
    title: "AI Calling Agents",
    desc: "Voice AI that makes and receives calls, qualifies leads, and books appointments automatically.",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Custom LLM pipelines for content generation, data extraction, and creative automation at scale.",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    icon: Globe,
    title: "Full Stack Dev",
    desc: "Premium web applications with Next.js, React, and modern cloud infrastructure — built to last.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
  },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "12+", label: "AI Specializations" },
  { num: "24/7", label: "Systems Uptime" },
];

const projects = [
  {
    title: "AutoClose — AI Sales Agent",
    desc: "An agentic AI SDR that prospected, emailed, and booked 120+ demos per month autonomously for a B2B SaaS startup.",
    result: "3x more demos booked",
    tags: ["LangChain", "GPT-4", "Outreach API"],
    emoji: "🤖",
    bg: "linear-gradient(135deg, #0f0c29, #302b63)",
  },
  {
    title: "DataBridge — ETL Automation",
    desc: "Automated data pipeline pulling from 12 sources, cleaning with AI, and pushing to a live analytics dashboard.",
    result: "40 hrs/week saved",
    tags: ["Python", "n8n", "Supabase"],
    emoji: "📊",
    bg: "linear-gradient(135deg, #0d1117, #1a2a1a)",
  },
  {
    title: "NovaMind — Content Engine",
    desc: "Generative AI platform that writes, edits, and schedules 30 days of social content in under 60 seconds.",
    result: "10x content output",
    tags: ["Next.js", "Claude API", "Stripe"],
    emoji: "✨",
    bg: "linear-gradient(135deg, #1a0533, #2d0d5c)",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn about your business, your bottlenecks, and your goals in a free 30-minute strategy session. No obligation.",
    icon: Users,
  },
  {
    step: "02",
    title: "AI Architecture",
    desc: "Our team designs a custom AI system blueprint tailored to your exact workflow, data, and tech stack.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Build & Deploy",
    desc: "We build, test, and deploy your AI solution in 2–4 weeks with full handover, docs, and ongoing support.",
    icon: Clock,
  },
];

const tools = [
  {
    name: "LeadBot Pro",
    desc: "AI chatbot that qualifies leads and books calls automatically on your website.",
    price: "$297",
    tag: "Most Popular",
    tagColor: "#6366f1",
  },
  {
    name: "ContentAI",
    desc: "Generate a full month of social media content in 60 seconds using your brand voice.",
    price: "$197",
    tag: "New",
    tagColor: "#22d3ee",
  },
  {
    name: "AutoReply",
    desc: "AI email responder that handles customer support tickets with 95% accuracy.",
    price: "$147",
    tag: "Bestseller",
    tagColor: "#a78bfa",
  },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, GrowthStack",
    text: "ZENTIC built us an AI calling agent that books 3x more demos than our human reps ever did. The ROI was visible in the very first week.",
    avatar: "AR",
    bg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    name: "Sarah Kim",
    role: "COO, DataFlow Inc.",
    text: "Their AI automation system eliminated 40 hours per week of manual data entry. The quality and delivery speed was truly unbelievable.",
    avatar: "SK",
    bg: "linear-gradient(135deg, #22d3ee, #0891b2)",
  },
  {
    name: "James Park",
    role: "Founder, NexaCart",
    text: "The custom chatbot now handles 80% of our support tickets. Our team finally has the breathing room to focus on actual growth.",
    avatar: "JP",
    bg: "linear-gradient(135deg, #a78bfa, #7c3aed)",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    period: "one-time",
    desc: "Perfect for a single AI solution",
    features: [
      "1 AI Chatbot (GPT-4)",
      "Website Integration",
      "1 Automation Flow",
      "30-day Support",
      "Full Source Code",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/ month",
    desc: "For businesses scaling with AI",
    features: [
      "Full AI Chatbot Suite",
      "5 Automation Flows",
      "Agentic AI System",
      "Monthly Strategy Call",
      "Priority Slack Support",
      "Monthly Reports",
    ],
    featured: true,
    cta: "Start Now →",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    desc: "For teams that need everything",
    features: [
      "Everything in Growth",
      "Dedicated AI Team",
      "Custom LLM Fine-tuning",
      "SLA Guarantee",
      "White-label Rights",
    ],
    featured: false,
    cta: "Contact Us",
  },
];

const trustedBy = [
  "GrowthStack", "DataFlow Inc.", "NexaCart",
  "Orbit Labs", "PulseAI", "Stackd"
];

// ── Component ─────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.18), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 40% 30% at 80% 60%, rgba(34,211,238,0.07), transparent)",
          pointerEvents: "none",
        }} />
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>

          {/* Badge */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "999px", padding: "6px 16px",
              fontSize: "11px", fontWeight: 600,
              color: "#a78bfa", marginBottom: "32px",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#22d3ee",
              boxShadow: "0 0 6px #22d3ee",
              animation: "pulse 2s ease-in-out infinite",
              display: "inline-block",
            }} />
            AI-Powered Agency · Est. 2024
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-2px",
              marginBottom: "24px",
              color: "#f1f5f9",
            }}
          >
            We Build{" "}
            <span className="gradient-text">Intelligent Systems</span>
            <br />
            That Scale Your Business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{
              fontSize: "18px", color: "#64748b",
              maxWidth: "520px", margin: "0 auto 40px",
              lineHeight: 1.7, fontWeight: 300,
            }}
          >
            ZENTIC Studio crafts cutting-edge AI automation, agentic systems,
            and full-stack solutions that turn complex problems into competitive
            advantages.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                color: "white", fontWeight: 500,
                padding: "14px 32px", borderRadius: "12px",
                textDecoration: "none", fontSize: "15px",
                boxShadow: "0 0 32px rgba(99,102,241,0.35)",
                transition: "opacity 0.2s",
              }}
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f1f5f9", fontWeight: 400,
                padding: "14px 32px", borderRadius: "12px",
                textDecoration: "none", fontSize: "15px",
                transition: "border-color 0.2s",
              }}
            >
              <Play size={14} /> View Our Work
            </Link>
          </motion.div>

          {/* Social proof mini */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
            style={{
              marginTop: "56px",
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex" }}>
              {["AR", "SK", "JP", "MK"].map((init, i) => (
                <div
                  key={i}
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: `linear-gradient(135deg, #6366f1, #7c3aed)`,
                    border: "2px solid #050810",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: 600, color: "white",
                    marginLeft: i === 0 ? "0" : "-8px",
                    zIndex: 4 - i,
                    position: "relative",
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span style={{ fontSize: "13px", color: "#64748b" }}>
              Trusted by <strong style={{ color: "#f1f5f9" }}>50+ businesses</strong> worldwide
            </span>
          </motion.div>
        </div>

        {/* Pulse keyframe */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.85); }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════
          2. TRUSTED BY / STATS
      ════════════════════════════════════════ */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          backgroundColor: "#0c1120",
          padding: "0",
        }}
      >
        {/* Stats row */}
        <div
          style={{
            maxWidth: "1280px", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp} custom={i}
              style={{
                textAlign: "center", padding: "32px 16px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "36px", fontWeight: 800,
                background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "4px",
              }}>
                {stat.num}
              </div>
              <div style={{ fontSize: "12px", color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by logos */}
        <div
          style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "24px 24px",
            display: "flex", alignItems: "center",
            justifyContent: "center",
            gap: "8px", flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "11px", color: "#334155", textTransform: "uppercase", letterSpacing: "0.1em", marginRight: "8px" }}>
            Trusted by
          </span>
          {trustedBy.map((name, i) => (
            <span
              key={i}
              style={{
                fontSize: "13px", color: "#475569",
                padding: "4px 14px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. SERVICES OVERVIEW
      ════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp}
          style={{ marginBottom: "64px" }}
        >
          <span className="section-label">What We Do</span>
          <h2 style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, letterSpacing: "-1px",
            lineHeight: 1.1, marginBottom: "16px", color: "#f1f5f9",
          }}>
            AI Solutions Built for<br />Modern Businesses
          </h2>
          <p style={{ fontSize: "16px", color: "#64748b", maxWidth: "460px", lineHeight: 1.7, fontWeight: 300 }}>
            From intelligent automation to full-stack development — we engineer
            AI systems that actually deliver results.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp} custom={i}
              style={{
                background: s.bg,
                border: `1px solid ${s.color}20`,
                borderRadius: "20px", padding: "28px",
                cursor: "pointer",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              whileHover={{ y: -4 }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: `${s.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "18px",
              }}>
                <s.icon size={20} color={s.color} />
              </div>
              <h3 style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "17px", fontWeight: 700,
                marginBottom: "10px", color: "#f1f5f9",
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
                {s.desc}
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: "4px",
                marginTop: "20px", fontSize: "13px",
                color: s.color, fontWeight: 500,
              }}>
                Learn more <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          4. FEATURED PROJECTS
      ════════════════════════════════════════ */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "16px",
            }}
          >
            <div>
              <span className="section-label">Case Studies</span>
              <h2 style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800, letterSpacing: "-1px",
                color: "#f1f5f9", lineHeight: 1.1,
              }}>
                Real Problems.<br />Real Results.
              </h2>
            </div>
            <Link
              href="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "14px", color: "#6366f1",
                textDecoration: "none", fontWeight: 500,
              }}
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                whileHover={{ y: -5 }}
              >
                {/* Thumbnail */}
                <div style={{
                  height: "160px",
                  background: p.bg,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "48px",
                }}>
                  {p.emoji}
                </div>
                {/* Content */}
                <div style={{ padding: "24px" }}>
                  {/* Result badge */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: "999px", padding: "3px 10px",
                    fontSize: "11px", color: "#4ade80",
                    fontWeight: 600, marginBottom: "12px",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>
                    ↑ {p.result}
                  </div>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "16px", fontWeight: 700,
                    marginBottom: "10px", color: "#f1f5f9",
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, marginBottom: "16px" }}>
                    {p.desc}
                  </p>
                  {/* Tags */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: "11px", padding: "3px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#94a3b8",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. HOW IT WORKS
      ════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ marginBottom: "72px" }}
          >
            <span className="section-label">Our Process</span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9",
            }}>
              How It Works
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}>
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{ position: "relative" }}
              >
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: "28px", right: "-16px",
                    width: "32px", height: "1px",
                    background: "linear-gradient(90deg, rgba(99,102,241,0.4), transparent)",
                    display: window.innerWidth > 768 ? "block" : "none",
                  }} />
                )}
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "16px",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <step.icon size={22} color="#6366f1" />
                </div>
                <div style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "48px", fontWeight: 800,
                  color: "rgba(255,255,255,0.04)",
                  position: "absolute", top: "-8px", left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "18px", fontWeight: 700,
                  marginBottom: "12px", color: "#f1f5f9",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6. AI CHATBOT DEMO SECTION
      ════════════════════════════════════════ */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px", alignItems: "center",
        }}>
          {/* Left: text */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-label">Live Demo</span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "20px", lineHeight: 1.1,
            }}>
              See Our AI Chatbot<br />In Action
            </h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, marginBottom: "32px", fontWeight: 300 }}>
              The chat widget in the bottom-right corner of this page is a live
              demo of what we build for clients. Try it right now — ask it about
              pricing, timelines, or our services.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Trained on your business data",
                "Handles FAQs, leads, and support",
                "Connects to WhatsApp, Slack, Telegram",
                "Upgrades to real GPT-4 in one line",
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "20px", height: "20px", borderRadius: "50%",
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Check size={11} color="#22d3ee" />
                  </div>
                  <span style={{ fontSize: "14px", color: "#94a3b8" }}>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: mock chat UI */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            <div style={{
              background: "#050810",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}>
              {/* Chat header */}
              <div style={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                padding: "16px 20px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Bot size={18} color="white" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>ZENTIC AI</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>Online now</span>
                  </div>
                </div>
              </div>
              {/* Messages */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { role: "bot", text: "👋 Hi! I'm ZENTIC's AI. How can I help your business today?" },
                  { role: "user", text: "How much does an AI chatbot cost?" },
                  { role: "bot", text: "Our chatbots start at $999 one-time. That includes GPT-4 integration, website deployment, and 30 days of support. Want a custom quote?" },
                  { role: "user", text: "How fast can you build it?" },
                  { role: "bot", text: "Most chatbots are live within 7–14 days. Want to book a free call to discuss your needs?" },
                ].map((msg, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      fontSize: "13px", lineHeight: 1.6,
                      borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      padding: "10px 14px", maxWidth: "80%",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                        : "rgba(255,255,255,0.05)",
                      color: msg.role === "user" ? "white" : "#cbd5e1",
                      border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.06)",
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* Input bar */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "12px 16px",
                display: "flex", gap: "8px",
              }}>
                <div style={{
                  flex: 1, background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px", padding: "10px 14px",
                  fontSize: "12px", color: "#475569",
                }}>
                  Try asking about pricing...
                </div>
                <div style={{
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  borderRadius: "10px", padding: "10px 14px",
                  display: "flex", alignItems: "center",
                }}>
                  <ArrowRight size={14} color="white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. MINI TOOLS SHOWCASE
      ════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <span className="section-label">AI Tools Store</span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "16px",
            }}>
              Ready-to-Deploy AI Tools
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", fontWeight: 300 }}>
              Buy once. Deploy instantly. Start generating results today.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}>
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  background: "#0c1120",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", padding: "28px",
                  display: "flex", flexDirection: "column",
                  transition: "transform 0.3s",
                }}
                whileHover={{ y: -4 }}
              >
                {/* Tag badge */}
                <span style={{
                  display: "inline-block", width: "fit-content",
                  fontSize: "10px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  color: tool.tagColor,
                  background: `${tool.tagColor}15`,
                  border: `1px solid ${tool.tagColor}30`,
                  borderRadius: "999px", padding: "3px 10px",
                  marginBottom: "16px",
                }}>
                  {tool.tag}
                </span>
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "18px", fontWeight: 700,
                  color: "#f1f5f9", marginBottom: "10px",
                }}>
                  {tool.name}
                </h3>
                <p style={{
                  fontSize: "14px", color: "#64748b",
                  lineHeight: 1.7, flex: 1, marginBottom: "24px",
                }}>
                  {tool.desc}
                </p>
                <div style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "20px",
                }}>
                  <span style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "28px", fontWeight: 800,
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {tool.price}
                  </span>
                  <Link
                    href="/pricing"
                    style={{
                      fontSize: "13px", fontWeight: 500,
                      background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                      color: "white", padding: "9px 18px",
                      borderRadius: "8px", textDecoration: "none",
                    }}
                  >
                    Get Tool →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. TESTIMONIALS
      ════════════════════════════════════════ */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ marginBottom: "64px" }}
          >
            <span className="section-label">Client Stories</span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", lineHeight: 1.1,
            }}>
              Trusted by Forward-<br />Thinking Founders
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", padding: "28px",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{
                  fontSize: "14px", color: "#94a3b8",
                  lineHeight: 1.75, fontStyle: "italic",
                  marginBottom: "24px",
                }}>
                  "{t.text}"
                </p>
                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: t.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 700, color: "white",
                    flexShrink: 0,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#f1f5f9" }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "#475569" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. PRICING PREVIEW
      ════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <span className="section-label">Pricing</span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "12px",
            }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", fontWeight: 300 }}>
              No hidden fees. No lock-in. Cancel anytime.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}>
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  position: "relative",
                  background: plan.featured
                    ? "linear-gradient(160deg, rgba(99,102,241,0.1), #0c1120)"
                    : "#0c1120",
                  border: plan.featured
                    ? "1px solid rgba(99,102,241,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  transition: "transform 0.3s",
                }}
                whileHover={{ y: -4 }}
              >
                {plan.featured && (
                  <div style={{
                    position: "absolute", top: "-14px",
                    left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                    color: "white", fontSize: "10px", fontWeight: 700,
                    padding: "5px 16px", borderRadius: "999px",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}
                <p style={{
                  fontSize: "11px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "#475569", marginBottom: "8px",
                }}>
                  {plan.name}
                </p>
                <div style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "48px", fontWeight: 800,
                  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1, marginBottom: "4px",
                }}>
                  {plan.price}
                </div>
                <p style={{ fontSize: "13px", color: "#475569", marginBottom: "8px" }}>
                  {plan.period}
                </p>
                <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "28px" }}>
                  {plan.desc}
                </p>
                <ul style={{
                  listStyle: "none",
                  display: "flex", flexDirection: "column", gap: "12px",
                  marginBottom: "32px",
                }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Check size={14} color="#22d3ee" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", color: "#94a3b8" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    display: "block", textAlign: "center",
                    fontSize: "14px", fontWeight: 500,
                    padding: "13px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    background: plan.featured
                      ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                      : "transparent",
                    color: plan.featured ? "white" : "#f1f5f9",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                    transition: "opacity 0.2s",
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          10. FINAL CTA
      ════════════════════════════════════════ */}
      <section style={{
        padding: "120px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.12), transparent)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              borderRadius: "999px", padding: "6px 16px",
              fontSize: "11px", fontWeight: 600,
              color: "#a78bfa", marginBottom: "32px",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#22d3ee", display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            Limited Spots Available
          </motion.div>

          <motion.h2
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={1}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800, letterSpacing: "-1.5px",
              color: "#f1f5f9", lineHeight: 1.08,
              marginBottom: "20px",
            }}
          >
            Ready to Automate Your<br />Business with AI?
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={2}
            style={{
              fontSize: "17px", color: "#64748b",
              fontWeight: 300, lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Join 50+ companies that trust ZENTIC Studio to build
            their AI infrastructure and competitive edge.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp} custom={3}
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                color: "white", fontWeight: 500,
                padding: "15px 36px", borderRadius: "12px",
                textDecoration: "none", fontSize: "15px",
                boxShadow: "0 0 40px rgba(99,102,241,0.35)",
              }}
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8", fontWeight: 400,
                padding: "15px 36px", borderRadius: "12px",
                textDecoration: "none", fontSize: "15px",
              }}
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
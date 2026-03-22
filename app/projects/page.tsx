"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

const projects = [
  {
    id: "autoclose",
    emoji: "🤖",
    tag: "Agentic AI",
    tagColor: "#6366f1",
    title: "AutoClose — AI Sales Development Agent",
    client: "B2B SaaS Startup · USA",
    bg: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    challenge: "A fast-growing B2B SaaS company was spending $18,000/month on a sales development team of 4 reps. Their pipeline was inconsistent, follow-ups were missed, and the team was burning out on repetitive outreach tasks.",
    solution: "We built an autonomous AI SDR agent using LangChain and GPT-4. The agent researches prospects on LinkedIn and the web, writes personalised outreach emails in the founder's voice, tracks replies, follows up intelligently, and books demo calls directly into the calendar — all without human involvement.",
    results: [
      { metric: "120+", label: "Demos booked per month" },
      { metric: "3x", label: "More pipeline generated" },
      { metric: "$14k", label: "Monthly cost saved" },
      { metric: "6 days", label: "Time to deployment" },
    ],
    stack: ["LangChain", "GPT-4", "Python", "Outreach API", "Google Calendar API", "Supabase"],
    testimonial: "ZENTIC built us an AI SDR that outperforms our entire human team. The ROI was visible within the first week. I wish we had done this 12 months earlier.",
    author: "Alex Rivera, CEO at GrowthStack",
  },
  {
    id: "databridge",
    emoji: "📊",
    tag: "AI Automation",
    tagColor: "#22d3ee",
    title: "DataBridge — Intelligent ETL Automation System",
    client: "Analytics SaaS · UK",
    bg: "linear-gradient(135deg, #0d1117, #0a2a1a, #0d2b14)",
    challenge: "A UK-based analytics company had 12 different data sources — Salesforce, HubSpot, Stripe, Google Analytics, and 8 others. Their data team was spending 40 hours per week manually pulling, cleaning, and merging data into spreadsheets before any analysis could begin.",
    solution: "We designed a fully automated ETL pipeline using n8n and custom Python scripts. The pipeline pulls data from all 12 sources on a schedule, uses AI to clean and normalise inconsistent fields, flags anomalies, and pushes the clean data into a Supabase database that feeds a live dashboard.",
    results: [
      { metric: "40hrs", label: "Saved per week" },
      { metric: "12", label: "Data sources connected" },
      { metric: "99.2%", label: "Data accuracy rate" },
      { metric: "2 weeks", label: "Time to deployment" },
    ],
    stack: ["Python", "n8n", "Supabase", "OpenAI API", "Google Sheets API", "Stripe API"],
    testimonial: "What used to take our team 40 hours now takes zero. The pipeline runs overnight and our dashboard is always fresh. ZENTIC delivered exactly what they promised, on time.",
    author: "Sarah Kim, COO at DataFlow Inc.",
  },
  {
    id: "novamind",
    emoji: "✨",
    tag: "Generative AI",
    tagColor: "#a78bfa",
    title: "NovaMind — AI Content Generation Platform",
    client: "Marketing Agency · UAE",
    bg: "linear-gradient(135deg, #1a0533, #2d0d5c, #1a0533)",
    challenge: "A UAE-based marketing agency managing 23 client accounts was struggling to produce consistent, high-quality social media content at scale. Their content team of 6 was producing content for 23 brands simultaneously — leading to burnout, inconsistency, and missed deadlines.",
    solution: "We built NovaMind — a custom generative AI platform where each client brand gets its own AI profile (tone of voice, audience, content pillars, visual style). Marketers input a topic or campaign brief, and the platform generates a full 30-day content calendar in under 60 seconds.",
    results: [
      { metric: "30 days", label: "Content in 60 seconds" },
      { metric: "10x", label: "Content output increase" },
      { metric: "23", label: "Brand profiles managed" },
      { metric: "4 weeks", label: "Time to deployment" },
    ],
    stack: ["Next.js", "Claude API", "OpenAI API", "Stripe", "Supabase", "Vercel"],
    testimonial: "NovaMind changed how our entire agency operates. We went from stressed and behind to ahead of schedule on every account. Our clients love the quality and consistency.",
    author: "James Park, Founder at NexaCart",
  },
  {
    id: "pulsedesk",
    emoji: "🎧",
    tag: "AI Chatbot",
    tagColor: "#f59e0b",
    title: "PulseDesk — AI Customer Support System",
    client: "E-commerce Brand · Pakistan",
    bg: "linear-gradient(135deg, #1a1a0f, #2a2008, #1a1505)",
    challenge: "A growing e-commerce brand was receiving 800+ customer support messages daily across WhatsApp, Instagram DMs, and email. Their support team of 3 was overwhelmed, response times were averaging 6 hours, and customer satisfaction was dropping fast.",
    solution: "We built PulseDesk — a unified AI support system powered by GPT-4 and trained on their entire product catalogue, return policy, shipping FAQs, and brand voice. The system connects to WhatsApp Business API, Instagram, and email — and handles order tracking, return requests, and complaints automatically.",
    results: [
      { metric: "80%", label: "Tickets resolved by AI" },
      { metric: "4 min", label: "Average response time" },
      { metric: "800+", label: "Daily messages handled" },
      { metric: "4.8★", label: "Customer satisfaction" },
    ],
    stack: ["GPT-4", "WhatsApp Business API", "Instagram API", "Node.js", "Supabase", "Redis"],
    testimonial: "Our support went from a nightmare to completely hands-off. The AI handles 80% of tickets perfectly. Our 3-person team now focuses on edge cases and complex issues only.",
    author: "Mia Chen, Head of Ops at PulseStore",
  },
];

export default function ProjectsPage() {
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
            Case Studies
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: "24px", color: "#f1f5f9" }}
          >
            Real Problems.{" "}
            <span style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Results.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.75, fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}
          >
            Every project below is a real system we built that solved a real business problem. No mockups. No hypotheticals. Just results.
          </motion.p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {projects.map((p) => (
            <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ background: "#0c1120", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", overflow: "hidden" }}>

                {/* Thumbnail */}
                <div style={{ height: "220px", background: p.bg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 48px", position: "relative" }}>
                  <div>
                    <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: p.tagColor, background: `${p.tagColor}20`, border: `1px solid ${p.tagColor}40`, borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
                      {p.tag}
                    </span>
                    <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.5px", lineHeight: 1.2, maxWidth: "500px" }}>{p.title}</h2>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>{p.client}</p>
                  </div>
                  <div style={{ fontSize: "72px", opacity: 0.8 }}>{p.emoji}</div>
                </div>

                {/* Content */}
                <div style={{ padding: "40px 48px" }}>

                  {/* Results */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "16px", marginBottom: "40px", padding: "24px", background: "#050810", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.04)" }}>
                    {p.results.map((r, j) => (
                      <div key={j} style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "4px" }}>{r.metric}</div>
                        <div style={{ fontSize: "11px", color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em" }}>{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge + Solution */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginBottom: "40px" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
                        <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569" }}>The Challenge</span>
                      </div>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.8 }}>{p.challenge}</p>
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22d3ee" }} />
                        <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569" }}>Our Solution</span>
                      </div>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.8 }}>{p.solution}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div style={{ marginBottom: "32px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "12px" }}>Tech Stack</p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {p.stack.map((tech, j) => (
                        <span key={j} style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "999px", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", color: "#a78bfa" }}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "16px", padding: "24px 28px", borderLeft: "3px solid #6366f1" }}>
                    <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.75, fontStyle: "italic", marginBottom: "12px" }}>
                      &ldquo;{p.testimonial}&rdquo;
                    </p>
                    <p style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600 }}>— {p.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 24px", backgroundColor: "#0c1120", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9", marginBottom: "16px" }}>
              Want Results Like These?
            </h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.7, fontWeight: 300, marginBottom: "32px" }}>
              Book a free strategy call and let&apos;s map out exactly how we can build something like this for your business.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #6366f1, #7c3aed)", color: "white", fontWeight: 500, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontSize: "15px", boxShadow: "0 0 32px rgba(99,102,241,0.3)" }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", fontWeight: 400, padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontSize: "15px" }}>
                View Services <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
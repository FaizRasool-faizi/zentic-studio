"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, X, Zap, Shield, Clock, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "one-time",
    desc: "Perfect for a single AI solution to test the waters",
    color: "#6366f1",
    featured: false,
    features: [
      { text: "1 AI Chatbot (GPT-4 powered)", included: true },
      { text: "Website embed integration", included: true },
      { text: "1 Automation workflow", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Full source code handover", included: true },
      { text: "30-day support & bug fixes", included: true },
      { text: "Agentic AI system", included: false },
      { text: "Monthly strategy calls", included: false },
      { text: "Priority Slack support", included: false },
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "per month",
    desc: "For businesses serious about scaling with AI",
    color: "#a78bfa",
    featured: true,
    features: [
      { text: "Full AI chatbot suite (all channels)", included: true },
      { text: "5 automation workflows", included: true },
      { text: "1 Agentic AI system", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Full source code handover", included: true },
      { text: "90-day support & maintenance", included: true },
      { text: "Monthly strategy call (1hr)", included: true },
      { text: "Priority Slack support (24hr)", included: true },
      { text: "White-label rights", included: false },
    ],
    cta: "Start Now →",
    href: "/contact",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored scope",
    desc: "For teams that need a full AI infrastructure partner",
    color: "#22d3ee",
    featured: false,
    features: [
      { text: "Everything in Growth plan", included: true },
      { text: "Unlimited automation workflows", included: true },
      { text: "Multiple agentic AI systems", included: true },
      { text: "Custom LLM fine-tuning", included: true },
      { text: "Dedicated AI engineer", included: true },
      { text: "12-month support & updates", included: true },
      { text: "Weekly strategy calls", included: true },
      { text: "Priority Slack support (4hr)", included: true },
      { text: "White-label rights", included: true },
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

const tools = [
  {
    name: "LeadBot Pro",
    desc: "A fully configured GPT-4 chatbot that qualifies website visitors, captures leads, and books discovery calls — all automatically. Deploy on your site in under 10 minutes.",
    price: "$297",
    originalPrice: "$497",
    tag: "Most Popular",
    tagColor: "#6366f1",
    emoji: "🤖",
    features: [
      "GPT-4 powered responses",
      "Lead capture to Google Sheets or CRM",
      "Calendar booking integration",
      "Customisable persona & tone",
      "30-day email support",
    ],
  },
  {
    name: "ContentAI",
    desc: "Generate a full month of social media content — captions, hashtags, image prompts — for any brand in under 60 seconds. Supports Instagram, LinkedIn, Twitter, and Facebook.",
    price: "$197",
    originalPrice: "$297",
    tag: "New Release",
    tagColor: "#22d3ee",
    emoji: "✍️",
    features: [
      "30-day content calendar output",
      "5 brand profile slots",
      "Platform-specific formatting",
      "Image prompt generation",
      "Lifetime access & updates",
    ],
  },
  {
    name: "AutoReply",
    desc: "Connect your Gmail or support inbox and let AI handle tier-1 support tickets automatically. Trained on your FAQ and product docs. Escalates only when it truly cannot help.",
    price: "$147",
    originalPrice: "$247",
    tag: "Bestseller",
    tagColor: "#a78bfa",
    emoji: "📧",
    features: [
      "Gmail & Outlook integration",
      "Trained on your FAQ docs",
      "Smart escalation rules",
      "Response tone customisation",
      "Full conversation history",
    ],
  },
  {
    name: "DataExtract AI",
    desc: "Upload any PDF, invoice, or document and instantly extract structured data into a spreadsheet. Handles receipts, contracts, reports, and more with 98%+ accuracy.",
    price: "$127",
    originalPrice: "$197",
    tag: "Hot",
    tagColor: "#f59e0b",
    emoji: "📊",
    features: [
      "PDF, Word, image support",
      "Output to CSV or Google Sheets",
      "Batch processing (up to 100 files)",
      "Custom extraction templates",
      "API access included",
    ],
  },
];

const faqs = [
  {
    q: "Do I own the code after you build it?",
    a: "Yes — 100%. Every project comes with a full source code handover. You own everything we build. We do not hold your code hostage or lock you into proprietary systems.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Every package includes a support period (30–90 days depending on plan) where we fix bugs and make minor adjustments at no extra cost. After that, we offer affordable maintenance retainers.",
  },
  {
    q: "How does payment work?",
    a: "For project-based work, we take 50% upfront and 50% on delivery. For monthly retainers, billing is on the 1st of each month. We accept bank transfer, Wise, and PayPal.",
  },
  {
    q: "Can I upgrade from Starter to Growth later?",
    a: "Absolutely. Many clients start with a Starter project to see results, then upgrade to Growth once they see the ROI. We credit a portion of your initial payment towards the upgrade.",
  },
  {
    q: "Do the AI tools require technical knowledge to set up?",
    a: "No. Every tool comes with a step-by-step setup guide and a video walkthrough. Most tools are live within 10–30 minutes of purchase. If you get stuck, email support is included.",
  },
  {
    q: "Can you connect AI to my existing tools like HubSpot or Salesforce?",
    a: "Yes. We integrate with virtually any platform that has an API — HubSpot, Salesforce, Notion, Airtable, Slack, WhatsApp, Google Workspace, and hundreds more.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    desc: "Not happy with the result? We will rebuild it or refund you. No arguments.",
    color: "#22d3ee",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We commit to deadlines in writing. If we miss one, you get a 10% discount on your invoice.",
    color: "#6366f1",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most projects ship in 2–4 weeks. Chatbots and automations often go live in 7 days.",
    color: "#a78bfa",
  },
  {
    icon: Star,
    title: "Quality Promise",
    desc: "Every system is tested, documented, and reviewed by a senior engineer before handover.",
    color: "#f59e0b",
  },
];

export default function PricingPage() {
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
            Transparent Pricing
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
            Invest in AI.{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Reap the Returns.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{
              fontSize: "18px", color: "#64748b",
              lineHeight: 1.75, fontWeight: 300,
              maxWidth: "520px", margin: "0 auto",
            }}
          >
            Every package is designed to deliver measurable ROI within 90 days.
            No hidden fees. No lock-in contracts. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px", alignItems: "start",
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp} custom={i}
              style={{
                position: "relative",
                background: plan.featured
                  ? "linear-gradient(160deg, rgba(99,102,241,0.1), #0c1120 60%)"
                  : "#0c1120",
                border: plan.featured
                  ? "1px solid rgba(99,102,241,0.45)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "36px 32px",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div style={{
                  position: "absolute", top: "-14px",
                  left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  color: "white", fontSize: "10px", fontWeight: 700,
                  padding: "5px 18px", borderRadius: "999px",
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                }}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <p style={{
                fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.12em",
                color: "#475569", marginBottom: "8px",
              }}>
                {plan.name}
              </p>

              {/* Price */}
              <div style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "52px", fontWeight: 800,
                background: `linear-gradient(135deg, ${plan.color}, #a78bfa)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1, marginBottom: "4px",
              }}>
                {plan.price}
              </div>
              <p style={{
                fontSize: "13px", color: "#475569",
                marginBottom: "8px",
              }}>
                {plan.period}
              </p>
              <p style={{
                fontSize: "14px", color: "#64748b",
                marginBottom: "32px", lineHeight: 1.6,
              }}>
                {plan.desc}
              </p>

              {/* Features */}
              <ul style={{
                listStyle: "none",
                display: "flex", flexDirection: "column",
                gap: "11px", marginBottom: "36px",
              }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                  }}>
                    {f.included ? (
                      <Check size={15} color="#22d3ee" style={{ flexShrink: 0 }} />
                    ) : (
                      <X size={15} color="#334155" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{
                      fontSize: "13px",
                      color: f.included ? "#94a3b8" : "#334155",
                    }}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                style={{
                  display: "block", textAlign: "center",
                  fontSize: "14px", fontWeight: 600,
                  padding: "14px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  background: plan.featured
                    ? "linear-gradient(135deg, #6366f1, #7c3aed)"
                    : "transparent",
                  color: plan.featured ? "white" : "#f1f5f9",
                  border: plan.featured
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: plan.featured
                    ? "0 0 24px rgba(99,102,241,0.3)"
                    : "none",
                  transition: "opacity 0.2s",
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section style={{
        padding: "80px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800, letterSpacing: "-0.5px",
              color: "#f1f5f9",
            }}>
              Our Guarantees to You
            </h2>
          </motion.div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}>
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i}
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px", padding: "28px",
                  textAlign: "center",
                }}
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: `${g.color}12`,
                  border: `1px solid ${g.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <g.icon size={22} color={g.color} />
                </div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "15px", fontWeight: 700,
                  color: "#f1f5f9", marginBottom: "8px",
                }}>
                  {g.title}
                </h3>
                <p style={{
                  fontSize: "13px", color: "#64748b",
                  lineHeight: 1.7,
                }}>
                  {g.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Tools Store ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ marginBottom: "64px" }}
          >
            <span style={{
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#a78bfa", marginBottom: "12px", display: "block",
            }}>
              AI Tools Store
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "12px",
            }}>
              Ready-to-Deploy AI Tools
            </h2>
            <p style={{
              fontSize: "16px", color: "#64748b",
              fontWeight: 300, maxWidth: "440px", lineHeight: 1.7,
            }}>
              Buy once. Deploy in minutes. Start generating results today.
              No subscription, no hidden fees.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "20px",
          }}>
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i % 2}
                style={{
                  background: "#0c1120",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "24px",
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div>
                  {/* Tag + emoji row */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    gap: "10px", marginBottom: "12px",
                  }}>
                    <span style={{ fontSize: "28px" }}>{tool.emoji}</span>
                    <span style={{
                      fontSize: "10px", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      color: tool.tagColor,
                      background: `${tool.tagColor}15`,
                      border: `1px solid ${tool.tagColor}30`,
                      borderRadius: "999px", padding: "3px 10px",
                    }}>
                      {tool.tag}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "20px", fontWeight: 700,
                    color: "#f1f5f9", marginBottom: "10px",
                  }}>
                    {tool.name}
                  </h3>
                  <p style={{
                    fontSize: "13px", color: "#64748b",
                    lineHeight: 1.75, marginBottom: "20px",
                    fontWeight: 300,
                  }}>
                    {tool.desc}
                  </p>

                  {/* Features */}
                  <div style={{
                    display: "flex", flexDirection: "column", gap: "8px",
                  }}>
                    {tool.features.map((f, j) => (
                      <div key={j} style={{
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <Check size={13} color="#22d3ee" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "flex-end", justifyContent: "space-between",
                  minWidth: "120px",
                }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontSize: "12px", color: "#334155",
                      textDecoration: "line-through", marginBottom: "2px",
                    }}>
                      {tool.originalPrice}
                    </div>
                    <div style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "32px", fontWeight: 800,
                      background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}>
                      {tool.price}
                    </div>
                    <div style={{
                      fontSize: "10px", color: "#475569",
                      textTransform: "uppercase", letterSpacing: "0.06em",
                      marginTop: "2px",
                    }}>
                      one-time
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                      color: "white", fontWeight: 500,
                      padding: "10px 18px", borderRadius: "10px",
                      textDecoration: "none", fontSize: "13px",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 16px rgba(99,102,241,0.25)",
                    }}
                  >
                    Get Tool <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <span style={{
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#a78bfa", marginBottom: "12px", display: "block",
            }}>
              FAQ
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9",
            }}>
              Questions & Answers
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i % 3}
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px", padding: "28px 32px",
                }}
              >
                <h3 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "16px", fontWeight: 700,
                  color: "#f1f5f9", marginBottom: "12px",
                  letterSpacing: "-0.2px",
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: "14px", color: "#64748b",
                  lineHeight: 1.8, fontWeight: 300,
                }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.1), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "560px", margin: "0 auto" }}>
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
              Still Have Questions?
            </h2>
            <p style={{
              fontSize: "16px", color: "#64748b",
              lineHeight: 1.7, fontWeight: 300, marginBottom: "32px",
            }}>
              Book a free 30-minute call. No sales pressure — just an honest
              conversation about what will work best for your business.
            </p>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "white", fontWeight: 500,
              padding: "14px 32px", borderRadius: "12px",
              textDecoration: "none", fontSize: "15px",
              boxShadow: "0 0 32px rgba(99,102,241,0.3)",
            }}>
              Book a Free Call <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
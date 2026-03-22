"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const featured = {
  slug: "agentic-ai-future-of-work",
  tag: "Agentic AI",
  tagColor: "#6366f1",
  title: "Agentic AI: Why 2025 Is the Year Autonomous Agents Go Mainstream",
  excerpt:
    "For years, AI meant chatbots and autocomplete. That era is ending. Agentic AI — systems that plan, decide, and act independently — is about to reshape every industry. Here is what that means for your business and why you cannot afford to ignore it.",
  author: "Faiz Ahmed",
  role: "Founder, ZENTIC Studio",
  date: "March 15, 2025",
  readTime: "8 min read",
  avatar: "FA",
  avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
  bg: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  emoji: "⚡",
};

const posts = [
  {
    slug: "rag-chatbots-business",
    tag: "AI Chatbots",
    tagColor: "#a78bfa",
    title: "How RAG-Powered Chatbots Are Replacing Traditional Customer Support",
    excerpt:
      "Retrieval-Augmented Generation lets you build chatbots that answer questions from your own data — not generic training data. Here is how it works and why it matters.",
    author: "Faiz Ahmed",
    date: "March 8, 2025",
    readTime: "6 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "💬",
    bg: "linear-gradient(135deg, #1a0533, #2d0d5c)",
  },
  {
    slug: "n8n-automation-guide",
    tag: "AI Automation",
    tagColor: "#22d3ee",
    title: "The Non-Technical Founder's Guide to AI Automation with n8n",
    excerpt:
      "You do not need to write a single line of code to automate 80% of your business operations. This guide shows you exactly how to use n8n to eliminate repetitive work.",
    author: "Faiz Ahmed",
    date: "February 28, 2025",
    readTime: "10 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "⚙️",
    bg: "linear-gradient(135deg, #0d1117, #0a2a1a)",
  },
  {
    slug: "ai-calling-agents-sales",
    tag: "AI Calling",
    tagColor: "#f59e0b",
    title: "AI Calling Agents Are Closing Deals: The Complete 2025 Breakdown",
    excerpt:
      "Voice AI has crossed the uncanny valley. Modern AI calling agents sound human, handle objections, and book meetings — at a fraction of the cost of a human SDR team.",
    author: "Faiz Ahmed",
    date: "February 20, 2025",
    readTime: "7 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "📞",
    bg: "linear-gradient(135deg, #1a1505, #2a2008)",
  },
  {
    slug: "llm-fine-tuning-guide",
    tag: "Generative AI",
    tagColor: "#ec4899",
    title: "Fine-Tuning LLMs on Your Business Data: When, Why, and How",
    excerpt:
      "Generic ChatGPT is not enough for serious business applications. Fine-tuning a model on your data gives you a competitive moat that is extremely difficult to replicate.",
    author: "Faiz Ahmed",
    date: "February 12, 2025",
    readTime: "9 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "🧠",
    bg: "linear-gradient(135deg, #1a0010, #2d0020)",
  },
  {
    slug: "nextjs-ai-saas-stack",
    tag: "Full Stack Dev",
    tagColor: "#10b981",
    title: "The Perfect Tech Stack for Building an AI-Powered SaaS in 2025",
    excerpt:
      "Next.js 15, Supabase, Vercel, and the right AI APIs. This is the exact stack we use at ZENTIC to ship production-grade AI products in weeks, not months.",
    author: "Faiz Ahmed",
    date: "February 5, 2025",
    readTime: "11 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "🌐",
    bg: "linear-gradient(135deg, #001a0f, #002a18)",
  },
  {
    slug: "ai-agency-how-to-start",
    tag: "Agency Growth",
    tagColor: "#6366f1",
    title: "How to Start an AI Agency in 2025 With Zero Clients and $0",
    excerpt:
      "You do not need capital, a team, or years of experience. You need one skill, one case study, and a clear offer. Here is the exact roadmap I used to build ZENTIC from nothing.",
    author: "Faiz Ahmed",
    date: "January 28, 2025",
    readTime: "12 min read",
    avatar: "FA",
    avatarBg: "linear-gradient(135deg, #6366f1, #7c3aed)",
    emoji: "🚀",
    bg: "linear-gradient(135deg, #0f0c29, #1a1040)",
  },
];

const categories = [
  { label: "All Posts", count: 7, active: true },
  { label: "Agentic AI", count: 2, active: false },
  { label: "AI Automation", count: 2, active: false },
  { label: "AI Chatbots", count: 1, active: false },
  { label: "Generative AI", count: 1, active: false },
  { label: "Full Stack Dev", count: 1, active: false },
];

export default function BlogPage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        padding: "160px 24px 80px",
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
            The ZENTIC Blog
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
            AI Insights for{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Forward Thinkers
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
            Practical guides, deep dives, and honest takes on AI automation,
            agentic systems, and building businesses with artificial intelligence.
          </motion.p>
        </div>
      </section>

      {/* ── Category filters ── */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "flex", gap: "8px", flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              style={{
                fontSize: "13px", padding: "7px 16px",
                borderRadius: "999px",
                border: cat.active
                  ? "1px solid rgba(99,102,241,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: cat.active
                  ? "rgba(99,102,241,0.12)"
                  : "transparent",
                color: cat.active ? "#a78bfa" : "#64748b",
                cursor: "pointer",
                fontWeight: cat.active ? 500 : 400,
                display: "flex", alignItems: "center", gap: "6px",
              }}
            >
              {cat.label}
              <span style={{
                fontSize: "10px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "999px",
                padding: "1px 6px",
                color: "#475569",
              }}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            <div style={{
              background: "#0c1120",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px", overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}>
              {/* Thumbnail */}
              <div style={{
                minHeight: "280px",
                background: featured.bg,
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "80px",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(99,102,241,0.15), transparent)",
                }} />
                <span style={{ position: "relative", zIndex: 1 }}>{featured.emoji}</span>
              </div>

              {/* Content */}
              <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: featured.tagColor,
                    background: `${featured.tagColor}18`,
                    border: `1px solid ${featured.tagColor}35`,
                    borderRadius: "999px", padding: "3px 10px",
                  }}>
                    {featured.tag}
                  </span>
                  <span style={{
                    fontSize: "10px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#f59e0b",
                    background: "rgba(245,158,11,0.12)",
                    border: "1px solid rgba(245,158,11,0.25)",
                    borderRadius: "999px", padding: "3px 10px",
                  }}>
                    Featured
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 800, letterSpacing: "-0.5px",
                  color: "#f1f5f9", marginBottom: "16px",
                  lineHeight: 1.2,
                }}>
                  {featured.title}
                </h2>

                <p style={{
                  fontSize: "14px", color: "#64748b",
                  lineHeight: 1.8, marginBottom: "28px",
                  fontWeight: 300,
                }}>
                  {featured.excerpt}
                </p>

                {/* Author + meta */}
                <div style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: featured.avatarBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", fontWeight: 700, color: "white",
                    }}>
                      {featured.avatar}
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 500, color: "#f1f5f9" }}>
                        {featured.author}
                      </p>
                      <p style={{ fontSize: "11px", color: "#475569" }}>
                        {featured.date} · {featured.readTime}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "13px", color: "#6366f1", fontWeight: 500,
                  }}>
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── All Posts Grid ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontSize: "11px", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#475569", marginBottom: "32px",
          }}>
            All Articles
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i % 3}
                style={{
                  background: "#0c1120",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s, border-color 0.3s",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  height: "140px",
                  background: post.bg,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "48px",
                  flexShrink: 0,
                }}>
                  {post.emoji}
                </div>

                {/* Content */}
                <div style={{
                  padding: "24px",
                  display: "flex", flexDirection: "column", flex: 1,
                }}>
                  {/* Tag */}
                  <span style={{
                    display: "inline-block", width: "fit-content",
                    fontSize: "10px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: post.tagColor,
                    background: `${post.tagColor}15`,
                    border: `1px solid ${post.tagColor}30`,
                    borderRadius: "999px", padding: "3px 10px",
                    marginBottom: "12px",
                  }}>
                    {post.tag}
                  </span>

                  <h3 style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "16px", fontWeight: 700,
                    color: "#f1f5f9", marginBottom: "10px",
                    lineHeight: 1.35, letterSpacing: "-0.2px",
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: "13px", color: "#64748b",
                    lineHeight: 1.75, flex: 1,
                    marginBottom: "20px", fontWeight: 300,
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "50%",
                        background: post.avatarBg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "10px", fontWeight: 700, color: "white",
                      }}>
                        {post.avatar}
                      </div>
                      <div>
                        <p style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500 }}>
                          {post.author}
                        </p>
                        <div style={{
                          display: "flex", alignItems: "center",
                          gap: "6px", fontSize: "10px", color: "#475569",
                        }}>
                          <Clock size={9} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      fontSize: "12px", color: "#6366f1", fontWeight: 500,
                    }}>
                      Read <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section style={{
        padding: "100px 24px",
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#f1f5f9", marginBottom: "16px",
            }}>
              Get AI Insights in Your Inbox
            </h2>
            <p style={{
              fontSize: "15px", color: "#64748b",
              lineHeight: 1.7, fontWeight: 300, marginBottom: "32px",
            }}>
              No fluff. No spam. Just practical AI content for business owners
              and founders — every two weeks.
            </p>
            <div style={{
              display: "flex", gap: "8px",
              maxWidth: "420px", margin: "0 auto",
              flexWrap: "wrap", justifyContent: "center",
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, minWidth: "200px",
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  fontSize: "14px", color: "#f1f5f9",
                  outline: "none",
                  fontFamily: "DM Sans, sans-serif",
                }}
              />
              <button style={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                border: "none", borderRadius: "10px",
                padding: "12px 24px",
                fontSize: "14px", fontWeight: 500,
                color: "white", cursor: "pointer",
                whiteSpace: "nowrap",
              }}>
                Subscribe →
              </button>
            </div>
            <p style={{
              fontSize: "11px", color: "#334155",
              marginTop: "12px",
            }}>
              Unsubscribe anytime · No spam ever
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
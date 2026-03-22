import Link from "next/link";
import { Zap, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ],
  Services: [
    { label: "AI Automation", href: "/services" },
    { label: "Agentic AI Systems", href: "/services" },
    { label: "AI Chatbots", href: "/services" },
    { label: "AI Calling Agents", href: "/services" },
    { label: "Generative AI", href: "/services" },
    { label: "Full Stack Dev", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0c1120",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 32px",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 2" }}>

            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                marginBottom: "16px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={16} color="white" fill="white" />
              </div>
              <span
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                <span className="gradient-text">ZENTIC</span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 300,
                    marginLeft: "4px",
                  }}
                >
                  Studio
                </span>
              </span>
            </Link>

            {/* Tagline */}
            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "300px",
                marginBottom: "24px",
              }}
            >
              We build AI automation, agentic systems, chatbots, and full-stack
              solutions that turn complex problems into competitive advantages.
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#64748b",
                }}
              >
                <Mail size={13} color="#6366f1" />
                <span>hello.faizidevx@gmail.com</span>
              </div>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#64748b",
                }}
              >
                <MapPin size={13} color="#6366f1" />
                <span>Remote · Worldwide</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#475569",
                  marginBottom: "20px",
                }}
              >
                {title}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "13px",
                        color: "#64748b",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#334155" }}>
            © {new Date().getFullYear()} ZENTIC Studio. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "#334155" }}>
            Built with Next.js · Deployed on Vercel · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
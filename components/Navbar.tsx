"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "rgba(5,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={14} color="white" fill="white" />
          </div>
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "-0.3px",
            }}
          >
            <span className="gradient-text">ZENTIC</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300, marginLeft: "4px" }}>
              Studio
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}
          className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: pathname === link.href ? "#f1f5f9" : "#94a3b8",
                transition: "color 0.2s",
                position: "relative",
                paddingBottom: "2px",
              }}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                    borderRadius: "1px",
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden-mobile"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            color: "white",
            padding: "8px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            transition: "opacity 0.2s",
          }}
        >
          Get Started →
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            color: "#94a3b8",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              overflow: "hidden",
              background: "rgba(12,17,32,0.97)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: pathname === link.href ? "#f1f5f9" : "#94a3b8",
                      fontWeight: pathname === link.href ? 500 : 400,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                    color: "white",
                    padding: "11px 20px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide/show helpers for mobile */}
      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </motion.header>
  );
}
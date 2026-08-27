import { useState } from "react";

const NAV_LINKS = [
  { label: "お店について", href: "#about" },
  { label: "メニュー", href: "#menu" },
  { label: "営業時間", href: "#hours" },
  { label: "アクセス", href: "#access" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)", backgroundColor: "#F7F0E4", color: "#2A1A0E" }}>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(247,240,228,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #D5C8B8" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#6B3A2A", letterSpacing: "0.05em", textDecoration: "none" }}>
            SUNABA coffee
          </a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: "0.82rem", color: "#6B3A2A", textDecoration: "none", letterSpacing: "0.05em", fontWeight: 400, transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C08B5C")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B3A2A")}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#6B3A2A", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translate(2px, 4px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#6B3A2A", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
            <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#6B3A2A", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translate(2px, -4px)" : "none" }} />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#F7F0E4", borderTop: "1px solid #D5C8B8", padding: "1rem 1.5rem 1.5rem" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "0.75rem 0", fontSize: "0.9rem", color: "#6B3A2A", textDecoration: "none", borderBottom: "1px solid #E8DDD0", letterSpacing: "0.05em" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        style={{ position: "relative", height: "100vh", minHeight: 560, overflow: "hidden" }}
      >
        <img
          src="https://images.unsplash.com/photo-1621871305450-7d9a2c6e6149?w=1600&h=900&fit=crop&auto=format"
          alt="SUNABAコーヒーの温かみある店内"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(42,26,14,0.72) 0%, rgba(42,26,14,0.3) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(1.5rem, 6vw, 7rem)" }}>
          <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.85rem", letterSpacing: "0.22em", marginBottom: "1.2rem", fontStyle: "italic" }}>
            Since 1994 — Imabari, Ehime
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", color: "#FDF8F0", fontSize: "clamp(2.4rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "0.04em", margin: 0 }}>
            SUNABA<br />
            <span style={{ fontWeight: 400 }}>coffee</span>
          </h1>
          <p style={{ color: "#E8DDD0", fontSize: "clamp(0.85rem, 2vw, 1.05rem)", marginTop: "1.5rem", maxWidth: 340, lineHeight: 1.9, fontWeight: 300 }}>
            創業30年。今治の街で、<br />毎日の一杯を大切に。
          </p>
          <a
            href="#menu"
            style={{ display: "inline-block", marginTop: "2.5rem", padding: "0.85rem 2.2rem", border: "1px solid #C08B5C", color: "#C08B5C", fontSize: "0.8rem", letterSpacing: "0.18em", textDecoration: "none", transition: "all 0.3s", alignSelf: "flex-start" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = "#C08B5C"; (e.target as HTMLElement).style.color = "#FDF8F0"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = "transparent"; (e.target as HTMLElement).style.color = "#C08B5C"; }}
          >
            メニューを見る
          </a>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: "#E8DDD0", fontSize: "0.65rem", letterSpacing: "0.2em" }}>SCROLL</span>
          <div style={{ width: 1, height: 40, backgroundColor: "#C08B5C", animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 4rem)" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "3rem", alignItems: "center" }}>
            {/* Text */}
            <div>
              <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.78rem", letterSpacing: "0.2em", marginBottom: "1rem", fontStyle: "italic" }}>
                Our Story
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "1.8rem", color: "#2A1A0E" }}>
                30年間、<br />変わらない味と場所。
              </h2>
              <div style={{ width: 40, height: 2, backgroundColor: "#C08B5C", marginBottom: "1.8rem" }} />
              <p style={{ fontSize: "0.92rem", lineHeight: 2.0, color: "#5A4035", fontWeight: 300, marginBottom: "1.2rem" }}>
                1994年の創業以来、愛媛県今治市の常盤町でコーヒーと食事を提供してきました。
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 2.0, color: "#5A4035", fontWeight: 300, marginBottom: "1.2rem" }}>
                大切なのは、ゆっくりとした時間。仕事の合間に、休日の朝に、ふとした瞬間に立ち寄れる場所でありたいと思っています。
              </p>
              <p style={{ fontSize: "0.92rem", lineHeight: 2.0, color: "#5A4035", fontWeight: 300 }}>
                地元の方々に長く愛されてきた理由は、変わらないこだわりと、一杯一杯に込めた想いにあると信じています。
              </p>
            </div>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1627743914480-5c0a391767f0?w=700&h=850&fit=crop&auto=format"
                alt="SUNABAコーヒーの店内、木製のテーブルと椅子"
                style={{ width: "100%", height: "clamp(320px, 50vw, 520px)", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "80%", height: "100%", border: "1px solid #D5C8B8", zIndex: -1 }} />
              <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", backgroundColor: "#6B3A2A", color: "#FDF8F0", padding: "0.8rem 1.2rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, lineHeight: 1 }}>30</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", marginTop: "0.25rem" }}>YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" style={{ backgroundColor: "#2A1A0E", padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 4rem)" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.78rem", letterSpacing: "0.2em", marginBottom: "1rem", fontStyle: "italic" }}>
              Our Menu
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#FDF8F0", letterSpacing: "0.03em" }}>
              こだわりのメニュー
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "2rem" }}>
            {/* Morning */}
            <div style={{ backgroundColor: "#3A2218", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1767974852460-0f9853038bdb?w=700&h=420&fit=crop&auto=format"
                alt="コーヒーとサンドイッチのモーニングセット"
                style={{ width: "100%", height: 240, objectFit: "cover", objectPosition: "center 50%", display: "block" }}
              />
              <div style={{ padding: "1.8rem" }}>
                <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.2em", marginBottom: "0.6rem" }}>MORNING</p>
                <h3 style={{ fontFamily: "var(--font-display)", color: "#FDF8F0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                  モーニングセット
                </h3>
                <p style={{ color: "#B8A898", fontSize: "0.88rem", lineHeight: 1.9, fontWeight: 300 }}>
                  コーヒーと一緒に楽しめる、毎朝手作りのトーストセット。9時から11時までの朝のひとときに。
                </p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(213,200,184,0.2)" }}>
                  <p style={{ color: "#E8DDD0", fontSize: "0.8rem", letterSpacing: "0.05em" }}>9:00 〜 11:00</p>
                </div>
              </div>
            </div>
            {/* Lunch Sandwich */}
            <div style={{ backgroundColor: "#3A2218", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1567234669013-216f3a40e02e?w=700&h=420&fit=crop&auto=format"
                alt="手作りサンドイッチ"
                style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "1.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
                  <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.2em" }}>LUNCH</p>
                  <span style={{ backgroundColor: "#6B3A2A", color: "#FDF8F0", fontSize: "0.6rem", padding: "0.15rem 0.5rem", letterSpacing: "0.1em" }}>人気</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", color: "#FDF8F0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                  手作りサンドイッチ
                </h3>
                <p style={{ color: "#B8A898", fontSize: "0.88rem", lineHeight: 1.9, fontWeight: 300 }}>
                  毎日丁寧に作る自家製サンドイッチ。季節の食材を使ったメニューは、リピーターに長く愛されています。
                </p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(213,200,184,0.2)" }}>
                  <p style={{ color: "#E8DDD0", fontSize: "0.8rem", letterSpacing: "0.05em" }}>11:00 〜 14:30 L.O.</p>
                </div>
              </div>
            </div>
            {/* Coffee */}
            <div style={{ backgroundColor: "#3A2218", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1655182418176-57d7fa51afa9?w=700&h=420&fit=crop&auto=format"
                alt="丁寧に淹れたコーヒー"
                style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "1.8rem" }}>
                <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.2em", marginBottom: "0.6rem" }}>COFFEE</p>
                <h3 style={{ fontFamily: "var(--font-display)", color: "#FDF8F0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                  こだわりの一杯
                </h3>
                <p style={{ color: "#B8A898", fontSize: "0.88rem", lineHeight: 1.9, fontWeight: 300 }}>
                  厳選した豆を丁寧にドリップ。ブレンドからストレートまで、お好みに合わせてお選びいただけます。
                </p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(213,200,184,0.2)" }}>
                  <p style={{ color: "#E8DDD0", fontSize: "0.8rem", letterSpacing: "0.05em" }}>終日ご提供</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 6vw, 4rem)", backgroundColor: "#FDF8F0" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem 3rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.78rem", letterSpacing: "0.2em", marginBottom: "0.6rem", fontStyle: "italic" }}>
              Hours &amp; Info
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, color: "#2A1A0E", margin: 0 }}>
              営業時間・定休日
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "stretch" }}>
            <div style={{ backgroundColor: "#F7F0E4", border: "1px solid #E8DDD0", padding: "1rem 1.8rem" }}>
              <p style={{ color: "#C08B5C", fontSize: "0.65rem", letterSpacing: "0.18em", marginBottom: "0.4rem" }}>OPEN</p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, color: "#2A1A0E" }}>9:00 – 17:00</p>
            </div>
            <div style={{ backgroundColor: "#F7F0E4", border: "1px solid #E8DDD0", padding: "1rem 1.8rem" }}>
              <p style={{ color: "#C08B5C", fontSize: "0.65rem", letterSpacing: "0.18em", marginBottom: "0.4rem" }}>CLOSED</p>
              <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#2A1A0E" }}>火曜日・第1月曜日</p>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 4rem)", backgroundColor: "#F7F0E4" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.78rem", letterSpacing: "0.2em", marginBottom: "1rem", fontStyle: "italic" }}>
              Access
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "#2A1A0E" }}>
              アクセス
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "2.5rem", alignItems: "start" }}>
            {/* Map placeholder / link */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://maps.google.com/?q=今治市常盤町4-8-18"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
              >
                <div style={{ backgroundColor: "#E8DDD0", height: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", transition: "background-color 0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#D5C8B8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E8DDD0")}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#6B3A2A" />
                    <circle cx="12" cy="9" r="2.5" fill="#FDF8F0" />
                  </svg>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#6B3A2A", fontWeight: 600 }}>Google マップで開く</p>
                  <p style={{ fontSize: "0.75rem", color: "#9B8A78" }}>クリックして地図を表示</p>
                </div>
              </a>
            </div>
            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.18em", marginBottom: "0.8rem" }}>ADDRESS</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.8, color: "#2A1A0E" }}>
                  〒794-0015<br />
                  愛媛県今治市常盤町4-8-18
                </p>
              </div>
              <div>
                <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.18em", marginBottom: "0.8rem" }}>HOURS</p>
                <p style={{ fontSize: "0.92rem", color: "#2A1A0E", fontWeight: 500 }}>9:00 – 17:00</p>
              </div>
              <div>
                <p style={{ color: "#C08B5C", fontSize: "0.7rem", letterSpacing: "0.18em", marginBottom: "0.8rem" }}>PARKING</p>
                <p style={{ fontSize: "0.88rem", color: "#5A4035", lineHeight: 1.8, fontWeight: 300 }}>
                  店舗前に駐車スペースあり<br />
                  近隣にコインパーキングもございます
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=今治市常盤町4-8-18"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 2rem", backgroundColor: "#6B3A2A", color: "#FDF8F0", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.1em", transition: "background-color 0.3s", alignSelf: "flex-start" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#8B4A36")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#6B3A2A")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                地図アプリで開く
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 4rem)", backgroundColor: "#2A1A0E" }}>
        <div className="max-w-3xl mx-auto" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "0.78rem", letterSpacing: "0.2em", marginBottom: "1rem", fontStyle: "italic" }}>
            Contact
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "#FDF8F0", marginBottom: "1.5rem" }}>
            お問い合わせ
          </h2>
          <div style={{ width: 40, height: 2, backgroundColor: "#C08B5C", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.9rem", color: "#B8A898", lineHeight: 1.9, marginBottom: "3rem", fontWeight: 300 }}>
            ご予約・ご質問・ケータリングのご相談など、<br />
            お気軽にメールにてお問い合わせください。
          </p>
          {/* Contact Card */}
          <div style={{ backgroundColor: "#3A2218", padding: "2.5rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C08B5C">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span style={{ color: "#E8DDD0", fontSize: "0.9rem", letterSpacing: "0.05em" }}>メールでお問い合わせ</span>
              </div>
              <a
                href="mailto:info@sunabacoffee.jp"
                style={{ fontFamily: "var(--font-serif)", color: "#C08B5C", fontSize: "clamp(0.95rem, 3vw, 1.2rem)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E8DDD0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#C08B5C")}
              >
                info@sunabacoffee.jp
              </a>
            </div>
          </div>
          <a
            href="mailto:info@sunabacoffee.jp"
            style={{ display: "inline-block", padding: "1rem 3rem", border: "1px solid #C08B5C", color: "#C08B5C", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.18em", transition: "all 0.3s" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = "#C08B5C"; (e.target as HTMLElement).style.color = "#FDF8F0"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = "transparent"; (e.target as HTMLElement).style.color = "#C08B5C"; }}
          >
            メールを送る
          </a>
          <p style={{ marginTop: "2rem", fontSize: "0.78rem", color: "#9B8A78", lineHeight: 1.8 }}>
            ※ お返事まで数日お時間をいただく場合がございます。<br />
            ※ お急ぎの場合は営業時間内にご来店ください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1A0E06", padding: "3rem clamp(1.5rem, 6vw, 4rem)" }}>
        <div className="max-w-6xl mx-auto" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
          <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "#C08B5C", letterSpacing: "0.06em", textDecoration: "none" }}>
            SUNABA coffee
          </a>
          <p style={{ fontSize: "0.78rem", color: "#6B5A50", lineHeight: 1.8 }}>
            〒794-0015 愛媛県今治市常盤町4-8-18<br />
            営業時間 9:00 – 17:00
          </p>
          <div style={{ width: "100%", height: 1, backgroundColor: "#2A1A0E", margin: "0.5rem 0" }} />
          <p style={{ fontSize: "0.72rem", color: "#4A3A30" }}>
            © {new Date().getFullYear()} SUNABA coffee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

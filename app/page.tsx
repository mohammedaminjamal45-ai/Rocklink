"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check if features section is visible
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleFeatures(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClaim = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      window.location.href = `/register?username=${username.trim()}`;
    }
  };

  return (
    <div style={{
      background: "#0a0a0a",
      color: "#e8e8e8",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      
      {/* ===== NAVIGATION ===== */}
      <nav style={{
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
        transition: "all 0.4s ease"
      }}>
        <div style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#ffffff",
          letterSpacing: "-0.5px"
        }}>
          rock
        </div>
        <div style={{
          display: "flex",
          gap: "32px",
          alignItems: "center"
        }}>
          <a href="/login" style={{
            color: "#888888",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "400",
            transition: "color 0.2s"
          }}>
            Sign in
          </a>
          <a href="/register" style={{
            background: "#2b7a4b",
            color: "#ffffff",
            padding: "10px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
            transition: "background 0.2s"
          }}>
            Get started
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px 40px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          width: "100%"
        }}>
          
          {/* Left - Copy */}
          <div>
            <div style={{
              display: "inline-block",
              background: "rgba(43,122,75,0.12)",
              color: "#2b7a4b",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "500",
              marginBottom: "24px",
              letterSpacing: "0.3px"
            }}>
              🚀 Now in beta
            </div>
            
            <h1 style={{
              fontSize: "clamp(38px, 5vw, 68px)",
              fontWeight: "700",
              lineHeight: "1.05",
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.03em"
            }}>
              Everything you are.
              <br />
              <span style={{ color: "#2b7a4b" }}>One, simple link.</span>
            </h1>
            
            <p style={{
              fontSize: "clamp(16px, 1.1vw, 19px)",
              color: "#888888",
              maxWidth: "440px",
              lineHeight: "1.8",
              marginBottom: "32px"
            }}>
              Connect your store, share your content, and grow your audience — 
              all from one link in your bio.
            </p>

            {/* Claim your link - like Linktree's hero CTA */}
            <form onSubmit={handleClaim} style={{
              display: "flex",
              gap: "0",
              maxWidth: "440px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                color: "#666666",
                fontSize: "14px",
                fontWeight: "400",
                background: "rgba(0,0,0,0.3)"
              }}>
                rock.bio/
              </div>
              <input
                type="text"
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  flex: 1,
                  padding: "16px 12px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "15px",
                  outline: "none",
                  fontWeight: "400"
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "16px 28px",
                  background: "#2b7a4b",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
              >
                Claim →
              </button>
            </form>

            <p style={{
              color: "#555555",
              fontSize: "13px",
              marginTop: "14px"
            }}>
              Free forever • No credit card • 2.5% transaction fee
            </p>
          </div>

          {/* Right - Visual Preview */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.04)",
            padding: "36px",
            maxWidth: "440px",
            margin: "0 auto",
            width: "100%"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(0,0,0,0.4)",
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.04)",
              marginBottom: "24px"
            }}>
              <span style={{ color: "#666666", fontSize: "14px" }}>🔗</span>
              <span style={{ color: "#888888", fontSize: "14px" }}>rock.bio/</span>
              <span style={{ color: "#2b7a4b", fontWeight: "500" }}>yourname</span>
              <span style={{ color: "#444444", fontSize: "12px", marginLeft: "auto" }}>✓ Live</span>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2b7a4b, #1a4d2e)",
                margin: "0 auto 12px auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                color: "#ffffff",
                fontWeight: "600"
              }}>
                R
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff" }}>Your Name</h3>
              <p style={{ color: "#888888", fontSize: "13px" }}>Creator & Educator</p>

              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                margin: "16px 0"
              }}>
                <span style={{ fontSize: "18px", color: "#666666" }}>▸</span>
                <span style={{ fontSize: "18px", color: "#666666" }}>▸</span>
                <span style={{ fontSize: "18px", color: "#666666" }}>▸</span>
                <span style={{ fontSize: "18px", color: "#666666" }}>▸</span>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px"
              }}>
                <div style={{
                  background: "rgba(0,0,0,0.4)",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.04)"
                }}>
                  <p style={{ color: "#666666", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3px" }}>Products</p>
                  <p style={{ color: "#ffffff", fontSize: "18px", fontWeight: "600" }}>8</p>
                </div>
                <div style={{
                  background: "rgba(0,0,0,0.4)",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.04)"
                }}>
                  <p style={{ color: "#666666", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3px" }}>Followers</p>
                  <p style={{ color: "#2b7a4b", fontSize: "18px", fontWeight: "600" }}>12.4k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SOCIAL PROOF: Trusted by ===== */}
      <div style={{
        padding: "48px 40px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
        background: "rgba(255,255,255,0.01)"
      }}>
        <p style={{
          color: "#555555",
          fontSize: "12px",
          fontWeight: "500",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "24px"
        }}>
          Trusted by creators everywhere
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          flexWrap: "wrap",
          opacity: 0.4
        }}>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>YouTube</span>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>Instagram</span>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>TikTok</span>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>X</span>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>Spotify</span>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#ffffff" }}>Threads</span>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div ref={featuresRef} style={{
        padding: "100px 40px",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{
            color: "#2b7a4b",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>
            Features
          </p>
          <h2 style={{
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: "600",
            color: "#ffffff",
            marginTop: "8px",
            letterSpacing: "-0.02em"
          }}>
            One link. Infinite possibilities.
          </h2>
          <p style={{ color: "#888888", fontSize: "17px", marginTop: "8px" }}>
            Everything you need to share, sell, and grow
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px"
        }}>
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "16px",
            padding: "32px",
            opacity: visibleFeatures ? 1 : 0.6,
            transform: visibleFeatures ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "rgba(43,122,75,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              marginBottom: "16px",
              color: "#2b7a4b"
            }}>⌘</div>
            <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#ffffff", marginBottom: "8px" }}>
              Share everything
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              Your store, content, socials — all on one page. One link to share everywhere.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "16px",
            padding: "32px",
            opacity: visibleFeatures ? 1 : 0.6,
            transform: visibleFeatures ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "rgba(43,122,75,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              marginBottom: "16px",
              color: "#2b7a4b"
            }}>◈</div>
            <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#ffffff", marginBottom: "8px" }}>
              Sell products
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              Digital products, physical merch, subscriptions — all with one-tap checkout.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "16px",
            padding: "32px",
            opacity: visibleFeatures ? 1 : 0.6,
            transform: visibleFeatures ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.2s"
          }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "rgba(43,122,75,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              marginBottom: "16px",
              color: "#2b7a4b"
            }}>◉</div>
            <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#ffffff", marginBottom: "8px" }}>
              Analyze & grow
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              Track what's working. Understand your audience. Keep them engaged.
            </p>
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS (Social Proof) ===== */}
      <div style={{
        padding: "80px 40px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            color: "#2b7a4b",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>
            What creators say
          </p>
          <h2 style={{
            fontSize: "clamp(26px, 2.5vw, 40px)",
            fontWeight: "600",
            color: "#ffffff",
            marginTop: "8px",
            marginBottom: "48px"
          }}>
            Loved by creators worldwide
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: "12px",
              padding: "28px",
              textAlign: "left"
            }}>
              <div style={{ color: "#2b7a4b", fontSize: "20px", marginBottom: "12px" }}>"</div>
              <p style={{ color: "#aaaaaa", fontSize: "15px", lineHeight: "1.7", fontStyle: "italic" }}>
                My audience finally has one place to find everything I create. My engagement went up 40%.
              </p>
              <div style={{ marginTop: "16px" }}>
                <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>Alex Rivera</p>
                <p style={{ color: "#666666", fontSize: "12px" }}>Content Creator, 45k followers</p>
              </div>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: "12px",
              padding: "28px",
              textAlign: "left"
            }}>
              <div style={{ color: "#2b7a4b", fontSize: "20px", marginBottom: "12px" }}>"</div>
              <p style={{ color: "#aaaaaa", fontSize: "15px", lineHeight: "1.7", fontStyle: "italic" }}>
                I was using Linktree before. ROCK is what I actually needed — a storefront, not just a link list.
              </p>
              <div style={{ marginTop: "16px" }}>
                <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>Maya Chen</p>
                <p style={{ color: "#666666", fontSize: "12px" }}>Digital Creator, 28k followers</p>
              </div>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: "12px",
              padding: "28px",
              textAlign: "left"
            }}>
              <div style={{ color: "#2b7a4b", fontSize: "20px", marginBottom: "12px" }}>"</div>
              <p style={{ color: "#aaaaaa", fontSize: "15px", lineHeight: "1.7", fontStyle: "italic" }}>
                The one-tap checkout changed everything. My followers actually buy now instead of clicking away.
              </p>
              <div style={{ marginTop: "16px" }}>
                <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>James Okafor</p>
                <p style={{ color: "#666666", fontSize: "12px" }}>Musician, 62k followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COMPARISON ===== */}
      <div style={{
        padding: "80px 40px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{
            color: "#2b7a4b",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>
            Why choose ROCK
          </p>
          <h2 style={{
            fontSize: "clamp(26px, 2.5vw, 40px)",
            fontWeight: "600",
            color: "#ffffff",
            marginTop: "6px"
          }}>
            Built for creators who sell
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <div style={{ background: "#0a0a0a", padding: "14px 20px", fontWeight: "500", color: "#ffffff" }} />
          <div style={{ background: "#0a0a0a", padding: "14px 20px", fontWeight: "400", color: "#666666", textAlign: "center" }}>Linktree</div>
          <div style={{ background: "#0a0a0a", padding: "14px 20px", fontWeight: "500", color: "#2b7a4b", textAlign: "center" }}>ROCK</div>

          <div style={{ background: "#050505", padding: "12px 20px", color: "#888888" }}>E-commerce</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#555555", textAlign: "center" }}>Limited</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#ffffff", textAlign: "center" }}>Full store</div>

          <div style={{ background: "#050505", padding: "12px 20px", color: "#888888" }}>Checkout</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#555555", textAlign: "center" }}>Redirects</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#ffffff", textAlign: "center" }}>On-page</div>

          <div style={{ background: "#050505", padding: "12px 20px", color: "#888888" }}>Branding</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#555555", textAlign: "center" }}>Linktree logo</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#ffffff", textAlign: "center" }}>100% yours</div>

          <div style={{ background: "#050505", padding: "12px 20px", color: "#888888" }}>Analytics</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#555555", textAlign: "center" }}>Basic</div>
          <div style={{ background: "#050505", padding: "12px 20px", color: "#ffffff", textAlign: "center" }}>Advanced</div>
        </div>
      </div>

      {/* ===== PRICING ===== */}
      <div style={{
        padding: "80px 40px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{
            color: "#2b7a4b",
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "1.5px",
            textTransform: "uppercase"
          }}>
            Pricing
          </p>
          <h2 style={{
            fontSize: "clamp(26px, 2.5vw, 40px)",
            fontWeight: "600",
            color: "#ffffff",
            marginTop: "6px",
            marginBottom: "8px"
          }}>
            Start free. Grow with Pro.
          </h2>
          <p style={{ color: "#888888", fontSize: "16px", marginBottom: "40px" }}>
            No hidden fees. Cancel anytime.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            maxWidth: "640px",
            margin: "0 auto"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "left"
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#ffffff" }}>Free</h3>
              <div style={{ fontSize: "36px", fontWeight: "600", color: "#ffffff", margin: "12px 0" }}>
                $0
              </div>
              <ul style={{ listStyle: "none", padding: 0, color: "#777777", fontSize: "14px", lineHeight: "2.4" }}>
                <li>✓ One link page</li>
                <li>✓ 5 products</li>
                <li>✓ Basic analytics</li>
                <li>✓ Social links</li>
              </ul>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "2px solid #2b7a4b",
              borderRadius: "16px",
              padding: "32px",
              position: "relative",
              textAlign: "left"
            }}>
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#2b7a4b",
                color: "#ffffff",
                padding: "4px 18px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: "500"
              }}>
                Best value
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#ffffff" }}>Pro</h3>
              <div style={{ fontSize: "36px", fontWeight: "600", color: "#ffffff", margin: "12px 0" }}>
                $29
                <span style={{ fontSize: "16px", fontWeight: "400", color: "#666666" }}>/mo</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, color: "#999999", fontSize: "14px", lineHeight: "2.4" }}>
                <li>✓ Unlimited products</li>
                <li>✓ AI product suggestions</li>
                <li>✓ Advanced analytics</li>
                <li>✓ On-page checkout</li>
                <li>✓ Custom branding</li>
              </ul>
            </div>
          </div>

          <p style={{ color: "#555555", fontSize: "13px", marginTop: "32px" }}>
            14-day free trial on Pro • No credit card required
          </p>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div style={{
        padding: "80px 40px",
        maxWidth: "720px",
        margin: "0 auto"
      }}>
        <h2 style={{
          fontSize: "clamp(24px, 2vw, 32px)",
          fontWeight: "600",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "36px"
        }}>
          Questions?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "18px 22px"
          }}>
            <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#ffffff", marginBottom: "4px" }}>
              What is ROCK?
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              ROCK is a link-in-bio platform that lets you put everything in one link. Your store, content, and socials all in one place.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "18px 22px"
          }}>
            <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#ffffff", marginBottom: "4px" }}>
              Is it really free?
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              Yes. The free plan stays free forever. Pro adds more features for serious creators.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "18px 22px"
          }}>
            <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#ffffff", marginBottom: "4px" }}>
              What can I sell?
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              Digital products, physical merch, subscriptions, services — anything you create.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "18px 22px"
          }}>
            <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#ffffff", marginBottom: "4px" }}>
              How is ROCK different from Linktree?
            </h3>
            <p style={{ color: "#777777", fontSize: "14px", lineHeight: "1.7" }}>
              ROCK lets you sell products with one-tap checkout on your page. Linktree redirects people away. ROCK also gives you AI product suggestions.
            </p>
          </div>
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div style={{
        padding: "80px 40px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(255,255,255,0.01)"
      }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: "600",
            color: "#ffffff",
            marginBottom: "16px"
          }}>
            Start building your link-in-bio
          </h2>
          <p style={{
            color: "#888888",
            fontSize: "17px",
            marginBottom: "32px",
            lineHeight: "1.7"
          }}>
            Join creators who turned their audience into revenue.
          </p>
          <a href="/register" style={{
            background: "#2b7a4b",
            color: "#ffffff",
            padding: "18px 52px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "17px",
            fontWeight: "500",
            display: "inline-block",
            transition: "background 0.2s"
          }}>
            Create yours free
          </a>
          <p style={{ color: "#555555", fontSize: "13px", marginTop: "16px" }}>
            Free forever • No credit card • 2.5% transaction fee
          </p>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: "32px 40px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "#000000"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div>
            <span style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff" }}>rock</span>
            <p style={{ color: "#444444", fontSize: "12px", marginTop: "2px" }}>
              Link-in-bio for creators
            </p>
          </div>
          <div style={{
            display: "flex",
            gap: "24px",
            fontSize: "13px",
            color: "#444444",
            flexWrap: "wrap"
          }}>
            <a href="/privacy" style={{ color: "#444444", textDecoration: "none" }}>Privacy</a>
            <a href="/terms" style={{ color: "#444444", textDecoration: "none" }}>Terms</a>
            <a href="/support" style={{ color: "#444444", textDecoration: "none" }}>Support</a>
          </div>
          <div style={{ color: "#333333", fontSize: "12px" }}>
            © 2026 rock
          </div>
        </div>
      </footer>
    </div>
  );
}
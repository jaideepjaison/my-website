import React, { useEffect } from "react";
import best_buy from '../Project/Best_Buy.jpg';
import ics from '../Project/ics.jpg';

const EXPERIENCE_DATA = [
    {
        id: 1,
        role: "Software Engineer",
        orgName: "Best Buy India",
        start: "Nov 2024",
        end: "Present",
        logo: (
            <img
                src={best_buy}
                alt="Best Buy Logo"
                width="56"
                height="56"
                style={{ objectFit: 'contain', borderRadius: 8 }}
            />
        ),
    },
    {
        id: 2,
        role: "Software Engineer",
        orgName: "Infinite Computer Solutions",
        start: "July 2022",
        end: "Oct 2024",
        logo: (
            <img
                src={ics}
                alt="Best Buy Logo"
                width="56"
                height="56"
                style={{ objectFit: 'contain', borderRadius: 8 }}
            />
        ),
    }
];

const STYLE_ID = "xp-component-styles-v1";

export default function Experience({ items = EXPERIENCE_DATA }) {
    // inject styles once
    useEffect(() => {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.innerHTML = `
            /* Container */
            .xp-root {
                font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                color: #e6f0ff;
                padding: 28px;
                background: radial-gradient(1200px 400px at 10% 10%, rgba(99,102,241,0.10), transparent),
                                        radial-gradient(900px 300px at 90% 90%, rgba(99,102,241,0.06), transparent),
                                        linear-gradient(180deg,#071026 0%, #041028 100%);
                min-height: 180px;
            }

            .xp-header {
                display:flex;
                align-items:center;
                gap:12px;
                margin-bottom:18px;
            }
            .xp-title {
                font-size:20px;
                font-weight:700;
                letter-spacing:0.6px;
                display:flex;
                align-items:center;
                gap:10px;
                text-align:center;
            }
            .xp-title .badge {
                background: linear-gradient(90deg,#7c3aed,#06b6d4);
                padding:6px 10px;
                border-radius:999px;
                font-size:12px;
                color:white;
                box-shadow: 0 6px 18px rgba(3,7,18,0.45);
            }
            .xp-sub {
                font-size:13px;
                color:#9fb0d6;
            }

            /* Grid */
            .xp-grid {
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
                gap:14px;
            }

            /* Card */
            .xp-card {
                position:relative;
                overflow:hidden;
                border-radius:12px;
                padding:14px;
                background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
                border: 1px solid rgba(255,255,255,0.04);
                backdrop-filter: blur(6px);
                display:flex;
                align-items:center;
                gap:12px;
                transition: transform .22s ease, box-shadow .22s ease;
            }
            .xp-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 18px 50px rgba(2,6,23,0.6);
            }

            .xp-logo {
                width:72px;
                height:72px;
                min-width:72px;
                min-height:72px;
                border-radius:12px;
                display:flex;
                align-items:center;
                justify-content:center;
                background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
                box-shadow: 0 6px 24px rgba(11,20,40,0.45), inset 0 -6px 12px rgba(0,0,0,0.25);
                border: 1px solid rgba(255,255,255,0.04);
            }

            .xp-meta {
                flex:1;
                min-width:0;
            }
            .xp-org {
                display:flex;
                align-items:center;
                gap:8px;
                font-weight:700;
                font-size:15px;
                color:#f0f8ff;
            }
            .xp-role {
                font-size:13px;
                color:#bcd7ff;
                margin-top:4px;
            }
            .xp-dates {
                margin-top:8px;
                display:flex;
                gap:8px;
                align-items:center;
                flex-wrap:wrap;
            }
            .xp-date {
                font-size:12px;
                background:rgba(255,255,255,0.03);
                color:#a9c6ff;
                padding:6px 8px;
                border-radius:999px;
                border:1px solid rgba(255,255,255,0.02);
            }

            /* Level bar - game hp style */
            .xp-level-wrap {
                width:140px;
                display:flex;
                flex-direction:column;
                align-items:flex-end;
                gap:8px;
            }
            .xp-level-label {
                font-size:12px;
                color:#b8d6ff;
                display:flex;
                gap:6px;
                align-items:center;
            }
            .xp-hp {
                width:100%;
                height:14px;
                background: linear-gradient(90deg,#071428, #081827);
                border-radius:999px;
                padding:3px;
                box-sizing:border-box;
                border: 1px solid rgba(255,255,255,0.03);
            }
            .xp-hp > .xp-hp-fill {
                height:100%;
                border-radius:999px;
                background: linear-gradient(90deg,#7de3a8,#00d4ff);
                box-shadow: 0 6px 18px rgba(0, 212, 255, 0.08), inset 0 -6px 18px rgba(255,255,255,0.04);
                transition: width 0.8s cubic-bezier(.2,.9,.2,1);
            }
            .xp-level-num {
                font-weight:700;
                color:#e8fbff;
                font-size:12px;
                min-width:34px;
                text-align:right;
            }

            /* tiny decorative icons */
            .xp-card:after {
                content:"";
                position:absolute;
                width:120px;
                height:120px;
                right:-26px;
                top:-24px;
                background: radial-gradient(circle at 30% 30%, rgba(124,58,237,0.12), transparent 30%),
                                        radial-gradient(circle at 80% 70%, rgba(6,182,212,0.06), transparent 40%);
                transform: rotate(15deg);
                pointer-events:none;
            }

            /* Responsive tweaks */
            @media (max-width:520px) {
                .xp-root { padding:16px; }
                .xp-logo { width:60px; height:60px; min-width:60px; min-height:60px; }
                .xp-level-wrap { width:110px; }
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <section className="xp-root" aria-label="Experience">
            <header className="xp-header">
                <div className="xp-title">
                    <span className="badge">LEVEL</span> Experience
                </div>
            </header>

            <div className="xp-grid">
                {items.map((it) => (
                    <article key={it.id} className="xp-card" role="group" aria-label={`${it.orgName} — ${it.role}`}>
                        <div className="xp-logo" aria-hidden>
                            {/* Inline logo (JSX SVG) */}
                            {it.logo}
                        </div>

                        <div className="xp-meta">
                            <div className="xp-org">
                                <span>{it.orgName}</span>
                            </div>
                            <div className="xp-role">{it.role}</div>

                            <div className="xp-dates">
                                <span className="xp-date" title={`Start: ${it.start}`}>
                                    {it.start}
                                </span>
                                <span className="xp-date" title={`End: ${it.end}`}>
                                    {it.end}
                                </span>
                            </div>
                        </div>

                        <div className="xp-level-wrap" aria-hidden>
                            <div className="xp-level-label">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M12 2 L15 8 L22 9 L17 14 L18.5 21 L12 17.8 L5.5 21 L7 14 L2 9 L9 8 Z" fill="#ffd86b" />
                                </svg>

                            </div>

                            {/* <div className="xp-hp" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={it.level}>
                                <div
                                    className="xp-hp-fill"
                                    style={{ width: `${Math.max(6, it.level)}%` }}
                                />
                            </div> */}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
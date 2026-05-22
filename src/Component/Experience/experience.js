import React from "react";
import './Experience.css';
import best_buy from '../Project/Best_Buy.jpg';
import ics from '../Project/ics.jpg';

const EXPERIENCE_DATA = [
    {
        id: 1,
        role: "Software Engineer",
        orgName: "Best Buy India",
        start: "Nov 2024",
        end: "Present",
        logo: best_buy
    },
    {
        id: 2,
        role: "Software Engineer",
        orgName: "Infinite Computer Solutions",
        start: "July 2022",
        end: "Oct 2024",
        logo: ics
    }
];

export default function Experience({ items = EXPERIENCE_DATA }) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <section className="experience-wrap" aria-label="Experience">
                <header className="experience-header">
                    <h1>Experience</h1>
                </header>

                <div className="experience-timeline">
                    {items.map((it) => (
                        <article key={it.id} className="experience-card glass-card">
                            <div className="experience-logo-box">
                                <img src={it.logo} alt={`${it.orgName} Logo`} />
                            </div>

                            <div className="experience-content">
                                <h3 className="experience-role">{it.role}</h3>
                                <h4 className="experience-org">{it.orgName}</h4>
                                <div className="experience-duration">
                                    <i className="far fa-calendar-alt"></i>
                                    <span>{it.start} &mdash; {it.end}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
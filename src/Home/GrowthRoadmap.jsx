import { useState } from "react";
import "./GrowthRoadmap.css";

export default function CovaijobsGrowthMap() {
  const timelineData = [
    {
      year: "2019",
      title: "Orca Infomatics Founded",
      description:
        "Orca Infomatics started with a mission to connect job seekers and employers in Coimbatore through a digital-first hiring platform.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
      cx: 100,
      cy: 550,
    },
    {
      year: "2020",
      title: "500+ Job Listings",
      description:
        "Expanded rapidly with over 500 verified job listings across multiple industries.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      cx: 280,
      cy: 420,
    },
    {
      year: "2021",
      title: "100+ Employers Joined",
      description:
        "Trusted by 100+ employers seeking quality candidates across Tamil Nadu.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      cx: 460,
      cy: 460,
    },
    {
      year: "2022",
      title: "Mobile Optimized Platform",
      description:
        "Launched a fully responsive mobile-friendly hiring platform.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      cx: 620,
      cy: 400,
    },
    {
      year: "2023",
      title: "10,000+ Job Seekers",
      description:
        "Reached a milestone of 10,000+ registered job seekers.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      cx: 800,
      cy: 360,
    },
    {
      year: "2024",
      title: "AI Resume Matching",
      description:
        "Introduced AI-based resume and job matching for faster hiring.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      cx: 1000,
      cy: 280,
    },
    {
      year: "2026",
      title: "Expansion Across Tamil Nadu",
      description:
        "Planning statewide expansion with regional hiring hubs.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      cx: 1180,
      cy: 200,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = timelineData[activeIndex];

  return (
    <section className="timeline-section">
      <div className="timeline-overlay" />

      <div className="timeline-container">
        <div className="timeline-content">
          {/* LEFT CARD */}
          <div className="timeline-left">
            <h5>
              {activeData.year} – {activeData.title}
            </h5>
            <p>{activeData.description}</p>
            <img src={activeData.image} alt={activeData.title} />
          </div>

          {/* SVG */}
          <svg
            className="timeline-svg"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 100 550
                 C 150 500, 200 450, 280 420
                 C 360 390, 400 430, 460 460
                 C 520 490, 560 450, 620 400
                 C 680 350, 720 340, 800 360
                 C 880 380, 920 320, 1000 280
                 C 1080 240, 1120 270, 1180 200"
              className="timeline-path"
              fill="none"
            />

            {/* DYNAMIC DOTS */}
            {timelineData.map((item, index) => (
              <circle
                key={index}
                cx={item.cx}
                cy={item.cy}
                r="12"
                className={`timeline-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}

            {/* LABELS */}
            {timelineData.map((item, index) => (
              <text
                key={index}
                x={item.cx - 60}
                y={item.cy + 40}
                className="timeline-label"
              >
                <tspan className="timeline-year-bold">
                  {item.year}
                </tspan>
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const solutions = [
  {
    id: "01",
    title: "Holobox AI Presence",
    heading: "IMMERSIVE DIGITAL\nPRESENCE EXPERIENCES",
    image: "/images/solution/hologram-1.png",
  },
  {
    id: "02",
    title: "Conversational AI",
    heading: "INTELLIGENT DIALOGUE\nSYSTEMS FOR BUSINESS",
    image: "/images/solution/hologram-2.png",
  },
  {
    id: "03",
    title: "AI Integration Services",
    heading: "SEAMLESS AI WORKFLOW\nFOR YOUR ECOSYSTEM",
    image: "/images/solution/hologram-3.png",
  },
  {
    id: "04",
    title: "Avatar Production Support",
    heading: "CUSTOM VIRTUAL AGENTS\nFOR MODERN TEAMS",
    image: "/images/solution/hologram-4.png",
  },
  {
    id: "05",
    title: "Managed AI Expertise",
    heading: "EXPERT GUIDANCE FOR\nYOUR DATA DECISIONS",
    image: "/images/solution/hologram-5.png",
  },
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Map scroll progress to the active index with improved alignment
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const count = solutions.length;
      const index = Math.min(
        Math.floor(latest * count), 
        count - 1
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  // Horizontal movement for the image track
  // Moves from 0 to -( (length-1) * 50% ) or similar
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(solutions.length - 1) * 50}vw`]);

  return (
    <section ref={containerRef} className="solutions-scroll-section" id="solutions">
      <div className="solutions-sticky-wrapper">
        <div className="container-fluid h-100 p-0">
          <div className="row g-0 h-100">
            {/* LEFT CONTENT AREA */}
            <div className="col-lg-6 position-relative d-flex flex-column justify-content-between p-5 p-lg-10 bg-white">
              <div className="solutions-left-top">
                <div className="solutions-list" style={{ paddingBottom: '30px' }}>
                  {solutions.map((item, index) => (
                    <div
                      key={item.id}
                      className={`solution-list-item ${index === activeIndex ? "active" : ""}`}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Counter: Simplified Transition */}
              <div className="solutions-counter-wrap">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="solutions-big-number"
                  >
                    {solutions[activeIndex].id}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Changing Headline at Bottom Left */}
              <div className="solutions-bottom-left">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeIndex}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="solutions-dynamic-heading"
                  >
                    {solutions[activeIndex].heading.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SIDE (Horizontal Image Scroll) */}
            <div className="col-lg-6 overflow-hidden position-relative bg-black h-100">
              <motion.div style={{ x }} className="solutions-image-track">
                {solutions.map((item) => (
                  <div key={item.id} className="solutions-image-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

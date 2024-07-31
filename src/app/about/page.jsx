"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import the WorkExperienceTimeline component
import WorkExperienceTimeline from "./WorkExperienceTimeline";

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-duck-yellow">
        &lsquo;{skill}&rsquo;
      </span>
      <span className="text-sm font-medium text-duck-yellow">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="bg-duck-yellow h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
);

const AboutPage = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "&lsquo;Quack quack! You found the secret duck pond! Time to debug!&rsquo;";

  useEffect(() => {
    if (showEasterEgg) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [showEasterEgg]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 space-y-8 text-duck-yellow"
    >
      <h1 className="text-4xl font-bold">About Duckb3ar</h1>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hello! I&rsquo;m &ldquo;Brennan Mahto&rdquo;, an IT professional and network engineer
        based in Indianapolis, Indiana. I thrive on transforming mundane and routine tasks into
        thrilling adventures filled with excitement and anticipation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <SkillBar skill="Network Troubleshooting" level={95} />
        <SkillBar skill="Remote Desktop Support" level={90} />
        <SkillBar skill="IT Escalation" level={85} />
        <SkillBar skill="Active Directory Management" level={80} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {/* Add the WorkExperienceTimeline component here */}
        <WorkExperienceTimeline />
      </motion.div>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 p-4 bg-duck-yellow text-gray-800 rounded-lg"
        >
          <p className="font-mono">{typedText}</p>
        </motion.div>
      )}
      <button
        onClick={() => setShowEasterEgg(true)}
        className="hidden"
        aria-hidden="true"
      >
        Easter Egg
      </button>
    </motion.div>
  );
};

export default AboutPage;

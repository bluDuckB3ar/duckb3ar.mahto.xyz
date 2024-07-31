import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description }) => (
  <motion.div 
    className="mb-8 flex justify-between items-center w-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
    </div>
    <motion.div 
      className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
      <h4 className="mb-3 font-semibold text-duck-pink text-lg">{company}</h4>
      <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{description}</p>
    </motion.div>
  </motion.div>
);

const WorkExperienceTimeline = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
        
        <TimelineItem
          year="2023"
          title="IT / Network Engineer"
          company="Franciscan Alliance / R4 Solutions"
          description="Troubleshooting network outages, software/hardware bugs, and managing virtual machines and servers."
        />
        
        <TimelineItem
          year="2021"
          title="IT Manager / Network Engineer"
          company="Catapult Tech"
          description="Managed daughter company, performed field engineering, and maintained customer relationships."
        />
        
        <TimelineItem
          year="2020"
          title="Field Engineer"
          company="Fujitsu"
          description="Point of Sale technician, networking, and remote repair specialist."
        />
        
        <TimelineItem
          year="2018"
          title="IT - Supervisor"
          company="K-12 Tech"
          description="Warranty repair, break-fix technician, lead trainer for new hires/interns, and quality control technician."
        />
      </div>
    </div>
  );
};
export default WorkExperienceTimeline;
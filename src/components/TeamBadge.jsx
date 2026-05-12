import React from 'react';
import { motion } from 'framer-motion';

/**
 * ARCHETYPES DEFINITION
 * Maps keywords to geometric shapes and animations
 */
const LOGO_ARCHETYPES = {
  FLAME: {
    keywords: ['flame', 'fire', 'blaze', 'red', 'burn', 'sun', 'pyro', 'phoenix'],
    color: '#ff4d6d',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L15 9H19L13 13L15 21L12 17L9 21L11 13L5 9H9L12 2Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M12 6L14 10H17L13 13L14 18L12 16L10 18L11 13L7 10H10L12 6Z" fill="currentColor" />
      </svg>
    ),
    animation: {
      hover: { 
        y: [0, -2, 0],
        scale: [1, 1.1, 1],
        filter: ["drop-shadow(0 0 2px #ff4d6d)", "drop-shadow(0 0 8px #ff4d6d)", "drop-shadow(0 0 2px #ff4d6d)"],
        transition: { duration: 0.4, repeat: Infinity }
      }
    }
  },
  FROST: {
    keywords: ['frost', 'ice', 'snow', 'cold', 'winter', 'crystal', 'glacier', 'subzero'],
    color: '#5b5fff',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2V22M2 12H22M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
    animation: {
      hover: { 
        rotate: 180,
        scale: 1.1,
        filter: "drop-shadow(0 0 8px #5b5fff)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }
    }
  },
  VOID: {
    keywords: ['void', 'shadow', 'dark', 'black', 'phantom', 'ghost', 'null', 'eclipse', 'nebula'],
    color: '#7b61ff',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
    animation: {
      hover: { 
        scale: [1, 0.9, 1.2, 1],
        x: [0, -1, 1, -1, 0],
        filter: ["brightness(1)", "brightness(2)", "brightness(1)"],
        transition: { duration: 0.3, repeat: Infinity }
      }
    }
  },
  SURGE: {
    keywords: ['surge', 'volt', 'shock', 'bolt', 'lightning', 'spark', 'energy', 'power', 'nexus'],
    color: '#fbbf24',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
      </svg>
    ),
    animation: {
      hover: { 
        skewX: [-10, 10, -10],
        x: [-1, 1, -1],
        filter: "drop-shadow(0 0 10px #fbbf24)",
        transition: { duration: 0.1, repeat: Infinity }
      }
    }
  },
  TITAN: {
    keywords: ['titan', 'giant', 'iron', 'steel', 'shield', 'wall', 'fortress', 'alpha', 'knights', 'wolves'],
    color: '#94a3b8',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    animation: {
      hover: { 
        scale: 1.05,
        filter: "drop-shadow(0 0 5px #ffffff)",
        transition: { duration: 0.2 }
      }
    }
  },
  DEFAULT: {
    keywords: [],
    color: '#ffffff',
    render: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 4L4 20H20L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    animation: {
      hover: { scale: 1.1 }
    }
  }
};

/**
 * Logic to extract archetype from name
 */
const getArchetype = (name = "") => {
  const lowerName = name.toLowerCase();
  for (const [key, value] of Object.entries(LOGO_ARCHETYPES)) {
    if (value.keywords.some(kw => lowerName.includes(kw))) {
      return value;
    }
  }
  return LOGO_ARCHETYPES.DEFAULT;
};

const TeamBadge = ({ name, size = "md", className = "" }) => {
  const archetype = getArchetype(name);
  
  const sizeClasses = {
    sm: "w-4 h-4 text-xs gap-1.5",
    md: "w-6 h-6 text-sm gap-2",
    lg: "w-10 h-10 text-xl gap-3"
  };

  return (
    <motion.div 
      className={`inline-flex items-center font-bold italic tracking-tight group cursor-default ${sizeClasses[size]} ${className}`}
      whileHover="hover"
    >
      <motion.div 
        className={`${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]} flex-shrink-0`}
        style={{ color: archetype.color }}
        variants={archetype.animation}
      >
        {archetype.render()}
      </motion.div>
      <span className="group-hover:text-white transition-colors uppercase">
        {name}
      </span>
    </motion.div>
  );
};

export default TeamBadge;

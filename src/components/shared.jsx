import React from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from 'framer-motion';

let illustrationCounter = 0;
const getUniqueId = (prefix) => `${prefix}_${++illustrationCounter}`;

export const Tilt3D = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const highlightX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const highlightY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(
            circle at ${highlightX}% ${highlightY}%,
            rgba(255, 255, 255, 0.15),
            transparent 80%
          )`,
        }}
        className="absolute inset-0 rounded-[inherit] z-10 pointer-events-none"
      />
    </motion.div>
  );
};

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[20%] left-[5%] w-32 h-32 bg-violet-200/20 dark:bg-violet-500/10 rounded-full blur-xl"
      />
      <motion.div 
        style={{ y: y2, rotate: rotate }}
        className="absolute top-[40%] right-[10%] w-48 h-48 border border-pink-200/30 dark:border-pink-500/10 rounded-full"
      />
       <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[15%] w-24 h-24 bg-blue-100/30 dark:bg-blue-500/10 rounded-full blur-lg"
      />
    </div>
  );
};

export const MindfulnessIllustration = ({ className = "" }) => {
  const id = React.useMemo(() => getUniqueId('mind'), []);
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" stroke={`url(#${id})`} strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />
      <circle cx="100" cy="100" r="60" stroke={`url(#${id})`} strokeWidth="2" opacity="0.5" />
      <circle cx="100" cy="100" r="40" fill={`url(#${id})`} opacity="0.2" />
      <path d="M100 50 C120 70 120 90 100 100 C80 90 80 70 100 50Z" fill={`url(#${id})`} opacity="0.6" />
      <path d="M100 150 C80 130 80 110 100 100 C120 110 120 130 100 150Z" fill={`url(#${id})`} opacity="0.6" />
      <path d="M50 100 C70 80 90 80 100 100 C90 120 70 120 50 100Z" fill={`url(#${id})`} opacity="0.6" />
      <path d="M150 100 C130 120 110 120 100 100 C110 80 130 80 150 100Z" fill={`url(#${id})`} opacity="0.6" />
      <circle cx="100" cy="100" r="15" fill={`url(#${id})`} />
    </svg>
  );
};

export const GrowthPlantIllustration = ({ className = "" }) => {
  const plantId = React.useMemo(() => getUniqueId('plant'), []);
  const potId = React.useMemo(() => getUniqueId('pot'), []);
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={plantId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id={potId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M35 130 L40 155 L80 155 L85 130 Z" fill={`url(#${potId})`} opacity="0.8" />
      <ellipse cx="60" cy="130" rx="28" ry="8" fill={`url(#${potId})`} />
      <path d="M60 125 C60 100 60 80 60 60" stroke={`url(#${plantId})`} strokeWidth="4" strokeLinecap="round" />
      <path d="M60 90 C45 85 35 70 40 55 C50 60 55 75 60 90" fill={`url(#${plantId})`} opacity="0.7" />
      <path d="M60 75 C75 70 85 55 80 40 C70 45 65 60 60 75" fill={`url(#${plantId})`} opacity="0.7" />
      <path d="M60 60 C45 55 40 40 50 30 C58 38 58 50 60 60" fill={`url(#${plantId})`} opacity="0.7" />
      <circle cx="60" cy="25" r="8" fill={`url(#${plantId})`} opacity="0.5" />
      <circle cx="60" cy="25" r="4" fill="#a78bfa" />
    </svg>
  );
};

export const BrainWellnessIllustration = ({ className = "" }) => {
  const id = React.useMemo(() => getUniqueId('brain'), []);
  return (
    <svg viewBox="0 0 180 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path d="M90 140 C60 140 40 120 40 90 C40 70 50 55 65 50 C60 40 70 25 85 25 C95 15 110 15 120 30 C135 35 145 50 145 70 C155 80 155 100 145 115 C135 135 110 140 90 140Z" 
            stroke={`url(#${id})`} strokeWidth="3" fill={`url(#${id})`} fillOpacity="0.1" />
      <path d="M75 50 C75 70 85 80 90 95" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M105 45 C110 65 105 80 100 95" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="70" cy="70" r="6" fill={`url(#${id})`} opacity="0.6" />
      <circle cx="110" cy="65" r="6" fill={`url(#${id})`} opacity="0.6" />
      <circle cx="90" cy="85" r="8" fill={`url(#${id})`} opacity="0.8" />
      <path d="M55 75 L45 70 M55 90 L42 92 M130 70 L142 65 M130 90 L145 95" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <circle cx="42" cy="68" r="3" fill="#a78bfa" opacity="0.5" />
      <circle cx="38" cy="93" r="3" fill="#a78bfa" opacity="0.5" />
      <circle cx="148" cy="62" r="3" fill="#a78bfa" opacity="0.5" />
      <circle cx="150" cy="97" r="3" fill="#a78bfa" opacity="0.5" />
    </svg>
  );
};

export const HeartMindIllustration = ({ className = "" }) => {
  const id = React.useMemo(() => getUniqueId('heart'), []);
  return (
    <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M70 120 C30 85 15 55 40 35 C55 25 70 35 70 50 C70 35 85 25 100 35 C125 55 110 85 70 120Z" 
            fill={`url(#${id})`} fillOpacity="0.2" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="70" cy="65" r="20" stroke={`url(#${id})`} strokeWidth="2" fill="none" />
      <circle cx="70" cy="65" r="12" stroke={`url(#${id})`} strokeWidth="1.5" strokeDasharray="4 2" fill="none" opacity="0.6" />
      <circle cx="70" cy="65" r="5" fill={`url(#${id})`} />
      <path d="M70 45 L70 35 M70 85 L70 95 M50 65 L40 65 M90 65 L100 65" stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
};

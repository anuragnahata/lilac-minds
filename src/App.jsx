import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useMotionTemplate 
} from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  MapPin, 
  Instagram, 
  Mail, 
  ArrowRight, 
  BookOpen, 
  Menu,
  X,
  Star,
  Video,
  Sun,
  Quote,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Zap,
  Layout,
  Compass,
  FileText,
  Award,
  Coffee,
  Moon
} from 'lucide-react';
import { 
  Tilt3D, 
  ParallaxBackground, 
  MindfulnessIllustration, 
  GrowthPlantIllustration, 
  BrainWellnessIllustration, 
  HeartMindIllustration 
} from './components/shared';

const ResourcesView = lazy(() => import('./views/ResourcesView'));

// --- IMAGE OPTIMIZATION ---
const optimize = (url, width) => 
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;

// Clinic Images
const CLINIC_IMAGES = [
  "https://i.ibb.co/XkYptFZF/Whats-App-Image-2026-01-13-at-16-03-31-1.jpg",
  "https://i.ibb.co/KjwdjyN2/Whats-App-Image-2026-01-13-at-16-03-32.jpg",
  "https://i.ibb.co/WvWwT1jN/Whats-App-Image-2026-01-13-at-16-03-33-1.jpg",
  "https://i.ibb.co/JFqf1Ts1/Whats-App-Image-2026-01-13-at-16-03-33.jpg"
].map(url => optimize(url, 1200));

const IMAGES = {
  logo: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 200),
  logoLarge: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 400)
};

// --- DATA CONSTANTS ---
const SEO_DATA = {
  title: "Lilac Minds | Best Psychologist & Career Counsellor in Jamnagar, Gujarat",
  description: "Lilac Minds by Prarthana Thaker offers expert psychotherapy, anxiety treatment, depression counselling, career guidance, and student mentorship in Jamnagar. Book your mental wellness session today.",
  keywords: "psychologist Jamnagar, career counsellor Jamnagar, mental health clinic Gujarat, anxiety treatment, depression therapy, stress management, student career guidance, psychotherapy near me, best therapist Jamnagar, clinical psychologist Gujarat, emotional wellness, behavioral therapy, cognitive therapy, relationship counselling, adolescent counselling, online therapy India, psychological assessment, burnout treatment, sleep disorder therapy",
  googleMyBusiness: "https://share.google/rmquC8AtoERfXER0R",
  phone: "+918200711499",
  email: "lilac.minds.in@gmail.com",
  address: {
    street: "Sarvoday Society, 9, Krishna Nagar Main Rd",
    locality: "Jamnagar",
    region: "Gujarat",
    postalCode: "361006",
    country: "India"
  }
};

const TESTIMONIAL_DATA = [
  {
    text: "Prarthana ma'am helped me find clarity when I was completely lost about my career path. Her guidance is practical yet so empathetic.",
    name: "Riya S.",
    type: "Career Counselling"
  },
  {
    text: "I finally found a safe space to talk about my anxiety without feeling judged. The clinic vibe is so calming, it instantly relaxes you.",
    name: "Aarav M.",
    type: "Personal Counselling"
  },
  {
    text: "The student mentorship program changed my approach to exams. I feel much more confident and less stressed now.",
    name: "Dev P.",
    type: "Student Mentorship"
  }
];

const FAQS = [
  {
    question: "Is my conversation 100% confidential?",
    answer: "Absolutely. We adhere to strict ethical guidelines set by the Rehabilitation Council of India (RCI) regarding client confidentiality. What you share in the therapy room stays in the therapy room. Your records, notes, and personal information are stored securely and are never shared with anyone—including family members—without your explicit written consent. The only exceptions are rare situations involving imminent risk to yourself or others, or legal mandates, which we would discuss with you transparently."
  },
  {
    question: "How do I know if I need therapy?",
    answer: "You don't need to be in a crisis to seek support. Therapy can be beneficial if you're feeling overwhelmed, stuck, experiencing persistent sadness or anxiety, facing relationship difficulties, going through major life transitions (such as career changes, marriage, or loss), struggling with self-esteem, or simply wanting a neutral perspective to navigate life's challenges. If emotional distress is affecting your daily functioning, sleep, appetite, work, or relationships, it's a good time to reach out. Think of therapy as mental hygiene—just like you visit a doctor for physical health, consulting a psychologist helps maintain emotional well-being."
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, we offer secure video consultations for clients across India and abroad using encrypted, HIPAA-compliant platforms to ensure your privacy. Online therapy is equally effective for most concerns including anxiety, depression, stress management, relationship issues, and career counselling. The quality of care remains exactly the same as in-person visits. We provide clear instructions before your first online session to ensure a smooth experience. All you need is a stable internet connection, a private space, and a device with a camera."
  },
  {
    question: "What is the duration of a typical session?",
    answer: "Standard individual therapy sessions typically last between 45 to 60 minutes, giving us enough time to deep dive into your concerns while maintaining focus and effectiveness. The first session (intake session) may extend up to 75-90 minutes as we gather comprehensive background information and understand your concerns in detail. Couple or family therapy sessions usually last 60-90 minutes. We always aim to end sessions on time to respect your schedule while ensuring meaningful progress."
  },
  {
    question: "What can I expect in my first session?",
    answer: "Your first session is all about getting to know you. We'll discuss your reasons for seeking therapy, your personal history, family background, and current life circumstances. This helps us understand your unique situation and tailor our approach accordingly. There's no pressure to share everything at once—we move at your pace. By the end of the first session, we'll collaboratively set initial goals and outline a tentative treatment plan. You'll leave with a clear understanding of how we'll work together moving forward."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies based on your unique concerns, goals, and the complexity of the issues. Some clients find relief and clarity within 6-8 sessions (short-term therapy), while others may benefit from longer-term support spanning several months. For career counselling, typically 3-5 sessions are sufficient to gain clarity and direction. We regularly review progress together and adjust the treatment plan as needed. Our goal is to help you become your own therapist—not to create dependency."
  },
  {
    question: "What types of issues do you help with?",
    answer: "We provide support for a wide range of mental health and life concerns including anxiety and panic disorders, depression, stress and burnout, relationship and marital difficulties, self-esteem and confidence issues, grief and loss, anger management, academic stress and exam anxiety, career confusion and transitions, work-life balance challenges, parenting concerns, and life adjustment issues. We also offer specialized services for students including study skills training, stream selection guidance, and competitive exam preparation mentorship."
  },
  {
    question: "What is the difference between a psychologist and a psychiatrist?",
    answer: "A psychologist holds a Master's or Doctoral degree in Psychology and is trained in psychological assessment, counselling, and psychotherapy (talk therapy). We help you understand your thoughts, emotions, and behaviors, and teach coping strategies through evidence-based therapeutic techniques. A psychiatrist is a medical doctor (MBBS + MD Psychiatry) who specializes in mental health and can prescribe medications. For many concerns, therapy alone is highly effective. However, in cases requiring medication (such as severe depression or bipolar disorder), we collaborate with trusted psychiatrists to provide integrated care."
  },
  {
    question: "Do you prescribe medication?",
    answer: "No, as clinical psychologists, we do not prescribe medication. Our expertise lies in psychotherapy, counselling, and behavioral interventions. However, if your condition requires medication support (such as in cases of severe anxiety, depression, or other clinical disorders), we work closely with experienced psychiatrists and can provide a referral. Many clients benefit from a combination of therapy and medication, and we ensure seamless coordination between both treatment approaches for your holistic well-being."
  },
  {
    question: "How should I prepare for my first session?",
    answer: "There's no special preparation required—just come as you are. However, it can be helpful to reflect on what you'd like to address in therapy and any specific goals you have in mind. If you have previous medical or psychological reports, bringing them can be useful. Arrive a few minutes early to complete any intake paperwork. Most importantly, come with an open mind. It's completely normal to feel nervous before your first session, but remember that the therapy room is a safe, non-judgmental space designed for your comfort."
  },
  {
    question: "Can I bring a family member to my sessions?",
    answer: "Individual therapy sessions are typically one-on-one to create a safe, private space for you to express yourself freely. However, with your consent, family members can be involved in specific sessions when it's therapeutically beneficial—such as in family therapy, couples counselling, or when addressing family dynamics. For child and adolescent clients, parent involvement is often an important component of treatment. We discuss and plan any family involvement collaboratively with you beforehand."
  },
  {
    question: "What is career counselling and who is it for?",
    answer: "Career counselling is a specialized service that helps individuals make informed decisions about their educational and professional paths. It involves understanding your interests, aptitudes, personality traits, values, and strengths through scientific assessments and in-depth discussions. Career counselling is beneficial for students choosing streams after 10th or 12th, college students unsure about their specialization, professionals considering career changes or feeling stuck, individuals returning to work after a break, and anyone seeking clarity about their professional direction. It's about aligning your career with who you truly are."
  },
  {
    question: "What happens if I need to cancel or reschedule?",
    answer: "We understand that life can be unpredictable. We request at least 24 hours' notice for cancellations or rescheduling to allow us to offer the slot to another client in need. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee. Repeated no-shows or last-minute cancellations may affect your booking priority. We value your time and commitment to your mental health journey and appreciate the same respect for our scheduling."
  },
  {
    question: "Is therapy only for adults?",
    answer: "Not at all. We provide specialized services for children (play therapy, behavioral concerns), adolescents (academic stress, identity issues, peer pressure), young adults, adults, and elderly clients. Our approach is tailored to each age group's developmental needs and communication styles. For minors, we maintain appropriate confidentiality while keeping parents informed about general progress and involving them as therapeutic partners when beneficial."
  }
];

// --- UTILITY COMPONENTS ---

const FloatingWhatsApp = () => (
  <motion.a 
    href="https://wa.me/918200711499" 
    target="_blank" 
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 bg-violet-600 dark:bg-violet-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-violet-500/30 hover:bg-violet-700 dark:hover:bg-violet-600 transition-all flex items-center gap-2 group border-2 border-white/20"
  >
    <MessageCircle size={28} className="fill-current" />
    <span className="font-bold hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
      Chat with us
    </span>
  </motion.a>
);

const DoodlePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="pattern-doodle" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M 50 50 Q 60 40 70 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="80" y="80" width="4" height="4" fill="currentColor" transform="rotate(45 82 82)"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#pattern-doodle)" className="text-slate-900 dark:text-white"/>
  </svg>
);

const FloatingShapes = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -100]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 180]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -90]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[10%] right-[5%] opacity-20 dark:opacity-10">
        <MindfulnessIllustration className="w-32 h-32 md:w-48 md:h-48" />
      </motion.div>
      <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[40%] left-[3%] opacity-15 dark:opacity-10">
        <GrowthPlantIllustration className="w-24 h-32 md:w-32 md:h-44" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-[15%] right-[8%] opacity-20 dark:opacity-10">
        <HeartMindIllustration className="w-28 h-28 md:w-40 md:h-40" />
      </motion.div>
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[60%] left-[10%] w-4 h-4 bg-violet-400/30 dark:bg-violet-400/20 rounded-full"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[25%] left-[20%] w-3 h-3 bg-fuchsia-400/30 dark:bg-fuchsia-400/20 rounded-full"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[75%] right-[25%] w-5 h-5 bg-violet-300/30 dark:bg-violet-300/20 rounded-full"
      />
    </div>
  );
};

const GlassCard = ({ children, className = "", ...props }) => (
  <motion.div 
    className={`backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-white/10 shadow-xl shadow-violet-500/5 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

// --- COMPONENT DEFINITIONS ---

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-violet-500/20 rounded-full blur-[50px] md:blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-[0_0_60px_rgba(167,139,250,0.6)] overflow-hidden border-4 border-white/20">
            <img 
              src={IMAGES.logo} 
              alt="Lilac Minds Logo" 
              className="w-full h-full object-cover" 
              width="160" 
              height="160"
              fetchpriority="high"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Lilac</span> Minds
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="h-1 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-6 rounded-full origin-center"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-slate-400 text-xs md:text-sm mt-6 font-medium tracking-[0.3em] uppercase text-center"
        >
          Psychology & Career Guidance
        </motion.p>
      </div>
    </motion.div>
  );
};

const Navbar = ({ currentView, onNavigate, isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', target: 'about', type: 'scroll' },
    { label: 'Services', target: 'services', type: 'scroll' },
    { label: 'Clinic', target: 'clinic', type: 'scroll' },
    { label: 'Resources', target: 'resources', type: 'page' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-white/5 py-2' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => onNavigate('home')}
        >
          <img 
            src={IMAGES.logo} 
            alt="Lilac Minds Logo" 
            className="h-12 w-12 object-cover rounded-full hover:opacity-90 transition-opacity" 
            width="48"
            height="48"
          />
          <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">Lilac Minds</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.target, item.type)}
              className={`${
                currentView === 'resources' && item.target === 'resources' 
                  ? 'text-violet-700 dark:text-violet-400 font-bold' 
                  : 'text-slate-600 dark:text-slate-300 font-medium'
              } hover:text-violet-600 dark:hover:text-white text-sm transition-colors`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={() => onNavigate('contact', 'scroll')}
            aria-label="Book an appointment"
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-violet-600 dark:hover:bg-violet-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-slate-800 dark:text-white p-1 z-50 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white dark:bg-slate-950 z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setMobileMenuOpen(false); onNavigate(item.target, item.type); }}
                  className="text-2xl font-bold text-slate-800 dark:text-white"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('contact', 'scroll'); }}
                className="bg-violet-600 text-white py-4 rounded-xl text-lg font-semibold mt-4"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }) => (
  <section id="hero" className="min-h-[90vh] flex items-center justify-center relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
    <ParallaxBackground />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-block px-3 py-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">Based in Jamnagar</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
          Healing starts with a <span className="text-violet-600 dark:text-violet-400">Lilac</span> state of mind.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
          A safe, warm place for therapy and career guidance. Founded by Prarthana Thaker, we're here to help you get through the tough times.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => onNavigate('contact', 'scroll')}
            className="bg-violet-600 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-violet-700 transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            Start Your Journey <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => onNavigate('services', 'scroll')}
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center hover:-translate-y-1 hover:shadow-md"
          >
            How we help
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <Hero3DObject />
      </motion.div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-12 bg-violet-900 dark:bg-slate-900 text-white relative overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-[100px] pointer-events-none"
    />
  </section>
);

const Founder = () => (
  <section id="about" className="py-20 md:py-32 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
    <DoodlePattern />
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-violet-600 dark:text-violet-400 font-bold mb-4">
              <Sparkles size={18} />
              <span className="uppercase tracking-widest text-xs">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Rooted in Empathy, <br/> Guided by Science.
            </h2>
          </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
           <div className="bg-violet-50/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-violet-100 dark:border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">The Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Lilac Minds was born from a simple yet powerful belief, to make counselling and career guidance feel approachable, warm, and truly accessible. Founded by Prarthana Thaker, the vision was to create a space where people don’t feel judged or rushed, but gently understood. A place where conversations are honest, support feels genuine, and empathy is not just a value but the way we show up every single day.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              At Lilac Minds, we imagine a world where asking for help feels safe and normal, and mental health is cared for with the same respect as physical health. Our vision is to be a calm, welcoming space where anyone who walks in feels seen, heard, and supported, leaving with a little more clarity, strength, and confidence to move forward in their own way.
              </p>
           </div>
           <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm flex gap-4">
                 <div className="bg-violet-100 dark:bg-violet-900/30 p-3 h-12 w-12 rounded-full text-violet-600 dark:text-violet-300 flex items-center justify-center shrink-0"><BookOpen size={24} /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Educational Guidance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We don't just treat symptoms; we educate. Understanding the 'why' behind your feelings is the first step to mastering them.</p>
                 </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm flex gap-4">
                 <div className="bg-pink-100 dark:bg-pink-900/30 p-3 h-12 w-12 rounded-full text-pink-600 dark:text-pink-300 flex items-center justify-center shrink-0"><Heart size={24} /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Compassionate Care</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">A judgement-free zone where every emotion is valid, and every story matters. Your mental safety is our priority.</p>
                 </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm flex gap-4">
                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 h-12 w-12 rounded-full text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0"><Compass size={24} /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Future Focused</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Beyond therapy, we offer robust career counselling to help align your professional life with your personal values.</p>
                 </div>
              </div>
           </div>
      </div>

      <div className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
          <Quote className="text-violet-500 w-12 h-12 mx-auto mb-6 opacity-50" />
          <p className="text-xl md:text-2xl text-violet-100 font-medium italic leading-relaxed max-w-2xl mx-auto relative z-10">
            "Mental health is not just about fixing what's broken, but about nurturing the incredible potential within every human mind."
          </p>
          <div className="mt-6 font-bold text-white">— Prarthana Thaker, Founder</div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Personal Counselling", desc: "Navigating anxiety, stress, relationships, and emotional well-being. Available online & offline.", icon: <Brain size={24}/>, color: "bg-gradient-to-br from-purple-100 to-violet-200 text-purple-700 dark:from-purple-900/40 dark:to-violet-900/40 dark:text-purple-300" },
    { title: "Career Counselling", desc: "Scientific aptitude testing and personalized guidance to find your true path.", icon: <MapPin size={24}/>, color: "bg-gradient-to-br from-blue-100 to-cyan-200 text-blue-700 dark:from-blue-900/40 dark:to-cyan-900/40 dark:text-blue-300" },
    { title: "Student Mentorship", desc: "Supporting students with exam stress, focus, and academic pressure.", icon: <BookOpen size={24}/>, color: "bg-gradient-to-br from-pink-100 to-rose-200 text-pink-700 dark:from-pink-900/40 dark:to-rose-900/40 dark:text-pink-300" },
    { title: "Psychometric Assessments", desc: "Standardized assessments for personality, IQ, and career suitability.", icon: <FileText size={24}/>, color: "bg-gradient-to-br from-teal-100 to-emerald-200 text-teal-700 dark:from-teal-900/40 dark:to-emerald-900/40 dark:text-teal-300" },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-950/20 dark:to-slate-900 relative transition-colors duration-300 overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10 dark:opacity-5">
        <BrainWellnessIllustration className="w-64 h-64" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 dark:opacity-5">
        <GrowthPlantIllustration className="w-48 h-64" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">How we help.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Simple, effective support for whatever you're facing. We tailor our approach to your unique needs using Clinical Psychotherapy and Aptitude Testing.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Tilt3D key={i} className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 p-8 rounded-[2rem] shadow-lg shadow-violet-500/5 border border-white/50 dark:border-slate-700/50 group cursor-default hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300">
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Kind Words</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Stories of growth and healing from our community.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIAL_DATA.map((t, i) => (
            <Tilt3D key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] relative border border-slate-100 dark:border-white/5">
              <Quote className="text-violet-200 dark:text-violet-900 mb-4 h-8 w-8" />
              <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-200 dark:bg-violet-900/50 rounded-full flex items-center justify-center text-violet-700 dark:text-violet-300 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.type}</div>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
};

const BreathWidget = () => {
  const [text, setText] = useState("Inhale");
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const loop = async () => {
      setText("Inhale"); setScale(1.3);
      await new Promise(r => setTimeout(r, 4000));
      setText("Hold");
      await new Promise(r => setTimeout(r, 4000));
      setText("Exhale"); setScale(1);
      await new Promise(r => setTimeout(r, 4000));
      loop();
    };
    loop();
  }, []);

  return (
    <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full blur-[50px] opacity-30 animate-pulse"></div>
      <h3 className="text-xl font-bold mb-6 relative z-10">Breathe with us</h3>
      <motion.div 
        animate={{ scale }} 
        transition={{ duration: 4, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-xl font-light tracking-widest bg-white/5 relative z-10"
      >
        {text}
      </motion.div>
      <p className="mt-6 text-slate-400 text-xs relative z-10">Box Breathing Technique</p>
    </div>
  );
};

const ClinicSection = () => {
  return (
    <section id="clinic" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Space in Jamnagar</h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Gallery Grid */}
        <div className="mb-12">
          <div className="grid gap-6">
             {/* Main Image (Top) - Full Width */}
             <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg group relative">
                <img 
                  src={CLINIC_IMAGES[0]} 
                  alt="Lilac Minds Clinic Main View - Mental Health Clinic in Jamnagar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  width="1200"
                  height="500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-white text-2xl font-bold">A Welcoming Atmosphere</p>
                </div>
             </div>
             
             {/* Sub Images (Bottom Row) - 3 Columns */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CLINIC_IMAGES.slice(1).map((src, i) => (
                  <div key={i} className="h-64 rounded-[2rem] overflow-hidden shadow-lg group relative">
                    <img 
                      src={src} 
                      alt={`Lilac Minds Clinic Interior View ${i+2} - Psychology Clinic Jamnagar`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                      width="400"
                      height="256"
                      loading="lazy"
                    />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Features & Breath Widget */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-800 dark:text-white font-semibold">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400"><Star size={20} fill="currentColor"/></div>
                  <div><div className="text-lg">Private & Confidential</div><div className="text-xs text-slate-500 dark:text-slate-400 font-normal">Your privacy is our priority</div></div>
                </div>
                <div className="flex items-center gap-4 text-slate-800 dark:text-white font-semibold">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400"><Award size={20}/></div>
                  <div><div className="text-lg">Certified Expert</div><div className="text-xs text-slate-500 dark:text-slate-400 font-normal">Professional guidance</div></div>
                </div>
                <div className="flex items-center gap-4 text-slate-800 dark:text-white font-semibold">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400"><Coffee size={20}/></div>
                  <div><div className="text-lg">Warm & Welcoming</div><div className="text-xs text-slate-500 dark:text-slate-400 font-normal">Judgment-free zone</div></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <BreathWidget />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-violet-50/20 to-slate-50 dark:from-slate-900 dark:via-violet-950/10 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-20 left-5 opacity-10 dark:opacity-5">
        <HeartMindIllustration className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-5 opacity-10 dark:opacity-5">
        <MindfulnessIllustration className="w-40 h-40" />
      </div>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4">
            <MessageCircle size={16} />
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Common Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 shadow-sm hover:shadow-md hover:shadow-violet-500/5 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-violet-50/50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="font-bold text-slate-800 dark:text-white text-lg pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-violet-100 dark:bg-violet-900/50 rotate-180' : 'bg-slate-100 dark:bg-slate-700'}`}>
                  <ChevronDown className={`transition-colors ${openIndex === i ? 'text-violet-600 dark:text-violet-400' : 'text-slate-400'}`} size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100 dark:border-slate-700"
                  >
                    <div className="p-6 pt-4 text-slate-600 dark:text-slate-300 leading-relaxed bg-gradient-to-b from-violet-50/30 to-transparent dark:from-violet-950/20 dark:to-transparent">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [appointmentType, setAppointmentType] = useState('in-person');

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 dark:bg-violet-900/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50 dark:bg-pink-900/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 dark:border-white/10"
        >
          <div className="p-10 bg-violet-700 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 relative z-10">Let's Talk</h2>
            <p className="text-violet-100 text-lg relative z-10">Schedule a visit with Lilac Minds.</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl mb-8">
              <button 
                type="button"
                onClick={() => setAppointmentType('in-person')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${appointmentType === 'in-person' ? 'bg-white dark:bg-slate-700 text-violet-700 dark:text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                <MapPin size={18} /> In-Clinic Visit
              </button>
              <button 
                type="button"
                onClick={() => setAppointmentType('online')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${appointmentType === 'online' ? 'bg-white dark:bg-slate-700 text-violet-700 dark:text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                <Video size={18} /> Online Call
              </button>
            </div>

            <form 
              action="https://formspree.io/f/xeoylwwl" 
              method="POST" 
              className="space-y-5"
              name="booking"
              aria-label="Appointment booking form"
            >
              <input type="hidden" name="appointmentType" value={appointmentType} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Name</label>
                  <input required id="contact-name" name="name" type="text" placeholder="Your Name" autoComplete="name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Phone</label>
                  <input required id="contact-phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Email</label>
                <input required id="contact-email" name="email" type="email" placeholder="your@email.com" autoComplete="email" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-service" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Service</label>
                <select 
                  id="contact-service"
                  name="service" 
                  defaultValue=""
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-600 dark:text-slate-300 focus:bg-white dark:focus:bg-slate-800 transition-all"
                >
                  <option value="" disabled>What do you need help with?</option>
                  <option value="personal">Personal Counselling</option>
                  <option value="career">Career Counselling</option>
                  <option value="student">Student Mentorship</option>
                  <option value="assessment">Psychometric Assessment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Message</label>
                <textarea id="contact-message" name="message" rows="3" placeholder="Anything else you'd like to share?" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl hover:bg-violet-600 dark:hover:bg-violet-300 transition-colors shadow-lg mt-2 text-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                Request {appointmentType === 'online' ? 'Online' : 'In-Clinic'} Appointment
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Prefer a quick chat? <a href="https://wa.me/918200711499" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 font-bold hover:underline">Message us on WhatsApp</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 text-sm border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <img 
            src={IMAGES.logo} 
            alt="Lilac Minds Logo" 
            loading="lazy"
            className="h-24 w-24 object-contain" 
            width="96"
            height="96"
          />
        </div>
        <p className="text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
          Helping you find your way with compassion, clarity, and professional care.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Visit Us</h4>
        <div className="space-y-3">
          <p className="leading-relaxed">
            Sarvoday Society, 9, Krishna Nagar Main Rd,<br />
            opp. Bardai Brahmin Boarding, Kamdar Colony,<br />
            Jamnagar, Gujarat 361006
          </p>
          <a href="mailto:lilac.minds.in@gmail.com" className="text-violet-400 hover:text-white transition-colors">lilac.minds.in@gmail.com</a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          <a 
            href="https://share.google/rmquC8AtoERfXER0R"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Google My Business page"
            title="Google My Business"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer"
          >
            <MapPin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/lilacmindsofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            title="Instagram"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="mailto:lilac.minds.in@gmail.com"
            aria-label="Email us"
            title="Email"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://wa.me/918200711499"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="WhatsApp"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-16 pt-8 border-t border-slate-800 text-slate-600">
      © {new Date().getFullYear()} Lilac Minds.
    </div>
  </footer>
);

// --- HERO 3D INTERACTIVE OBJECT (Digital Sunflower) ---
const Hero3DObject = () => {
  const { scrollY } = useScroll();
  const rotateScroll = useTransform(scrollY, [0, 500], [0, 180]);
  const scaleScroll = useTransform(scrollY, [0, 500], [1, 0.8]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth - 0.5) * 30); 
    y.set((clientY / innerHeight - 0.5) * 30);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 20 });

  // Generate petals
  const petals = Array.from({ length: 16 });

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: "1000px" }}>
      <motion.div
        className="w-80 h-80 relative flex items-center justify-center"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
          rotateZ: rotateScroll,
          scale: scaleScroll
        }}
      >
        {/* CENTER SEEDS (Theme Colors) */}
        <div className="absolute w-24 h-24 bg-gradient-to-br from-violet-400 to-fuchsia-500 dark:from-violet-500 dark:to-fuchsia-600 rounded-full shadow-[0_0_40px_rgba(167,139,250,0.6)] z-20 flex items-center justify-center" style={{ transform: "translateZ(60px)" }}>
           <div className="w-full h-full opacity-50 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:8px_8px]" />
        </div>

        {/* PETALS LAYER 1 (Inner) */}
        {petals.map((_, i) => (
          <motion.div
            key={`petal-inner-${i}`}
            className="absolute w-12 h-32 origin-bottom rounded-full border border-violet-200/50 dark:border-white/20 bg-violet-100/80 dark:bg-white/5 backdrop-blur-sm"
            style={{
              rotate: i * (360 / 16),
              y: -80, // Move up to pivot around bottom
              transform: `rotateZ(${i * (360 / 16)}deg) rotateX(20deg) translateZ(30px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
          />
        ))}

        {/* PETALS LAYER 2 (Outer) */}
        {petals.map((_, i) => (
          <motion.div
            key={`petal-outer-${i}`}
            className="absolute w-14 h-40 origin-bottom rounded-full border border-violet-300/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-lg"
            style={{
              rotate: i * (360 / 16) + 11.25, // Offset
              y: -100,
              transform: `rotateZ(${i * (360 / 16) + 11.25}deg) rotateX(10deg) translateZ(10px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
          />
        ))}
        
        {/* Floating Particles around flower */}
         {[0, 120, 240].map((deg, i) => (
            <motion.div
              key={`orbit-${i}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-60px] rounded-full z-30 pointer-events-none"
              style={{ transform: `rotateZ(${deg}deg)` }}
            >
              <div className="w-3 h-3 bg-white dark:bg-violet-300 rounded-full shadow-[0_0_15px_white] absolute top-0 left-1/2" />
            </motion.div>
         ))}

      </motion.div>
    </div>
  )
}


// ==========================================
// 5. MAIN APP COMPONENT
// ==========================================

const MainContent = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <StatsSection />
    <Founder />
    <Services />
    <TestimonialsSection />
    <ClinicSection />
    <FAQ />
    <Booking />
  </>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home'); 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    document.title = SEO_DATA.title;
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = SEO_DATA.description;
    
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = SEO_DATA.keywords;

    let scriptSchema = document.querySelector("#schema-json");
    if (!scriptSchema) {
      scriptSchema = document.createElement("script");
      scriptSchema.id = "schema-json";
      scriptSchema.type = "application/ld+json";
      scriptSchema.text = JSON.stringify(SEO_DATA.schema);
      document.head.appendChild(scriptSchema);
    }
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = IMAGES.logo;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
    
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (target, type = 'scroll') => {
    if (type === 'page' && target === 'resources') {
      setView('resources');
      window.scrollTo(0, 0);
    } else {
      // Navigate to Home sections
      if (view !== 'home') {
        setView('home');
        // Wait for render then scroll
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className={`font-sans text-slate-900 bg-white selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      {/* Render main content immediately for LCP - splash overlays on top */}
      <div className="dark:bg-slate-950 transition-colors duration-300">
        <Navbar currentView={view} onNavigate={handleNavigation} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <FloatingShapes />
        <main id="main-content" role="main">
          {view === 'home' ? (
            <MainContent key="home" onNavigate={handleNavigation} />
          ) : (
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
                <div className="text-violet-600 dark:text-violet-400 text-lg">Loading...</div>
              </div>
            }>
              <ResourcesView key="resources" onNavigate={handleNavigation} />
            </Suspense>
          )}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
      {/* Splash screen overlay - fades away after loading */}
      <AnimatePresence>
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>
    </div>
  );
}
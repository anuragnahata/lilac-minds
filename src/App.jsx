import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  MapPin, 
  Instagram, 
  Mail, 
  ArrowRight, 
  BookOpen, 
  Wind,
  Menu,
  X,
  Coffee,
  Star,
  Video,
  Sun,
  Cloud,
  Quote,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  Activity,
  Compass,
  PhoneCall,
  CheckCircle,
  Loader2
} from 'lucide-react';

// --- IMAGE OPTIMIZATION ---
const optimize = (url, width) => 
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;

const IMAGES = {
  founder: optimize("https://i.ibb.co/B5jNNF7j/IMG-8342.jpg", 800), 
  clinic: optimize("https://i.ibb.co/mC1dMsgP/IMG-8337.jpg", 1200),
  logo: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 400)
};

// --- DATA ---
const SEO_DATA = {
  title: "Lilac Minds | Psychologist & Career Counsellor in Jamnagar",
  description: "Lilac Minds, founded by Prarthana Thaker, offers expert psychotherapy, career counselling, and student mentorship in Jamnagar.",
  keywords: "Psychologist Jamnagar, Career Counselling, Mental Health, Prarthana Thaker, Psychotherapy, Student Counseling Gujarat",
  schema: {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Lilac Minds",
    "founder": "Prarthana Thaker",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sarvoday Society, 9, Krishna Nagar Main Rd",
      "addressLocality": "Jamnagar",
      "addressRegion": "Gujarat",
      "postalCode": "361006",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210" 
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
    type: "Psychotherapy"
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
    answer: "Absolutely. We adhere to strict ethical guidelines regarding client confidentiality. What you share in the therapy room stays in the therapy room."
  },
  {
    question: "How do I know if I need therapy?",
    answer: "If you're feeling overwhelmed, stuck, or just need a neutral perspective to navigate life's challenges, therapy can be beneficial. You don't need to be in a crisis to seek support."
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, we offer secure video consultations for clients across India and abroad. The quality of care remains exactly the same as in-person visits."
  },
  {
    question: "What is the duration of a typical session?",
    answer: "Standard sessions typically last between 45 to 60 minutes, giving us enough time to deep dive into your concerns."
  }
];

const ASSESSMENT_DATA = {
  anxiety: {
    id: 'anxiety',
    title: "Anxiety Screening (GAD-7)",
    desc: "A standardized screening tool to assess the severity of anxiety symptoms.",
    icon: Wind,
    color: "text-blue-600",
    bg: "bg-blue-50",
    questions: [
      "Feeling nervous, anxious, or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      if (score <= 4) return { level: "Minimal Anxiety", text: "Your symptoms suggest minimal anxiety. Keep practicing self-care." };
      if (score <= 9) return { level: "Mild Anxiety", text: "You may be experiencing mild anxiety. Mindfulness and relaxation techniques might help." };
      if (score <= 14) return { level: "Moderate Anxiety", text: "Your scores indicate moderate anxiety. Professional support could be very beneficial." };
      return { level: "Severe Anxiety", text: "Your symptoms suggest severe anxiety. We strongly recommend speaking with a mental health professional." };
    }
  },
  depression: {
    id: 'depression',
    title: "Depression Check (PHQ-9)",
    desc: "Evaluate common symptoms of depression and low mood.",
    icon: Cloud,
    color: "text-gray-600",
    bg: "bg-gray-50",
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself - or that you are a failure",
      "Trouble concentrating on things, such as reading or TV",
      "Moving or speaking so slowly that other people could have noticed",
      "Thoughts that you would be better off dead, or of hurting yourself"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      if (score <= 4) return { level: "Minimal Depression", text: "Your score suggests minimal to no depression." };
      if (score <= 9) return { level: "Mild Depression", text: "You may have mild depressive symptoms. Monitoring your mood is recommended." };
      if (score <= 14) return { level: "Moderate Depression", text: "Your symptoms indicate moderate depression. Counseling is recommended." };
      if (score <= 19) return { level: "Moderately Severe Depression", text: "These scores suggest moderately severe depression. Professional help is advised." };
      return { level: "Severe Depression", text: "Your score indicates severe depression. Please reach out to a professional immediately." };
    }
  },
  career: {
    id: 'career',
    title: "Career Aptitude",
    desc: "A brief check to see where your professional interests might lie.",
    icon: Compass,
    color: "text-violet-600",
    bg: "bg-violet-50",
    questions: [
      "I enjoy solving complex problems and puzzles.",
      "I like helping others learn or grow.",
      "I enjoy creative activities like art, writing, or design.",
      "I prefer structured environments with clear rules.",
      "I like leading teams and persuading others.",
      "I enjoy working with machines, tools, or physical objects."
    ],
    options: [
      { label: "Disagree", score: 0, type: "" },
      { label: "Neutral", score: 1, type: "" },
      { label: "Agree", score: 2, type: "" }
    ],
    getResult: (score) => {
      return { 
        level: "Exploration Needed", 
        text: "Your interests seem varied. A comprehensive career counselling session with aptitude testing is recommended to pinpoint your perfect path." 
      };
    }
  }
};

// --- DECORATIVE COMPONENTS ---

const DoodlePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="pattern-doodle" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <path d="M 50 50 Q 60 40 70 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="80" y="80" width="4" height="4" fill="currentColor" transform="rotate(45 82 82)"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#pattern-doodle)"/>
  </svg>
);

const FloatingIcon = ({ Icon, x, y, delay, color, size = 32 }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{ duration: 6, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    className={`absolute ${x} ${y} ${color} hidden md:block pointer-events-none`}
  >
    <Icon size={size} />
  </motion.div>
);

// --- SPLASH SCREEN ---
const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-200/60 rounded-full blur-[80px] md:blur-[100px]"
      />

      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-8"
        >
           <img 
             src={IMAGES.logo} 
             alt="Lilac Minds Logo" 
             className="w-40 h-40 object-contain drop-shadow-sm" 
             width="160" 
             height="160"
           />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Lilac Minds
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-violet-500 mt-6 rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-slate-400 text-xs md:text-sm mt-6 font-medium tracking-[0.3em] uppercase text-center"
        >
          Psychology & Career Guidance
        </motion.p>
      </div>
    </motion.div>
  );
};

// --- NAVIGATION ---
const Navbar = ({ currentView, onNavigate }) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => onNavigate('home')}
        >
          <img 
            src={IMAGES.logo} 
            alt="Lilac Minds Logo" 
            className="h-12 w-auto object-contain hover:opacity-90 transition-opacity" 
            width="150"
            height="48"
          />
          <span className="font-bold text-xl text-slate-800 tracking-tight">Lilac Minds</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.target, item.type)}
              className={`${currentView === 'resources' && item.target === 'resources' ? 'text-violet-700 font-bold' : 'text-slate-600 font-medium'} hover:text-violet-600 text-sm transition-colors`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact', 'scroll')}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-violet-600 transition-all shadow-md hover:shadow-lg"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-1 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setMobileMenuOpen(false); onNavigate(item.target, item.type); }}
                  className="text-2xl font-bold text-slate-800"
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

// --- RESOURCES VIEW ---
const ResourcesView = ({ onNavigate }) => {
  const [activeTest, setActiveTest] = useState(null); // 'anxiety', 'depression', 'career'
  const [step, setStep] = useState('menu'); // 'menu', 'form', 'questions', 'result'
  const [user, setUser] = useState({ name: '', phone: '', email: '', city: '' });
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startTest = (testId) => {
    setActiveTest(ASSESSMENT_DATA[testId]);
    setStep('form');
    setAnswers({});
    setResult(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('questions');
  };

  const handleAnswer = (questionIndex, score) => {
    const newAnswers = { ...answers, [questionIndex]: score };
    setAnswers(newAnswers);

    // Check if it's the last question
    if (Object.keys(newAnswers).length === activeTest.questions.length) {
      calculateAndSendResult(newAnswers);
    }
  };

  const calculateAndSendResult = async (finalAnswers) => {
    setIsSubmitting(true);
    const totalScore = Object.values(finalAnswers).reduce((a, b) => a + b, 0);
    const res = activeTest.getResult(totalScore);
    setResult({ ...res, score: totalScore });

    // Send data to Formspree
    try {
      await fetch("https://formspree.io/f/xeoylwwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New ${activeTest.title} Result: ${user.name}`,
          user_name: user.name,
          user_email: user.email,
          user_phone: user.phone,
          user_city: user.city,
          test_name: activeTest.title,
          test_score: totalScore,
          result_level: res.level,
          result_text: res.text,
          message: "User completed an automated assessment on the website."
        })
      });
    } catch (error) {
      console.error("Error sending assessment result:", error);
    } finally {
      setIsSubmitting(false);
      setStep('result');
    }
  };

  const reset = () => {
    setStep('menu');
    setActiveTest(null);
    setAnswers({});
    setResult(null);
  };

  const helplines = [
    { name: "Vandrevala Foundation", number: "1860 266 2345", desc: "24x7 Mental Health Support" },
    { name: "iCall (TISS)", number: "022 2552 1111", desc: "Mon-Sat, 8 AM - 10 PM" },
    { name: "Kirun Helpline", number: "1800 599 0019", desc: "Govt. of India (24x7)" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* HEADER */}
        {step === 'menu' && (
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Resources</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Curated tools, assessments, and helplines to support your mental wellness journey.
            </p>
          </div>
        )}

        {/* STEP 1: MENU */}
        {step === 'menu' && (
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="p-2 bg-violet-100 rounded-lg text-violet-600"><FileText size={24} /></span>
                Self-Assessments
              </h3>
              <div className="grid gap-4">
                {Object.values(ASSESSMENT_DATA).map((test, i) => {
                  const IconComponent = test.icon;
                  return (
                    <div 
                      key={i} 
                      onClick={() => startTest(test.id)}
                      className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-violet-100 hover:shadow-lg transition-all cursor-pointer bg-white"
                    >
                      <div className={`p-3 rounded-full ${test.bg} ${test.color}`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-violet-700 transition-colors">{test.title}</h4>
                        <p className="text-sm text-slate-500 mb-3">{test.desc}</p>
                        <span className="text-xs font-semibold text-violet-500 uppercase tracking-wider flex items-center gap-1">
                          Start Assessment <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HELPLINES (Visible only in menu) */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="p-2 bg-red-100 rounded-lg text-red-600"><PhoneCall size={24} /></span>
                Crisis Helplines (India)
              </h3>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                <div className="space-y-6">
                  {helplines.map((line, i) => (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div>
                        <div className="font-bold text-slate-900">{line.name}</div>
                        <div className="text-sm text-slate-500">{line.desc}</div>
                      </div>
                      <a href={`tel:${line.number.replace(/\s/g, '')}`} className="bg-slate-50 px-4 py-2 rounded-full text-sm font-bold text-slate-700 shadow-sm hover:bg-violet-600 hover:text-white transition-colors">
                        Call
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: USER DETAILS FORM */}
        {step === 'form' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 max-w-2xl mx-auto"
          >
            <button onClick={reset} className="text-slate-400 hover:text-slate-600 mb-6 flex items-center gap-2 text-sm font-bold">
              <ArrowRight className="rotate-180" size={16} /> Back to Resources
            </button>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{activeTest.title}</h2>
            <p className="text-slate-500 mb-8">Please provide your details to start the assessment.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                <input required type="text" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                  value={user.name} onChange={e => setUser({...user, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mobile Number</label>
                  <input required type="tel" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                    value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">City</label>
                  <input required type="text" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                    value={user.city} onChange={e => setUser({...user, city: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                <input required type="email" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500" 
                  value={user.email} onChange={e => setUser({...user, email: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full bg-violet-600 text-white font-bold py-4 rounded-xl hover:bg-violet-700 transition-colors shadow-lg mt-4">
                Start Assessment
              </button>
            </form>
          </motion.div>
        )}

        {/* STEP 3: QUESTIONS */}
        {step === 'questions' && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">{activeTest.title}</h2>
              <span className="text-sm font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                {Object.keys(answers).length} / {activeTest.questions.length}
              </span>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-violet-600 w-12 h-12 mb-4" />
                <p className="text-slate-600 font-medium">Analyzing results and generating report...</p>
              </div>
            ) : (
              <div className="space-y-12">
                {activeTest.questions.map((q, qIdx) => (
                  <motion.div 
                    key={qIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qIdx * 0.1 }}
                    className={`bg-white p-6 rounded-2xl border ${answers[qIdx] !== undefined ? 'border-violet-500 ring-1 ring-violet-500' : 'border-slate-200'} shadow-sm`}
                  >
                    <p className="text-lg font-medium text-slate-800 mb-4">{qIdx + 1}. {q}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {activeTest.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswer(qIdx, opt.score)}
                          className={`p-3 rounded-xl text-sm font-medium transition-all ${
                            answers[qIdx] === opt.score 
                              ? 'bg-violet-600 text-white shadow-md' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 4: RESULTS */}
        {step === 'result' && result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600">
              <Award size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Assessment Complete</h2>
            <p className="text-slate-500 mb-8">Thank you, {user.name}. We have sent these details to the clinic for your records.</p>
            
            <div className="bg-slate-50 p-8 rounded-2xl mb-8 border border-slate-200">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Result Indicator</div>
              <div className="text-2xl font-bold text-violet-700 mb-3">{result.level}</div>
              <p className="text-slate-600 leading-relaxed">{result.text}</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl flex items-start gap-3 text-left mb-8">
              <CheckCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This is a screening tool, not a medical diagnosis. The results are based on your responses and should be discussed with a professional.
              </p>
            </div>

            <button 
              onClick={() => onNavigate('contact', 'scroll')}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-violet-600 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Book a Consultation to Discuss <ArrowRight size={18} />
            </button>
            <button onClick={reset} className="mt-6 text-slate-400 text-sm hover:text-slate-600 underline">
              Take another test
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
};

// --- CONTENT COMPONENTS ---
const Hero = ({ onNavigate }) => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <FloatingIcon Icon={Heart} x="left-[10%]" y="top-[20%]" delay={0} color="text-pink-300" />
      <FloatingIcon Icon={Sun} x="right-[10%]" y="top-[15%]" delay={1.5} color="text-yellow-300" />
      <FloatingIcon Icon={Cloud} x="left-[5%]" y="bottom-[20%]" delay={2.5} color="text-blue-300" />
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-200/40 rounded-full blur-[80px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-100/60 rounded-full blur-[60px] mix-blend-multiply" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full text-violet-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            Based in Jamnagar
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Healing starts with a <span className="text-violet-600">Lilac</span> state of mind.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
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
              className="bg-white text-slate-800 border border-slate-200 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-slate-50 transition-all flex items-center justify-center hover:-translate-y-1 hover:shadow-md"
            >
              How we help
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] group">
            <img 
              src={IMAGES.clinic} 
              alt="Clinic Vibe" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
              fetchpriority="high"
              width="600"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent"></div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="bg-pink-100 p-2 rounded-full text-pink-500"><Heart size={20} /></div>
            <span className="font-bold text-slate-700 text-sm">Compassion</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="bg-blue-100 p-2 rounded-full text-blue-500"><Brain size={20} /></div>
            <span className="font-bold text-slate-700 text-sm">Clarity</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-violet-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-violet-200">5+</div>
            <div className="text-sm md:text-base opacity-80">Years Experience</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-pink-200">500+</div>
            <div className="text-sm md:text-base opacity-80">Students Guided</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-200">100%</div>
            <div className="text-sm md:text-base opacity-80">Confidentiality</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-200">20+</div>
            <div className="text-sm md:text-base opacity-80">Workshops Held</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-white overflow-hidden">
      <DoodlePattern />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-white to-violet-50/50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-sm border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 text-violet-600 font-bold mb-2">
                  <Sparkles size={18} />
                  <span className="uppercase tracking-widest text-xs">The Founder</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hi, I'm Prarthana.</h2>
                
                <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-lg">
                  <p>
                    I started <span className="font-semibold text-violet-700">Lilac Minds</span> because I believe everyone deserves a place where they are truly heard. Mental health isn't just about fixing problems—it's about understanding who you are.
                  </p>
                  <p>
                    Whether you are a student confused about your future or someone feeling overwhelmed by life, I combine professional psychology with a friendly, down-to-earth approach to help you find your way.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="bg-violet-100 p-3 rounded-full text-violet-600"><BookOpen size={20} /></div>
                    <div>
                      <div className="font-bold text-slate-900">Educator</div>
                      <div className="text-xs text-slate-500">Guiding students</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="bg-pink-100 p-3 rounded-full text-pink-600"><Heart size={20} /></div>
                    <div>
                      <div className="font-bold text-slate-900">Counselor</div>
                      <div className="text-xs text-slate-500">Healing hearts</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative h-[400px] md:h-[550px]"
            >
              <div className="absolute inset-0 bg-violet-200 rounded-[2rem] rotate-3 transform translate-y-2"></div>
              <img 
                src={IMAGES.founder} 
                alt="Prarthana Thaker" 
                loading="lazy"
                width="600"
                height="800"
                className="relative w-full h-full object-cover object-top rounded-[2rem] shadow-xl hover:rotate-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Psychotherapy", desc: "Talk through anxiety, sadness, or stress.", icon: <Brain size={24}/>, color: "bg-purple-100 text-purple-700" },
    { title: "Career Counselling", desc: "Find the right career path for you.", icon: <MapPin size={24}/>, color: "bg-blue-100 text-blue-700" },
    { title: "Student Mentorship", desc: "Help with exams and school pressure.", icon: <BookOpen size={24}/>, color: "bg-pink-100 text-pink-700" },
    { title: "Online Therapy", desc: "Get support from your own home.", icon: <Wind size={24}/>, color: "bg-teal-100 text-teal-700" },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How we help.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Simple, effective support for whatever you're facing. We tailor our approach to your unique needs.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-300 group cursor-default"
            >
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Kind Words</h2>
          <p className="text-lg text-slate-500">Stories of growth and healing from our community.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIAL_DATA.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2rem] relative">
              <Quote className="text-violet-200 mb-4 h-8 w-8" />
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-200 rounded-full flex items-center justify-center text-violet-700 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.type}</div>
                </div>
              </div>
            </div>
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
    <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
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
    <section id="clinic" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Space in Jamnagar</h2>
          <div className="h-1 w-20 bg-violet-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src={IMAGES.clinic} 
              alt="Clinic Interior" 
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/10 to-transparent flex flex-col justify-end p-8 md:p-16 text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">A Safe Haven.</h3>
              <p className="text-violet-100 text-base md:text-lg max-w-lg leading-relaxed">
                We designed our clinic to feel like a living room, not a hospital. 
                Soft colors, comfy seats, and a place where you can just be you.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2.5rem] flex-1 flex flex-col justify-center border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6 text-slate-800 font-semibold">
                <div className="p-3 bg-yellow-50 rounded-full text-yellow-600"><Star size={20} fill="currentColor"/></div>
                <div>
                  <div className="text-lg">Private & Confidential</div>
                  <div className="text-xs text-slate-500 font-normal">Your privacy is our priority</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-800 font-semibold mb-6">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600"><Award size={20}/></div>
                <div>
                  <div className="text-lg">Certified Expert</div>
                  <div className="text-xs text-slate-500 font-normal">Professional guidance</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-800 font-semibold">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600"><Coffee size={20}/></div>
                <div>
                  <div className="text-lg">Warm & Welcoming</div>
                  <div className="text-xs text-slate-500 font-normal">Judgment-free zone</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <BreathWidget />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Common Questions</h2>
          <p className="text-lg text-slate-500">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-violet-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white border-t border-slate-100"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed mt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [appointmentType, setAppointmentType] = useState('in-person');

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-50 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="p-10 bg-violet-700 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 relative z-10">Let's Talk</h2>
            <p className="text-violet-100 text-lg relative z-10">Schedule a visit with Prarthana.</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
              <button 
                type="button"
                onClick={() => setAppointmentType('in-person')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${appointmentType === 'in-person' ? 'bg-white text-violet-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <MapPin size={18} /> In-Clinic Visit
              </button>
              <button 
                type="button"
                onClick={() => setAppointmentType('online')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${appointmentType === 'online' ? 'bg-white text-violet-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Video size={18} /> Online Call
              </button>
            </div>

            <form 
              action="https://formspree.io/f/xeoylwwl" 
              method="POST" 
              className="space-y-5"
              name="booking"
            >
              <input type="hidden" name="appointmentType" value={appointmentType} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Name</label>
                  <input required name="name" type="text" placeholder="Your Name" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone</label>
                  <input required name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                <input required name="email" type="email" placeholder="your@email.com" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Service</label>
                <select 
                  name="service" 
                  defaultValue=""
                  className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-600 focus:bg-white transition-all"
                >
                  <option value="" disabled>What do you need help with?</option>
                  <option>Psychotherapy</option>
                  <option>Career Counselling</option>
                  <option>Student Mentorship</option>
                  <option>Online Therapy</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
                <textarea name="message" rows="3" placeholder="Anything else you'd like to share?" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-violet-600 transition-colors shadow-lg mt-2 text-lg">
                Request {appointmentType === 'online' ? 'Online' : 'In-Clinic'} Appointment
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 text-sm">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <img 
            src={IMAGES.logo} 
            alt="Lilac Minds Logo" 
            loading="lazy"
            className="h-24 w-auto object-contain" 
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
          <p className="text-violet-400 hover:text-white transition-colors cursor-pointer">hello@lilacminds.com</p>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
        <div className="flex gap-6 justify-center md:justify-start">
          <a 
            href="https://www.instagram.com/lilacmindsofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer"
          >
            <Instagram size={20} />
          </a>
          <div className="p-3 bg-slate-800 rounded-full hover:bg-violet-600 text-white transition-all cursor-pointer">
            <Mail size={20} />
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-16 pt-8 border-t border-slate-800 text-slate-600">
      © {new Date().getFullYear()} Lilac Minds.
    </div>
  </footer>
);

// --- VIEW MANAGER ---
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
  const [view, setView] = useState('home'); // 'home' or 'resources'

  useEffect(() => {
    // 1. Set Title & Meta Tags
    document.title = SEO_DATA.title;
    
    // Inject Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = SEO_DATA.description;

    // Inject Keywords
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = SEO_DATA.keywords;

    // Inject Schema Markup
    let scriptSchema = document.querySelector("#schema-json");
    if (!scriptSchema) {
      scriptSchema = document.createElement("script");
      scriptSchema.id = "schema-json";
      scriptSchema.type = "application/ld+json";
      scriptSchema.text = JSON.stringify(SEO_DATA.schema);
      document.head.appendChild(scriptSchema);
    }

    // 2. Set Favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = IMAGES.logo;
    document.getElementsByTagName('head')[0].appendChild(link);

    // 3. Inject Font for Splash Screen
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
    `;
    document.head.appendChild(style);

    // 4. Timer for Splash Screen (Reduced for speed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

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
    <div className="font-sans text-slate-900 bg-white selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar currentView={view} onNavigate={handleNavigation} />
            {view === 'home' ? (
              <MainContent key="home" onNavigate={handleNavigation} />
            ) : (
              <ResourcesView key="resources" onNavigate={handleNavigation} />
            )}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
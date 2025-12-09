import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  MapPin, 
  Instagram, 
  Mail, 
  Phone, 
  ArrowRight, 
  BookOpen, 
  Wind,
  Menu,
  X,
  Coffee,
  Star,
  Video,
  Sun,
  Cloud
} from 'lucide-react';

// --- IMAGE OPTIMIZATION ---
const optimize = (url, width) => 
  `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;

const IMAGES = {
  founder: optimize("https://i.ibb.co/B5jNNF7j/IMG-8342.jpg", 800), 
  clinic: optimize("https://i.ibb.co/mC1dMsgP/IMG-8337.jpg", 1200),
  logo: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 400)
};

// --- SEO DATA ---
const SEO_DATA = {
  title: "Lilac Minds | Psychologist & Career Counsellor in Jamnagar",
  description: "Lilac Minds, founded by Prarthana Thaker, offers expert psychotherapy, career counselling, and student mentorship in Jamnagar.",
  keywords: "Psychologist Jamnagar, Career Counselling, Mental Health, Prarthana Thaker",
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
      {/* Background Gradient Orb */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-200/60 rounded-full blur-[80px] md:blur-[100px]"
      />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo */}
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Lilac Minds
        </motion.h1>
        
        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-violet-500 mt-6 rounded-full"
        />
        
        {/* Subtitle */}
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

// --- MAIN SECTIONS ---

const Navbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Services', 'Clinic'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => scrollToSection('hero')}
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
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-slate-600 hover:text-violet-600 font-medium text-sm transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
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
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => { setMobileMenuOpen(false); scrollToSection(item.toLowerCase()); }}
                  className="text-2xl font-bold text-slate-800"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); scrollToSection('contact'); }}
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

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Decorative Icons */}
      <FloatingIcon Icon={Heart} x="left-[10%]" y="top-[20%]" delay={0} color="text-pink-300" />
      <FloatingIcon Icon={Sun} x="right-[10%]" y="top-[15%]" delay={1.5} color="text-yellow-300" />
      <FloatingIcon Icon={Cloud} x="left-[5%]" y="bottom-[20%]" delay={2.5} color="text-blue-300" />
      
      {/* Background Blobs */}
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
              onClick={() => scrollToSection('contact')}
              className="bg-violet-600 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-violet-700 transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Start Your Journey <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
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
          
          {/* Animated Illustration Badges */}
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

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
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
        </motion.div>
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
    <section id="clinic" className="py-20 md:py-32 bg-white">
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
              className="bg-violet-50 p-8 rounded-[2.5rem] flex-1 flex flex-col justify-center border border-violet-100"
            >
              <div className="flex items-center gap-4 mb-6 text-slate-800 font-semibold">
                <div className="p-3 bg-white rounded-full text-yellow-500 shadow-sm"><Star size={20} fill="currentColor"/></div>
                <span className="text-lg">Private & Confidential</span>
              </div>
              <div className="flex items-center gap-4 text-slate-800 font-semibold">
                <div className="p-3 bg-white rounded-full text-slate-400 shadow-sm"><Coffee size={20}/></div>
                <span className="text-lg">Warm & Welcoming</span>
              </div>
              <p className="mt-8 text-slate-600 leading-relaxed">
                Located in the heart of the city, but quiet enough to hear your own thoughts.
              </p>
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

const Booking = () => {
  const [appointmentType, setAppointmentType] = useState('in-person');

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
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

export default function App() {
  const [loading, setLoading] = useState(true);

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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
            <Navbar scrollToSection={scrollToSection} />
            <Hero scrollToSection={scrollToSection} />
            <Founder />
            <Services />
            <ClinicSection />
            <Booking />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
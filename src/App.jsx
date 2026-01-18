import React, { useState, useEffect, useRef } from 'react';
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
  Loader2,
  MessageCircle,
  Moon,
  Battery, 
  Zap,
  Layout,
  Library
} from 'lucide-react';

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
  logo: optimize("https://i.ibb.co/XZG4XH4N/Untitled-design.png", 400)
};

// --- DATA CONSTANTS ---
const SEO_DATA = {
  title: "Lilac Minds | Psychologist & Career Counsellor in Jamnagar",
  description: "Lilac Minds, founded by Prarthana Thaker, offers expert psychotherapy, career counselling, and student mentorship in Jamnagar. A safe haven for mental wellness.",
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
    "telephone": "+918200711499" 
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

// --- BLOG DATA ---
const BLOGS_DATA = [
  {
    id: 101,
    title: "Understanding Therapy: Dispelling Myths & Embracing Growth",
    desc: "Therapy isn't just for crises. Discover how professional counseling fosters resilience, self-awareness, and emotional hygiene in everyday life.",
    tag: "Psychoeducation",
    readTime: "8 min",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-loose">
        <p>
          In our society, a pervasive stigma often suggests that therapy is a "last resort" reserved only for those who have "hit rock bottom" or are battling severe mental illnesses. This misconception prevents countless individuals from accessing a vital resource for personal growth. In reality, <strong>psychotherapy</strong> is a proactive tool for mental hygiene, much like going to the gym is for physical health. It provides a structured, scientific environment to analyze thoughts, regulate emotions, and improve interpersonal relationships before small stressors become overwhelming crises.
        </p>
        <h3 className="text-2xl font-bold mt-8 text-slate-900 dark:text-white">The Science of Change: Neuroplasticity</h3>
        <p>
          Therapy is not just "venting." It is a biological intervention. Research in neuroscience shows that consistent talk therapy can alter the neural pathways in the brain—a concept known as <strong>neuroplasticity</strong>. By identifying and challenging negative thought patterns (Cognitive Behavioral Therapy), we physically weaken the neural connections associated with anxiety and strengthen those associated with calm and logic. A psychologist in Jamnagar or anywhere else acts as a guide in this rewiring process.
        </p>
        <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-100 dark:border-white/10 my-6">
          <h3 className="text-xl font-bold mb-4 text-violet-700 dark:text-violet-300">Common Myths vs. Clinical Facts</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold text-slate-800 dark:text-white">Myth: "Therapy is only for 'crazy' people."</p>
              <p className="mt-1"><strong>Fact:</strong> While clinical psychologists treat disorders, a massive portion of practice involves helping healthy individuals navigate life transitions, grief, relationship conflicts, and career burnout. It is for anyone seeking clarity.</p>
            </li>
            <li>
              <p className="font-semibold text-slate-800 dark:text-white">Myth: "The therapist will tell me what to do."</p>
              <p className="mt-1"><strong>Fact:</strong> A psychologist's role is not to give advice, but to facilitate <em>insight</em>. We act as a mirror, helping you see blind spots in your behavior and equipping you with coping mechanisms to make your own empowered decisions.</p>
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold mt-8 text-slate-900 dark:text-white">The Therapeutic Alliance</h3>
        <p>
          Research consistently indicates that the strongest predictor of successful therapy is the <strong>Therapeutic Alliance</strong>—the trust and rapport between client and therapist. At Lilac Minds, we prioritize creating a safe, non-judgmental space where you feel heard and understood.
        </p>
      </div>
    )
  },
  {
    id: 102,
    title: "Mastering Exam Anxiety: A Neuro-Psychological View",
    desc: "Why does the mind go blank during exams? Understanding the 'Fight or Flight' response and learning scientifically proven grounding techniques.",
    tag: "Student Mentorship",
    readTime: "9 min",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-loose">
        <p>
          It is a frustratingly common phenomenon: you study effectively for weeks, memorize every formula and concept, but the moment you sit in the exam hall and flip over the paper, your mind goes blank. This is not necessarily a sign of low intelligence, poor preparation, or "bad luck." It is often a physiological hijack known as the <strong>Fight or Flight</strong> response.
        </p>
        <h3 className="text-2xl font-bold mt-8 text-slate-900 dark:text-white">The Biology of "Blanking Out"</h3>
        <p>
          When your brain perceives the exam as a "threat" (similar to a predator), the <strong>Amygdala</strong> (the brain's fear center) activates. This floods your system with stress hormones like cortisol and adrenaline. While these hormones are excellent for running away from a tiger, they have a detrimental effect on the <strong>Prefrontal Cortex</strong>—the area of the brain responsible for higher-order logic, reasoning, and memory retrieval. Essentially, your survival instinct shuts down your thinking brain to save energy for physical escape.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-white/10 my-8">
           <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Scientific Grounding Techniques</h3>
           <p className="mb-4">To reverse this hijack, you must biologically convince your nervous system that you are safe. Here are two techniques to practice:</p>
           <div className="space-y-6">
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white text-lg">1. The 4-7-8 Breathing Method</h4>
               <p className="mt-1">Inhale quietly through the nose for <strong>4 seconds</strong>. Hold the breath for <strong>7 seconds</strong>. Exhale forcefully through the mouth for <strong>8 seconds</strong>. This specific rhythm stimulates the Vagus nerve, activating the Parasympathetic Nervous System (rest and digest mode), physically forcing your heart rate to drop.</p>
             </div>
             <div>
               <h4 className="font-bold text-slate-900 dark:text-white text-lg">2. The 5-4-3-2-1 Sensory Check</h4>
               <p className="mt-1">When panic spirals internally, focus externally. Acknowledge <strong>5</strong> things you see, <strong>4</strong> you can touch (desk texture, pen grip), <strong>3</strong> you hear, <strong>2</strong> you can smell, and <strong>1</strong> you can taste. This sensory data forces the Prefrontal Cortex to come back online to process the information.</p>
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 103,
    title: "Building Emotional Resilience: The Art of Bouncing Back",
    desc: "Resilience isn't a trait you're born with; it's a muscle you build. Learn the 'Three C's' and practical strategies for psychological strength.",
    tag: "Wellness",
    readTime: "8 min",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-loose">
        <p>
          Resilience is often misunderstood as "toughness" or the absence of emotion. However, the American Psychological Association (APA) defines resilience as the process of adapting well in the face of adversity, trauma, tragedy, threats, or significant sources of stress. It is not about never falling down; it is about the capacity to "bounce back" and often grow stronger from the experience. It involves behaviors, thoughts, and actions that can be learned and developed by anyone.
        </p>
        <h3 className="text-2xl font-bold mt-8 text-slate-900 dark:text-white">The "Three C's" of Resilience</h3>
        <p>Psychologist Suzanne Kobasa's research identified three key personality traits that resilient people share, known as the Three C's:</p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
           <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
             <h4 className="font-bold text-violet-600 dark:text-violet-400 mb-2">1. Challenge</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Viewing a difficulty as a challenge to overcome rather than a paralyzing threat.</p>
           </div>
           <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
             <h4 className="font-bold text-violet-600 dark:text-violet-400 mb-2">2. Commitment</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Being committed to your goals, relationships, and values. This provides a "North Star."</p>
           </div>
           <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
             <h4 className="font-bold text-violet-600 dark:text-violet-400 mb-2">3. Control</h4>
             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Focusing your energy on what you <em>can</em> change (your reaction, your effort), rather than external events.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 104,
    title: "Navigating Career Confusion: Science Over Guesswork",
    desc: "Confused between passion and practicality? Understand how Psychometric Aptitude Testing and counselling align your skills with market reality.",
    tag: "Career Counselling",
    readTime: "7 min",
    content: (
      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-loose">
        <p>
          In a rapidly evolving world with thousands of career options, "analysis paralysis" is real. Students and professionals often feel torn between what they <em>love</em> to do, what they are <em>good</em> at, and what pays the bills. This intersection is often referred to in Japanese culture as <strong>Ikigai</strong>. However, finding it requires more than just introspection; it requires data.
        </p>
        <h3 className="text-2xl font-bold mt-8 text-slate-900 dark:text-white">The Science of Aptitude Testing</h3>
        <p>
          Career choices should not be based solely on current trends, parental pressure, or a "gut feeling." A scientific approach involves assessing three distinct pillars of an individual's profile:
        </p>
        <div className="space-y-6 my-8">
           <div className="flex items-start gap-4">
             <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 font-bold shrink-0 text-lg">1</div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">Aptitude (Innate Potential)</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">This refers to your natural ability to learn specific skills. Tests measure Numerical, Verbal, Spatial, Mechanical, and Abstract reasoning.</p>
             </div>
           </div>
           <div className="flex items-start gap-4">
             <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 font-bold shrink-0 text-lg">2</div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">Personality (Behavioral Style)</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Who are you at your core? Are you introverted or extroverted? Do you prefer structure or chaos?</p>
             </div>
           </div>
        </div>
      </div>
    )
  }
];

// --- ASSESSMENT DATA ---
const ASSESSMENT_DATA = {
  anxiety: {
    id: 'anxiety',
    title: "Anxiety Screening (GAD-7)",
    desc: "A standardized clinical screening tool to measure the severity of Generalized Anxiety Disorder symptoms over the last 2 weeks.",
    icon: Wind,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    questions: [
      "Feeling nervous, anxious, or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Trouble relaxing?",
      "Being so restless that it is hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid, as if something awful might happen?"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations;
      if (score <= 4) {
        level = "Minimal Anxiety (0-4)";
        text = "Your score falls within the range of minimal anxiety. This suggests you are currently coping well with daily stressors. It is normal to feel occasional nerves, but they do not seem to be interfering with your life significantly.";
        recommendations = ["Continue your current self-care routine.", "Practice daily mindfulness to maintain this balance.", "Ensure you are getting adequate sleep and exercise."];
      } else if (score <= 9) {
        level = "Mild Anxiety (5-9)";
        text = "Your score indicates mild anxiety. You may be feeling stressed or worried more than usual, but it is likely manageable. This is a common response to life transitions or pressure.";
        recommendations = ["Monitor your triggers; write down what makes you anxious.", "Try 'Box Breathing' (4-4-4-4) when you feel tension rising.", "Limit caffeine and screen time before bed.", "Consider talking to a friend about your stressors."];
      } else if (score <= 14) {
        level = "Moderate Anxiety (10-14)";
        text = "Your symptoms suggest moderate anxiety. Worrying may be starting to interfere with your ability to focus, sleep, or relax. This level of anxiety deserves attention and care.";
        recommendations = ["We highly recommend booking a consultation with a counselor.", "Practice Progressive Muscle Relaxation (PMR) daily.", "Break large tasks into smaller, manageable steps to reduce overwhelm.", "Physical activity is clinically proven to metabolize stress hormones."];
      } else {
        level = "Severe Anxiety (15-21)";
        text = "Your score indicates severe anxiety symptoms. It is likely that anxiety is significantly impacting your daily life, relationships, and physical well-being. Please know that this is highly treatable with professional support.";
        recommendations = ["Please seek professional help immediately.", "Do not face this alone; lean on your support system.", "Focus on 'grounding techniques' to manage acute panic.", "Remember: Anxiety is a condition, not a character flaw, and you can feel better."];
      }
      return { level, text, recommendations };
    }
  },
  depression: {
    id: 'depression',
    title: "Depression Check (PHQ-9)",
    desc: "The Patient Health Questionnaire (PHQ-9) is a multipurpose instrument for screening, diagnosing, monitoring and measuring the severity of depression.",
    icon: Cloud,
    color: "text-gray-600 dark:text-gray-400",
    bg: "bg-gray-50 dark:bg-gray-800/50",
    questions: [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
      "Trouble concentrating on things, such as reading the newspaper or watching television?",
      "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless?",
      "Thoughts that you would be better off dead, or of hurting yourself in some way?"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations;
      if (score <= 4) {
        level = "Minimal Depression (0-4)";
        text = "Your score suggests minimal or no depressive symptoms. You seem to be maintaining a healthy emotional baseline.";
        recommendations = ["Keep engaging in hobbies you enjoy.", "Maintain social connections.", "Prioritize a consistent sleep schedule."];
      } else if (score <= 9) {
        level = "Mild Depression (5-9)";
        text = "You may be experiencing mild depressive symptoms. You might feel 'stuck' or 'low' periodically. While this may not restrict your functioning, it can rob you of joy.";
        recommendations = ["Establish a gentle daily routine.", "Get 15-20 minutes of sunlight daily.", "Practice 'Behavioral Activation'—doing things even if you don't feel like it, to jumpstart motivation.", "Reach out to a trusted friend."];
      } else if (score <= 14) {
        level = "Moderate Depression (10-14)";
        text = "Your symptoms indicate moderate depression. You may be struggling with motivation, sleep, or self-worth. Professional therapy (CBT) is very effective at this stage.";
        recommendations = ["Consider booking a therapy session to explore underlying causes.", "Challenge negative thought patterns (e.g., 'I am useless').", "Avoid isolation; force small social interactions.", "Focus on small, achievable goals (e.g., 'Make bed', 'Brush teeth')."];
      } else if (score <= 19) {
        level = "Moderately Severe Depression (15-19)";
        text = "These scores suggest moderately severe depression. It is highly advisable to seek professional help, as these symptoms can be debilitating without support.";
        recommendations = ["Please consult a mental health professional.", "Discuss treatment options (therapy/medication) with an expert.", "Ensure you have a support system around you.", "Be gentle with yourself; this is a health issue, not a weakness."];
      } else {
        level = "Severe Depression (20-27)";
        text = "Your score indicates severe depression. Immediate professional intervention is strongly recommended to ensure your safety and recovery.";
        recommendations = ["Seek immediate professional help.", "If you have thoughts of self-harm, contact a helpline immediately.", "Do not isolate yourself.", "Remember that depression is treatable, and recovery is possible."];
      }
      return { level, text, recommendations };
    }
  },
  burnout: {
    id: 'burnout',
    title: "Burnout & Exhaustion Scale",
    desc: "Assess your level of physical and emotional exhaustion related to work or study commitments.",
    icon: Battery,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    questions: [
      "Do you feel emotionally drained from your work/studies?",
      "Do you feel used up at the end of the day?",
      "Do you feel tired when you get up in the morning and have to face another day?",
      "Do you feel like your energy reserves are constantly empty?", 
      "Do you feel frustrated or cynical about your tasks?", 
      "Do you feel like you are achieving less despite working harder?",
      "Do you feel that every task requires a huge effort?",
      "Do you feel like you are at the end of your rope?"
    ],
    options: [
      { label: "Never", score: 0 },
      { label: "Rarely", score: 1 },
      { label: "Sometimes", score: 2 },
      { label: "Often", score: 3 },
      { label: "Always", score: 4 }
    ],
    getResult: (score) => {
      let level, text, recommendations;
      if (score <= 10) {
        level = "Low Burnout Risk";
        text = "You seem to be balancing your energy well. You have healthy boundaries between work/study and rest.";
        recommendations = ["Maintain your current work-life boundaries.", "Continue engaging in non-work hobbies.", "Take regular micro-breaks to sustain this momentum."];
      } else if (score <= 20) {
        level = "Moderate Burnout Risk";
        text = "You are showing clear signs of exhaustion. You are likely running on adrenaline and caffeine. It is time to pause before you hit a wall.";
        recommendations = ["Take a short vacation or mental health day immediately.", "Re-evaluate your workload; delegate or delay non-essential tasks.", "Prioritize sleep and nutrition over deadlines for a week.", "Learn to say 'no' to new commitments."];
      } else {
        level = "High Burnout Risk";
        text = "You appear to be experiencing significant burnout. This is a state of vital exhaustion that requires serious intervention. Pushing through will only cause damage.";
        recommendations = ["Seek professional support to help restructure your life.", "Discuss workload with supervisors or teachers.", "Dedicate time to 'radical rest' (complete disconnection).", "Disconnect from digital devices outside work hours."];
      }
      return { level, text, recommendations };
    }
  },
  sleep: {
    id: 'sleep',
    title: "Sleep Quality Check (AIS)",
    desc: "Assess your sleep patterns based on the Athens Insomnia Scale criteria.",
    icon: Moon,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    questions: [
      "Difficulty falling asleep (Sleep induction)?",
      "Awakening during the night?",
      "Waking up earlier than desired?",
      "Total sleep duration is insufficient?",
      "Overall quality of sleep is poor?",
      "Sense of well-being during the day is low?",
      "Functioning (physical/mental) during the day is impaired?",
      "Sleepiness during the day?"
    ],
    options: [
      { label: "No problem", score: 0 },
      { label: "Minor problem", score: 1 },
      { label: "Considerable problem", score: 2 },
      { label: "Serious problem", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations;
      if (score < 6) {
        level = "Good Sleep Quality";
        text = "Your sleep patterns appear healthy. You are likely getting restorative rest.";
        recommendations = ["Maintain your consistent sleep schedule.", "Avoid screens 1 hour before bed.", "Keep your bedroom cool and dark."];
      } else if (score <= 10) {
        level = "Mild Sleep Difficulties";
        text = "You may be facing some sleep disturbances that are affecting your energy. This is often due to lifestyle factors or stress.";
        recommendations = ["Create a relaxing 'wind-down' routine.", "Avoid caffeine after 2 PM.", "Don't force sleep; if awake, read a book until tired.", "Limit naps to 20 minutes."];
      } else {
        level = "Significant Insomnia Symptoms";
        text = "Your score suggests possible insomnia. Your sleep quality is likely affecting your mood, focus, and health.";
        recommendations = ["Consult a professional for Cognitive Behavioral Therapy for Insomnia (CBT-I).", "Strict sleep hygiene protocols are needed.", "Review medications or lifestyle factors.", "Use the bed only for sleep (stimulus control)."];
      }
      return { level, text, recommendations };
    }
  },
  career: {
    id: 'career',
    title: "Career Clarity & Readiness Check",
    desc: "Evaluate how clear, confident, and prepared you feel about your future career path.",
    icon: Compass,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    questions: [
      "I have a clear understanding of my strengths and weaknesses.",
      "I know exactly which career paths align with my personality.",
      "I am aware of the educational requirements for my desired career.",
      "I feel confident making decisions about my future stream/college.",
      "I have a backup plan if my primary career choice doesn't work out.",
      "I feel supported and guided in my career journey."
    ],
    options: [
      { label: "Disagree", score: 0 },
      { label: "Neutral / Unsure", score: 1 },
      { label: "Strongly Agree", score: 2 }
    ],
    getResult: (score) => {
      let level, text, recommendations;
      if (score <= 4) {
        level = "Low Clarity (Needs Exploration)";
        text = "You seem to be feeling uncertain or confused about your path. This is completely normal! It just means you need to gather more data about yourself and the market.";
        recommendations = ["Book a comprehensive Career Counselling session.", "Take a full Psychometric Aptitude Test.", "Focus on self-discovery: What activities make you lose track of time?", "Don't rush the decision."];
      } else if (score <= 8) {
        level = "Moderate Clarity (Developing)";
        text = "You have some ideas, but you might lack the specific details or confidence to commit. You are on the right track but need to fine-tune your plan.";
        recommendations = ["Research specific colleges and courses for your top 2 interests.", "Talk to professionals working in fields you are interested in.", "Identify the specific gap: Is it lack of information or fear of failure?", "A mentorship session could clarify the final steps."];
      } else {
        level = "High Clarity (Ready to Launch)";
        text = "You have a strong sense of direction and self-awareness. You are ready to execute your plan.";
        recommendations = ["Focus on execution: Entrance exam prep, applications, etc.", "Build a timeline/roadmap for the next 2 years.", "Find a mentor in your specific field to accelerate growth.", "Stay flexible; plans can evolve as you grow."];
      }
      return { level, text, recommendations };
    }
  }
};

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

const Tilt3D = ({ children, className = "" }) => {
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

const ParallaxBackground = () => {
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

// --- COMPONENT DEFINITIONS ---

const SplashScreen = () => (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-200/60 dark:bg-violet-900/30 rounded-full blur-[80px] md:blur-[100px]"
    />
    <div className="relative z-10 flex flex-col items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mb-8"
      >
         <img src={IMAGES.logo} alt="Lilac Minds Logo" className="w-40 h-40 object-contain drop-shadow-sm" width="160" height="160" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white tracking-tight text-center"
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
        className="text-slate-600 dark:text-slate-500 text-xs md:text-sm mt-6 font-medium tracking-[0.3em] uppercase text-center"
      >
        Psychology & Career Guidance
      </motion.p>
    </div>
  </motion.div>
);

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
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={() => onNavigate('contact', 'scroll')}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-violet-600 dark:hover:bg-violet-300 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-slate-800 dark:text-white p-1 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

const ResourcesView = ({ onNavigate }) => {
  const [activeTest, setActiveTest] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null); // Added state for article
  const [step, setStep] = useState('menu'); 
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

  const openArticle = (id) => {
    const article = BLOGS_DATA.find(b => b.id === id);
    setActiveArticle(article);
    setStep('article');
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('questions');
  };

  const handleAnswer = (questionIndex, score) => {
    const newAnswers = { ...answers, [questionIndex]: score };
    setAnswers(newAnswers);

    if (Object.keys(newAnswers).length === activeTest.questions.length) {
      calculateAndSendResult(newAnswers);
    }
  };

  const calculateAndSendResult = async (finalAnswers) => {
    setIsSubmitting(true);
    const totalScore = Object.values(finalAnswers).reduce((a, b) => a + b, 0);
    const res = activeTest.getResult(totalScore);
    setResult({ ...res, score: totalScore });

    try {
      await fetch("https://formspree.io/f/xeoylwwl", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `New ${activeTest.title} Result: ${user.name}`,
          user_name: user.name,
          user_email: user.email,
          user_phone: user.phone,
          user_city: user.city,
          test_name: activeTest.title,
          test_score: totalScore,
          result_level: res.level,
          result_text: res.text
        })
      });
    } catch (error) {
      console.error("Error sending result:", error);
    } finally {
      setIsSubmitting(false);
      setStep('result');
    }
  };

  const reset = () => {
    setStep('menu');
    setActiveTest(null);
    setActiveArticle(null);
    setAnswers({});
    setResult(null);
  };

  const helplines = [
    { name: "Vandrevala Foundation", number: "1860 266 2345", desc: "24x7 Mental Health Support" },
    { name: "iCall (TISS)", number: "022 2552 1111", desc: "Mon-Sat, 8 AM - 10 PM" },
    { name: "Kirun Helpline", number: "1800 599 0019", desc: "Govt. of India (24x7)" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <ParallaxBackground />
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
        
        {step === 'menu' && (
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Resources</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Curated tools, assessments, and helplines to support your mental wellness journey.
            </p>
          </div>
        )}

        {step === 'menu' && (
          <>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                  <span className="p-2 bg-violet-100 dark:bg-violet-900/40 rounded-lg text-violet-600 dark:text-violet-300"><FileText size={24} /></span>
                  Self-Assessments
                </h3>
                <div className="grid gap-4">
                  {Object.values(ASSESSMENT_DATA).map((test, i) => {
                    const IconComponent = test.icon;
                    return (
                      <Tilt3D key={i} className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-violet-100 dark:hover:border-violet-500/30 hover:shadow-lg transition-all cursor-pointer">
                        <div onClick={() => startTest(test.id)} className="w-full flex items-start gap-4">
                          <div className={`p-3 rounded-full ${test.bg} ${test.color}`}>
                            <IconComponent size={20} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">{test.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{test.desc}</p>
                            <span className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider flex items-center gap-1">
                              Start Assessment <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </Tilt3D>
                    );
                  })}
                </div>
              </div>

              {/* HELPLINES */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                  <span className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400"><PhoneCall size={24} /></span>
                  Crisis Helplines (India)
                </h3>
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="space-y-6">
                    {helplines.map((line, i) => (
                      <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0">
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{line.name}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{line.desc}</div>
                        </div>
                        <a href={`tel:${line.number.replace(/\s/g, '')}`} className="bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white transition-colors">
                          Call
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TOOLS FOR GROWTH SECTION */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Library size={24} /></span>
                Tools for Growth
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                 {BLOGS_DATA.map((blog, i) => (
                    <Tilt3D key={i} className="group p-0 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-violet-100 dark:hover:border-violet-500/30 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col h-full">
                       <div className="h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full" />
                       <div className="p-6 flex flex-col h-full" onClick={() => openArticle(blog.id)}>
                          <div className="flex items-center gap-2 mb-3">
                             <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{blog.tag}</span>
                             <span className="text-[10px] text-slate-400 flex items-center gap-1"><Coffee size={10} /> {blog.readTime}</span>
                          </div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight">{blog.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow leading-relaxed">{blog.desc}</p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:gap-3 transition-all pt-4 border-t border-slate-50 dark:border-slate-800">
                             Read Article <ArrowRight size={14} />
                          </div>
                       </div>
                    </Tilt3D>
                 ))}
              </div>
            </div>
          </>
        )}

        {/* ARTICLE READER */}
        {step === 'article' && activeArticle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/10 max-w-3xl mx-auto"
          >
            <button onClick={reset} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mb-8 flex items-center gap-2 text-sm font-bold">
              <ArrowRight className="rotate-180" size={16} /> Back to Resources
            </button>
            
            <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              {activeArticle.tag}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {activeArticle.title}
            </h1>
            
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-loose">
              {activeArticle.content}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Was this helpful?</h4>
              <button 
                onClick={() => onNavigate('contact')}
                className="text-violet-600 dark:text-violet-400 font-bold hover:underline flex items-center gap-2"
              >
                Book a consultation to discuss this further <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* DETAILS FORM */}
        {step === 'form' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/10 max-w-2xl mx-auto"
          >
            <button onClick={reset} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mb-6 flex items-center gap-2 text-sm font-bold">
              <ArrowRight className="rotate-180" size={16} /> Back to Resources
            </button>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{activeTest.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Please provide your details to start the assessment.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Full Name</label>
                <input required type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" 
                  value={user.name} onChange={e => setUser({...user, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Mobile Number</label>
                  <input required type="tel" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" 
                    value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">City</label>
                  <input required type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" 
                    value={user.city} onChange={e => setUser({...user, city: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Email Address</label>
                <input required type="email" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" 
                  value={user.email} onChange={e => setUser({...user, email: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full bg-violet-600 text-white font-bold py-4 rounded-xl hover:bg-violet-700 transition-colors shadow-lg mt-4">
                Start Assessment
              </button>
            </form>
          </motion.div>
        )}

        {/* QUESTIONS */}
        {step === 'questions' && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{activeTest.title}</h2>
              <span className="text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-3 py-1 rounded-full">
                {Object.keys(answers).length} / {activeTest.questions.length}
              </span>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-violet-600 w-12 h-12 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 font-medium">Analyzing results and generating report...</p>
              </div>
            ) : (
              <div className="space-y-12">
                {activeTest.questions.map((q, qIdx) => (
                  <motion.div 
                    key={qIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qIdx * 0.1 }}
                    className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border ${answers[qIdx] !== undefined ? 'border-violet-500 ring-1 ring-violet-500' : 'border-slate-200 dark:border-slate-700'} shadow-sm`}
                  >
                    <p className="text-lg font-medium text-slate-800 dark:text-white mb-4">{qIdx + 1}. {q}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {activeTest.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswer(qIdx, opt.score)}
                          className={`p-3 rounded-xl text-sm font-medium transition-all ${
                            answers[qIdx] === opt.score 
                              ? 'bg-violet-600 text-white shadow-md' 
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
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

        {/* RESULTS */}
        {step === 'result' && result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-white/10 max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600 dark:text-violet-400">
              <Award size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Assessment Complete</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Thank you, {user.name}. Here are your results:</p>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl mb-8 border border-slate-200 dark:border-slate-700 text-left">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Result Indicator</div>
              <div className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-3">{result.level}</div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{result.text}</p>
              
              {result.recommendations && (
                <div>
                   <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Recommendations</div>
                   <ul className="space-y-3">
                     {result.recommendations.map((rec, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                         <CheckCircle size={18} className="text-violet-500 shrink-0 mt-0.5" />
                         <span>{rec}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              )}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/40 p-4 rounded-xl flex items-start gap-3 text-left mb-8">
              <CheckCircle className="text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> This is a screening tool, not a medical diagnosis. The results are based on your responses and should be discussed with a professional.
              </p>
            </div>

            <button 
              onClick={() => onNavigate('contact', 'scroll')}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl hover:bg-violet-600 dark:hover:bg-violet-200 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Book a Consultation to Discuss <ArrowRight size={18} />
            </button>
            <button onClick={reset} className="mt-6 text-slate-400 text-sm hover:text-slate-600 dark:hover:text-slate-200 underline">
              Take another test
            </button>
          </motion.div>
        )}

      </div>
    </div>
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
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
    { title: "Personal Counselling", desc: "Navigating anxiety, stress, relationships, and emotional well-being. Available online & offline.", icon: <Brain size={24}/>, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
    { title: "Career Counselling", desc: "Scientific aptitude testing and personalized guidance to find your true path.", icon: <MapPin size={24}/>, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    { title: "Student Mentorship", desc: "Supporting students with exam stress, focus, and academic pressure.", icon: <BookOpen size={24}/>, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300" },
    { title: "Psychometric Assessments", desc: "Standardized assessments for personality, IQ, and career suitability.", icon: <FileText size={24}/>, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300" },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">How we help.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Simple, effective support for whatever you're facing. We tailor our approach to your unique needs using Clinical Psychotherapy and Aptitude Testing.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Tilt3D key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 group cursor-default">
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
                  alt="Clinic Main View" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
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
                      alt={`Clinic View ${i+1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
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
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Common Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="font-bold text-slate-800 dark:text-white text-lg">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-violet-600 dark:text-violet-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700"
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
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
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
            >
              <input type="hidden" name="appointmentType" value={appointmentType} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Name</label>
                  <input required name="name" type="text" placeholder="Your Name" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Phone</label>
                  <input required name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Email</label>
                <input required name="email" type="email" placeholder="your@email.com" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Service</label>
                <select 
                  name="service" 
                  defaultValue=""
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-600 dark:text-slate-300 focus:bg-white dark:focus:bg-slate-800 transition-all"
                >
                  <option value="" disabled>What do you need help with?</option>
                  <option>Personal Counselling</option>
                  <option>Career Counselling</option>
                  <option>Student Mentorship</option>
                  <option>Psychometric Assessment</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase ml-1">Message</label>
                <textarea name="message" rows="3" placeholder="Anything else you'd like to share?" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white focus:bg-white dark:focus:bg-slate-800 transition-all"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl hover:bg-violet-600 dark:hover:bg-violet-300 transition-colors shadow-lg mt-2 text-lg">
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
           <a 
            href="https://wa.me/918200711499"
            target="_blank"
            rel="noopener noreferrer"
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
           <div className="w-full h-full opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
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
    
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
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
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="dark:bg-slate-950 transition-colors duration-300"
          >
            <Navbar currentView={view} onNavigate={handleNavigation} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            {view === 'home' ? (
              <MainContent key="home" onNavigate={handleNavigation} />
            ) : (
              <ResourcesView key="resources" onNavigate={handleNavigation} />
            )}
            <FloatingWhatsApp />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
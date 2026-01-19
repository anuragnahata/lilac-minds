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
    title: "Comprehensive Anxiety Assessment",
    desc: "An in-depth screening tool to evaluate the severity and impact of anxiety symptoms across physical, emotional, and behavioral dimensions over the past 2 weeks.",
    icon: Wind,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    questions: [
      "Over the past 2 weeks, how often have you felt nervous, anxious, or on edge without a clear reason?",
      "How often have you found yourself unable to stop or control worrying, even when you tried?",
      "How frequently have you worried excessively about multiple different things (work, health, family, future)?",
      "How often have you experienced difficulty relaxing, even during leisure time or weekends?",
      "How often have you felt so restless that it was hard to sit still or focus on one task?",
      "How frequently have you become easily annoyed, irritable, or short-tempered with others?",
      "How often have you felt a sense of dread or fear, as if something awful might happen?",
      "How often have you experienced physical symptoms like racing heart, sweating, trembling, or shortness of breath due to anxiety?",
      "How frequently has anxiety interfered with your ability to concentrate at work, studies, or daily tasks?",
      "How often have you avoided social situations, responsibilities, or activities due to anxiety or worry?"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations, insights, affectedAreas;
      if (score <= 7) {
        level = "Minimal Anxiety";
        text = "Your responses indicate minimal anxiety symptoms. You appear to be managing daily stressors effectively and maintaining emotional equilibrium. While occasional nervousness is a normal part of life, it does not seem to be significantly impacting your functioning or well-being.";
        insights = "Your nervous system appears well-regulated. You likely have effective coping mechanisms in place and good stress tolerance. This baseline suggests healthy emotional resilience.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue practicing your current self-care and stress management routines",
          "Maintain regular physical exercise (at least 30 minutes, 3-4 times weekly) to support nervous system health",
          "Practice preventive mindfulness or meditation (even 10 minutes daily) to strengthen emotional resilience",
          "Ensure you maintain a consistent sleep schedule of 7-8 hours",
          "Stay connected with your support network—social bonds are protective against anxiety"
        ];
      } else if (score <= 14) {
        level = "Mild to Moderate Anxiety";
        text = "Your score suggests you are experiencing mild to moderate anxiety symptoms. You may be feeling more stressed, worried, or on edge than usual. While you are likely still functioning, anxiety may be starting to affect your quality of life, concentration, or relationships.";
        insights = "At this level, your body's stress response is activating more frequently than ideal. You may notice tension in your body, difficulty switching off your mind, or feeling drained by the end of the day. This is your mind signaling that it needs more support.";
        affectedAreas = ["Concentration and focus", "Sleep quality", "Physical tension", "Emotional regulation"];
        recommendations = [
          "Begin monitoring your anxiety triggers—keep a brief daily log of situations that increase worry",
          "Practice 'Box Breathing' technique: inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds—repeat 4 times",
          "Reduce caffeine intake, especially after 12 PM, as it can amplify anxiety symptoms",
          "Schedule daily 'worry time' (15 minutes) to contain anxious thoughts rather than letting them intrude all day",
          "Consider booking a consultation to learn personalized anxiety management techniques",
          "Engage in regular physical activity—it metabolizes stress hormones like cortisol and adrenaline"
        ];
      } else if (score <= 21) {
        level = "Moderate to Severe Anxiety";
        text = "Your responses indicate moderate to severe anxiety symptoms. Worry and nervousness are likely interfering significantly with your daily functioning, work performance, relationships, and overall well-being. You may be experiencing both psychological and physical manifestations of anxiety.";
        insights = "At this level, your nervous system is in a heightened state of alertness. The 'fight or flight' response may be activating frequently, leading to exhaustion, difficulty concentrating, and physical symptoms. Your brain is perceiving threats even in non-threatening situations, which is exhausting and unsustainable.";
        affectedAreas = ["Work/academic performance", "Relationships and social life", "Physical health (sleep, appetite, energy)", "Decision-making ability", "Overall quality of life"];
        recommendations = [
          "We strongly recommend scheduling a professional consultation—this level of anxiety responds very well to evidence-based therapy (CBT, ACT)",
          "Practice Progressive Muscle Relaxation (PMR) daily—systematically tensing and releasing muscle groups to reduce physical tension",
          "Break overwhelming tasks into very small, manageable steps to reduce the sense of being overwhelmed",
          "Limit exposure to anxiety-provoking content (news, social media) especially before bedtime",
          "Prioritize sleep hygiene: consistent bedtime, no screens 1 hour before bed, cool dark room",
          "Lean on your support system—share your struggles with trusted people; isolation worsens anxiety",
          "Consider whether workplace or life circumstances need to be addressed as contributing factors"
        ];
      } else {
        level = "Severe Anxiety";
        text = "Your score indicates severe anxiety symptoms that are likely having a profound impact on your daily life, physical health, relationships, and ability to function. You may be experiencing panic symptoms, constant dread, or finding it very difficult to engage in normal activities. Please know that severe anxiety is highly treatable with proper professional support.";
        insights = "At this severity level, your nervous system is in chronic overdrive. The constant activation of stress hormones can affect your physical health, immune system, and cognitive functioning. You may feel trapped in a cycle of worry and fear. This is not your fault—anxiety is a medical condition, not a character flaw—and with the right help, significant improvement is absolutely possible.";
        affectedAreas = ["All areas of daily functioning", "Physical health and immune system", "Work/academic capability", "Personal relationships", "Self-esteem and confidence", "Ability to enjoy life"];
        recommendations = [
          "Please seek professional help as soon as possible—this is urgent but very treatable",
          "If you experience panic attacks, remember they are temporary and will pass; focus on slow, deep breathing",
          "Practice grounding techniques when overwhelmed: name 5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste",
          "Reach out to your support system—do not face this alone; isolation magnifies anxiety",
          "Avoid making major life decisions while in this state; your judgment may be affected by anxiety",
          "Be compassionate with yourself—anxiety is a health condition, and seeking help is a sign of strength",
          "Consider whether a combination of therapy and medication might be appropriate (discuss with a professional)"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  depression: {
    id: 'depression',
    title: "Depression & Mood Assessment",
    desc: "A comprehensive evaluation based on the PHQ-9 to assess the presence and severity of depressive symptoms, including emotional, cognitive, and physical indicators over the past 2 weeks.",
    icon: Cloud,
    color: "text-gray-600 dark:text-gray-400",
    bg: "bg-gray-50 dark:bg-gray-800/50",
    questions: [
      "Over the past 2 weeks, how often have you had little interest or pleasure in doing things you usually enjoy?",
      "How often have you felt down, depressed, hopeless, or emotionally numb?",
      "How frequently have you had trouble falling asleep, staying asleep, or sleeping too much?",
      "How often have you felt tired, fatigued, or had little energy even after rest?",
      "How frequently have you experienced changes in appetite—either eating too little or overeating for comfort?",
      "How often have you felt bad about yourself, felt like a failure, or felt you have let yourself or others down?",
      "How frequently have you had trouble concentrating on things like reading, watching TV, or completing tasks?",
      "How often have you noticed yourself moving or speaking more slowly than usual, or the opposite—feeling agitated and restless?",
      "How often have you had thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
      "How frequently have you felt disconnected from others or withdrawn from social activities?",
      "How often have you felt like things will never get better or that your situation is hopeless?"
    ],
    options: [
      { label: "Not at all", score: 0 },
      { label: "Several days", score: 1 },
      { label: "More than half the days", score: 2 },
      { label: "Nearly every day", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations, insights, affectedAreas;
      if (score <= 5) {
        level = "Minimal Depression";
        text = "Your responses suggest minimal or no depressive symptoms. You appear to be maintaining a healthy emotional baseline with good energy, motivation, and engagement in life. While everyone has occasional low days, they do not seem to be affecting your overall functioning.";
        insights = "Your emotional regulation appears stable. You are likely experiencing normal fluctuations in mood that do not persist or significantly impact your daily life. This suggests good psychological resilience and healthy coping mechanisms.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue engaging in activities and hobbies that bring you joy and meaning",
          "Maintain your social connections—relationships are protective against depression",
          "Keep a consistent sleep schedule; sleep is foundational to emotional health",
          "Regular physical exercise (even walking) helps maintain mood stability",
          "Practice gratitude or journaling to reinforce positive thought patterns",
          "Stay attuned to any changes in your mood and address them early"
        ];
      } else if (score <= 11) {
        level = "Mild to Moderate Depression";
        text = "Your score indicates mild to moderate depressive symptoms. You may be feeling persistently low, lacking motivation, or experiencing less joy than usual. While you may still be functioning, life might feel heavier, and tasks that once felt easy may now require more effort.";
        insights = "At this level, your brain's reward and motivation systems may be underactive. You might notice a loss of interest in things you used to enjoy (anhedonia), difficulty getting started on tasks, or a persistent feeling of emptiness or sadness. This is not laziness—it's your brain chemistry signaling it needs support.";
        affectedAreas = ["Motivation and drive", "Energy levels", "Sleep patterns", "Social engagement", "Self-esteem", "Concentration"];
        recommendations = [
          "Practice 'Behavioral Activation'—commit to doing small activities even when you don't feel like it; action often precedes motivation",
          "Get 15-20 minutes of natural sunlight daily, preferably in the morning",
          "Establish a gentle daily routine with small, achievable goals (make bed, take a shower, take a short walk)",
          "Reach out to a trusted friend or family member—sharing your feelings can provide relief",
          "Limit alcohol consumption, which is a depressant and worsens mood over time",
          "Consider booking a therapy session to explore underlying causes and learn evidence-based techniques",
          "Monitor your sleep—both too little and too much sleep can worsen depression"
        ];
      } else if (score <= 17) {
        level = "Moderate Depression";
        text = "Your responses indicate moderate depression. You are likely struggling with persistent low mood, reduced motivation, changes in sleep or appetite, difficulty concentrating, and possibly negative thoughts about yourself. These symptoms are probably affecting your work, relationships, and quality of life.";
        insights = "At this level, depression is likely impacting multiple areas of your life. Your brain's neurotransmitter systems (serotonin, dopamine, norepinephrine) may be imbalanced, affecting mood, motivation, and cognitive function. Negative thought patterns may be reinforcing the depressive cycle. The good news is that moderate depression responds very well to professional treatment.";
        affectedAreas = ["Work/academic performance", "Relationships", "Physical health", "Self-worth and confidence", "Decision-making", "Ability to experience pleasure", "Future outlook"];
        recommendations = [
          "Professional support is strongly recommended—Cognitive Behavioral Therapy (CBT) is highly effective for depression",
          "Challenge negative automatic thoughts: when you think 'I'm worthless,' ask 'What evidence supports or contradicts this?'",
          "Avoid isolation—force small social interactions even when you want to withdraw",
          "Focus on small, achievable daily goals rather than overwhelming yourself with large tasks",
          "Physical exercise has antidepressant effects—even a 20-minute walk can help",
          "Practice self-compassion; speak to yourself as you would to a dear friend going through a hard time",
          "Consider discussing your symptoms with a doctor to evaluate if medication might be helpful alongside therapy",
          "Avoid making major life decisions while depressed; your thinking may be colored by the condition"
        ];
      } else if (score <= 23) {
        level = "Moderately Severe Depression";
        text = "Your score indicates moderately severe depression. You are likely experiencing significant impairment in your daily functioning, persistent feelings of hopelessness or worthlessness, and symptoms that feel overwhelming. Basic tasks may feel insurmountable, and you may be isolating from others.";
        insights = "At this severity, depression has likely become a significant barrier to normal life. Your brain chemistry is substantially affected, making it hard to see hope or feel pleasure. Negative thinking patterns have likely become entrenched. This level of depression can feel all-consuming, but it is very treatable with proper professional intervention. Many people recover fully from depression at this level with the right support.";
        affectedAreas = ["All major life domains", "Physical health and self-care", "Relationships and social life", "Work/academic capability", "Self-perception and identity", "Hope and future planning", "Basic daily functioning"];
        recommendations = [
          "Please prioritize seeking professional mental health support—this level requires expert intervention",
          "Consider discussing treatment options with a psychiatrist; a combination of therapy and medication is often most effective at this level",
          "Ensure you have a safety plan if thoughts of self-harm arise—share this with someone you trust",
          "Focus on basic self-care: eating regular meals, maintaining hygiene, getting some daylight",
          "Accept help from others—let people support you during this difficult time",
          "Remember: depression lies. The hopelessness you feel is a symptom, not reality. Things can and do get better.",
          "Be extremely gentle with yourself; you are fighting a serious health condition"
        ];
      } else {
        level = "Severe Depression";
        text = "Your score indicates severe depression requiring immediate professional attention. You are likely experiencing profound hopelessness, inability to function normally, and possibly thoughts of self-harm. Please know that even severe depression is treatable, and reaching out for help is the most important step you can take.";
        insights = "At this level, depression has profoundly affected your brain's functioning, making everything feel impossible. The hopelessness and worthlessness you may feel are symptoms of the illness, not reality. Many people recover from severe depression with proper treatment. You are not broken—you are ill and need medical attention, just as you would for any serious physical condition.";
        affectedAreas = ["Complete daily functioning", "Physical safety and well-being", "All relationships", "Ability to work or study", "Self-care", "Hope and will to continue", "Physical health"];
        recommendations = [
          "Please seek immediate professional help—contact a mental health professional, your doctor, or a crisis helpline today",
          "If you have thoughts of harming yourself, please reach out to a crisis helpline immediately (listed on this page)",
          "Do not isolate—stay connected with at least one trusted person who knows what you're going through",
          "Remove access to any means of self-harm from your immediate environment",
          "Focus only on getting through today—one hour, one moment at a time",
          "Intensive treatment (therapy + medication) is typically recommended at this level and can bring significant relief",
          "Remember: This feeling will not last forever. Depression is a liar. Recovery is possible and happens every day."
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  burnout: {
    id: 'burnout',
    title: "Burnout & Exhaustion Assessment",
    desc: "A comprehensive evaluation of physical, emotional, and mental exhaustion related to work, studies, or life demands, assessing all three dimensions of burnout.",
    icon: Battery,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    questions: [
      "How often do you feel emotionally drained and depleted by your work or responsibilities?",
      "How frequently do you feel completely used up and exhausted at the end of a typical day?",
      "How often do you dread getting up in the morning to face another day of work or study?",
      "How frequently do you feel that your energy reserves are constantly empty, no matter how much you rest?",
      "How often do you feel frustrated, cynical, or detached from your work or studies?",
      "How frequently do you feel like you are achieving less despite putting in more effort?",
      "How often does every task—even small ones—feel like it requires enormous effort?",
      "How often do you feel like you are at the end of your rope or have nothing left to give?",
      "How frequently do you find yourself unable to disconnect from work thoughts during personal time?",
      "How often do you neglect your personal needs (meals, sleep, exercise, relationships) because of work demands?",
      "How frequently do you feel that your work has lost meaning or purpose?",
      "How often do you experience physical symptoms (headaches, muscle tension, stomach issues) that you attribute to stress?"
    ],
    options: [
      { label: "Never", score: 0 },
      { label: "Rarely", score: 1 },
      { label: "Sometimes", score: 2 },
      { label: "Often", score: 3 },
      { label: "Always", score: 4 }
    ],
    getResult: (score) => {
      let level, text, recommendations, insights, affectedAreas;
      if (score <= 14) {
        level = "Low Burnout Risk";
        text = "Your responses suggest you are managing your energy and work-life balance effectively. You appear to have healthy boundaries and are not currently showing significant signs of burnout. This is a protective state worth maintaining.";
        insights = "You seem to have established good boundaries between work and personal life. Your energy expenditure and recovery are in healthy balance. This suggests effective stress management skills and an awareness of your own needs and limits.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue maintaining your current work-life boundaries—they are serving you well",
          "Keep engaging in restorative activities and hobbies outside of work",
          "Take regular micro-breaks during work to sustain your energy throughout the day",
          "Stay connected with supportive relationships that replenish rather than drain you",
          "Periodically reassess your workload and adjust before stress accumulates",
          "Maintain consistent sleep, exercise, and nutrition habits"
        ];
      } else if (score <= 28) {
        level = "Moderate Burnout Risk";
        text = "Your score indicates moderate burnout risk. You are showing clear signs of exhaustion and may be running on depleted reserves. While you are still functioning, you are likely relying on willpower, caffeine, or adrenaline rather than genuine energy. This is a warning sign that demands attention.";
        insights = "At this level, your body and mind are signaling that the current pace is unsustainable. You may be 'pushing through' but at a cost to your health, relationships, and long-term performance. Chronic stress hormones (cortisol) may be elevated, affecting your immune system, sleep quality, and emotional regulation. The longer this continues, the harder recovery becomes.";
        affectedAreas = ["Physical energy and stamina", "Sleep quality", "Emotional resilience", "Work satisfaction", "Personal relationships", "Physical health", "Cognitive sharpness"];
        recommendations = [
          "Take a short break or mental health day as soon as possible—this is not optional but necessary",
          "Re-evaluate your workload: identify tasks that can be delegated, delayed, or eliminated",
          "Prioritize sleep and nutrition over deadlines for the next 1-2 weeks; you cannot perform from an empty tank",
          "Practice saying 'no' to new commitments until your current load is manageable",
          "Schedule non-negotiable recovery time: exercise, time with loved ones, hobbies",
          "Consider whether systemic factors (unrealistic expectations, toxic culture) are contributing",
          "Book a consultation to learn personalized stress management and boundary-setting strategies"
        ];
      } else {
        level = "High Burnout Risk";
        text = "Your responses indicate significant burnout. You are experiencing substantial physical, emotional, and mental exhaustion that is likely affecting all areas of your life. This is a state of vital depletion that requires immediate and serious intervention. Continuing to push through will cause lasting damage to your health and well-being.";
        insights = "At this level, you have likely been running on empty for too long. Your body's stress response system may be dysregulated, leading to chronic fatigue, cognitive difficulties, emotional numbness or volatility, and physical health problems. Burnout at this level is associated with increased risk of cardiovascular disease, depression, and immune dysfunction. Recovery requires significant changes, not just a vacation.";
        affectedAreas = ["Physical health and immunity", "Mental health (risk of depression/anxiety)", "Cognitive function and memory", "All relationships", "Job performance and satisfaction", "Personal identity and sense of purpose", "Overall quality of life"];
        recommendations = [
          "Please treat this as a health crisis—seek professional support from a therapist or counselor",
          "Have an honest conversation with your supervisor, teacher, or family about reducing your load immediately",
          "Consider whether medical leave or a significant break is necessary for recovery",
          "Practice 'radical rest': complete disconnection from work, digital devices, and obligations for defined periods",
          "Prioritize basic self-care: regular meals, adequate sleep, gentle movement, time outdoors",
          "Examine whether your current work or life situation is sustainable long-term or requires fundamental change",
          "Reconnect with your core values and what gives your life meaning beyond productivity",
          "Be patient—recovery from severe burnout takes months, not days; rushing it will backfire"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  sleep: {
    id: 'sleep',
    title: "Sleep Quality & Insomnia Assessment",
    desc: "A thorough evaluation of your sleep patterns, quality, and daytime functioning based on clinical insomnia criteria over the past month.",
    icon: Moon,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    questions: [
      "How much difficulty have you had falling asleep within 30 minutes of going to bed?",
      "How often do you wake up during the night and have trouble falling back asleep?",
      "How frequently do you wake up much earlier than you intended and cannot go back to sleep?",
      "How often do you feel that your total sleep time is insufficient for your needs?",
      "How would you rate your overall quality of sleep (restfulness, depth)?",
      "How much has poor sleep affected your sense of well-being, mood, or energy during the day?",
      "How much has poor sleep impaired your ability to function mentally (concentration, memory, decision-making)?",
      "How often do you experience excessive sleepiness or fatigue during the day?",
      "How frequently do you rely on sleep aids (medications, alcohol, supplements) to fall asleep?",
      "How much anxiety or dread do you experience about going to bed or your ability to sleep?"
    ],
    options: [
      { label: "No problem", score: 0 },
      { label: "Minor problem", score: 1 },
      { label: "Moderate problem", score: 2 },
      { label: "Serious problem", score: 3 }
    ],
    getResult: (score) => {
      let level, text, recommendations, insights, affectedAreas;
      if (score <= 7) {
        level = "Good Sleep Quality";
        text = "Your responses indicate healthy sleep patterns. You appear to be getting restorative sleep that supports your daytime functioning, mood, and overall health. Good sleep is foundational to mental and physical well-being, and you are on the right track.";
        insights = "Your sleep architecture appears healthy. You are likely cycling through the appropriate sleep stages (light, deep, REM) effectively, allowing your brain and body to restore, consolidate memories, and regulate emotions. This is protective for both your mental and physical health.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Maintain your consistent sleep schedule—going to bed and waking at the same time daily",
          "Continue avoiding screens for at least 30-60 minutes before bed",
          "Keep your bedroom environment optimized: cool (18-20°C), dark, and quiet",
          "Limit caffeine intake, especially after early afternoon",
          "Continue any relaxing bedtime routines that work for you",
          "Stay physically active during the day to promote deeper sleep at night"
        ];
      } else if (score <= 14) {
        level = "Mild to Moderate Sleep Difficulties";
        text = "Your score suggests you are experiencing some sleep disturbances that are affecting your rest quality and daytime functioning. While you may still be getting some sleep, it is likely not as restorative as your body needs. This is often related to stress, lifestyle factors, or sleep habits that can be improved.";
        insights = "At this level, your sleep quality is compromised, which affects your cognitive function, emotional regulation, and physical recovery during the day. You may notice difficulty concentrating, irritability, or increased stress sensitivity. Poor sleep can become a self-reinforcing cycle as worry about sleep further disrupts it.";
        affectedAreas = ["Daytime energy and alertness", "Concentration and memory", "Mood stability", "Stress resilience", "Physical health", "Work/academic performance"];
        recommendations = [
          "Establish a consistent sleep-wake schedule, even on weekends (within 1 hour)",
          "Create a relaxing 'wind-down' routine 30-60 minutes before bed (dim lights, calm activities)",
          "Avoid caffeine after 12-2 PM and limit alcohol (it fragments sleep)",
          "If you can't fall asleep within 20 minutes, get up and do something calm until sleepy—don't force it",
          "Limit daytime naps to 20 minutes maximum, and not after 3 PM",
          "Reduce screen exposure before bed; blue light suppresses melatonin",
          "Get bright light exposure in the morning to regulate your circadian rhythm",
          "Consider a consultation to explore whether anxiety, stress, or habits are underlying causes"
        ];
      } else {
        level = "Significant Sleep Problems";
        text = "Your responses indicate significant sleep difficulties that are likely having a substantial impact on your daily functioning, mood, and health. You may be experiencing insomnia symptoms that require professional attention. Chronic sleep deprivation affects every system in your body and mind.";
        insights = "At this severity, your sleep problems are likely chronic and affecting your physical health (immune function, cardiovascular risk, weight regulation), mental health (anxiety, depression risk), and cognitive abilities (memory consolidation, decision-making, reaction time). Sleep deprivation of this level is comparable to being cognitively impaired and significantly increases health risks.";
        affectedAreas = ["All daytime functioning", "Mental health (anxiety, depression)", "Physical health and immunity", "Cognitive performance", "Emotional regulation", "Relationships", "Work/academic capability", "Quality of life"];
        recommendations = [
          "Consult a professional for Cognitive Behavioral Therapy for Insomnia (CBT-I)—it is the gold standard treatment and more effective long-term than medication",
          "Get a medical evaluation to rule out underlying conditions (sleep apnea, restless leg syndrome, thyroid issues)",
          "Implement strict sleep hygiene: consistent schedule, optimized environment, no screens before bed",
          "Practice stimulus control: use the bed only for sleep (and intimacy), not for work, TV, or scrolling",
          "Review all medications, supplements, and substances for sleep-interfering effects",
          "Address any underlying anxiety or depression that may be contributing to insomnia",
          "Avoid relying on alcohol or over-the-counter sleep aids, which worsen sleep quality long-term",
          "Consider sleep restriction therapy under professional guidance to consolidate sleep"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  career: {
    id: 'career',
    title: "Career Clarity & Direction Assessment",
    desc: "A comprehensive evaluation of your career readiness, self-awareness, decision-making confidence, and preparedness for your professional future.",
    icon: Compass,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    questions: [
      "I have a clear understanding of my core strengths, natural abilities, and areas for growth.",
      "I can identify my personal values and know what matters most to me in a career (e.g., creativity, stability, helping others, income).",
      "I have a good understanding of my personality type and how it affects my work preferences and environment needs.",
      "I know which specific career paths or fields genuinely interest me and align with my abilities.",
      "I am aware of the educational qualifications, skills, and experience required for my desired career.",
      "I feel confident in my ability to make important decisions about my academic stream, college, or career direction.",
      "I have researched multiple career options and understand the pros and cons of each.",
      "I have a backup plan or alternative options if my primary career choice doesn't work out.",
      "I feel supported and guided in my career journey by family, mentors, or counselors.",
      "I have a realistic understanding of the job market, industry trends, and future opportunities in my areas of interest.",
      "I have set specific short-term and long-term career goals with actionable steps.",
      "I feel emotionally ready and confident to take the next step in my career or educational path."
    ],
    options: [
      { label: "Strongly Disagree", score: 0 },
      { label: "Disagree", score: 1 },
      { label: "Neutral / Unsure", score: 2 },
      { label: "Agree", score: 3 },
      { label: "Strongly Agree", score: 4 }
    ],
    getResult: (score) => {
      let level, text, recommendations, insights, affectedAreas;
      if (score <= 15) {
        level = "Low Career Clarity";
        text = "Your responses indicate that you are currently uncertain or confused about your career direction. This is completely normal, especially during transitions, and simply means you need more self-exploration and information gathering. The good news is that clarity can be developed systematically.";
        insights = "Career confusion often stems from insufficient self-knowledge (not knowing your strengths, values, and interests deeply) or insufficient market knowledge (not knowing what options exist and what they entail). Sometimes it's also influenced by external pressure (family expectations, peer comparison) that conflicts with your authentic preferences. Clarity comes from structured exploration, not just waiting for inspiration.";
        affectedAreas = ["Decision-making confidence", "Academic/career planning", "Stress and anxiety about the future", "Sense of direction and purpose", "Self-confidence"];
        recommendations = [
          "Book a comprehensive Career Counselling session to gain personalized guidance",
          "Complete a full Psychometric Assessment (aptitude, personality, interest) to understand yourself scientifically",
          "Engage in self-reflection: What activities make you lose track of time? What topics do you voluntarily read about?",
          "Research at least 5-10 different career paths that might interest you—learn what they actually involve day-to-day",
          "Talk to professionals in various fields to understand real-world job realities",
          "Don't rush the decision—better to invest time now in clarity than to change direction later",
          "Separate your own desires from external expectations—what do YOU want?",
          "Keep a career exploration journal to track insights and ideas"
        ];
      } else if (score <= 30) {
        level = "Moderate Career Clarity";
        text = "Your score suggests you have some direction but may lack specific details, complete confidence, or a fully developed plan. You are on the right track but need to fine-tune your understanding and solidify your decisions.";
        insights = "At this level, you likely have a general sense of your interests and some career ideas, but you may be lacking specific information about paths, requirements, or market realities. Alternatively, you may know what you want but feel uncertain about your ability to achieve it or have conflicting options. The gap might be informational, emotional (fear of failure or commitment), or practical (unclear next steps).";
        affectedAreas = ["Commitment to a specific path", "Action planning", "Confidence in decisions", "Preparation for next steps"];
        recommendations = [
          "Narrow down your interests to your top 2-3 career options and research each in depth",
          "Create a detailed comparison: requirements, lifestyle, income, growth prospects, alignment with your values",
          "Conduct informational interviews with professionals in your fields of interest",
          "Identify your specific gap: Is it lack of information, fear of commitment, or external conflict?",
          "A focused career mentorship session could help clarify the final steps and build confidence",
          "Start preparing for the practical requirements: entrance exams, skill-building, applications",
          "Set 3-6 month goals related to career exploration and preparation",
          "Build a network in your areas of interest through LinkedIn, events, or mentorship programs"
        ];
      } else {
        level = "High Career Clarity";
        text = "Excellent! Your responses indicate a strong sense of self-awareness, clear career direction, and readiness to take action. You have done the work of self-exploration and research, and you are well-positioned to move forward confidently.";
        insights = "You have achieved a level of career clarity that many struggle to reach. You appear to understand your strengths, values, and interests, have identified paths that align with them, and have a realistic plan. This clarity will serve you well in making decisions, staying motivated, and navigating challenges. The next phase is about execution and continuous refinement as you grow.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Focus on execution: entrance exam preparation, applications, skill development, and networking",
          "Build a detailed 1-2 year roadmap with milestones and deadlines",
          "Seek a mentor in your specific field to accelerate your growth and provide guidance",
          "Start building relevant experience through internships, projects, or volunteer work",
          "Stay flexible—career paths evolve, and you will continue to learn and grow",
          "Help others who are struggling with career confusion; teaching reinforces your own clarity",
          "Celebrate your progress—you have done significant work to reach this point of clarity"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
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

// --- MENTAL HEALTH ILLUSTRATIONS ---
let illustrationCounter = 0;
const getUniqueId = (prefix) => `${prefix}_${++illustrationCounter}`;

const MindfulnessIllustration = ({ className = "" }) => {
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

const GrowthPlantIllustration = ({ className = "" }) => {
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

const BrainWellnessIllustration = ({ className = "" }) => {
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

const HeartMindIllustration = ({ className = "" }) => {
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
    setStep('questions');
    setAnswers({});
    setResult(null);
    setUser({ name: '', phone: '', email: '', city: '' });
  };

  const openArticle = (id) => {
    const article = BLOGS_DATA.find(b => b.id === id);
    setActiveArticle(article);
    setStep('article');
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
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

  const handleAnswer = (questionIndex, score) => {
    const newAnswers = { ...answers, [questionIndex]: score };
    setAnswers(newAnswers);

    if (Object.keys(newAnswers).length === activeTest.questions.length) {
      setTimeout(() => setStep('form'), 500);
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
    <div className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-950 dark:via-violet-950/20 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      <ParallaxBackground />
      <div className="absolute top-32 right-10 opacity-15 dark:opacity-10">
        <BrainWellnessIllustration className="w-48 h-48 md:w-64 md:h-64" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-15 dark:opacity-10">
        <GrowthPlantIllustration className="w-32 h-44 md:w-40 md:h-56" />
      </div>
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

        {/* DETAILS FORM - Now shown after questions, before results */}
        {step === 'form' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/10 max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Assessment Completed!</h2>
              <p className="text-slate-600 dark:text-slate-400">You answered all {activeTest.questions.length} questions. Please provide your details to view your personalized results and insights.</p>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="animate-spin text-violet-600 w-12 h-12 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 font-medium">Analyzing your responses and generating detailed insights...</p>
              </div>
            ) : (
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
                  View My Results
                </button>
              </form>
            )}
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
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-white/10 max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600 dark:text-violet-400">
                <Award size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Your Personalized Report</h2>
              <p className="text-slate-500 dark:text-slate-400">Thank you, {user.name}. Here is your detailed assessment analysis:</p>
            </div>
            
            {/* Result Level */}
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 p-6 rounded-2xl mb-6 border border-violet-100 dark:border-violet-800/30 text-left">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <div className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Result Indicator</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">Score: {result.score}/{activeTest.questions.length * Math.max(...activeTest.options.map(o => o.score))}</div>
              </div>
              <div className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-3">{result.level}</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{result.text}</p>
            </div>

            {/* Clinical Insights */}
            {result.insights && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl mb-6 border border-blue-100 dark:border-blue-800/30 text-left">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  What This Means
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{result.insights}</p>
              </div>
            )}

            {/* Affected Areas */}
            {result.affectedAreas && result.affectedAreas.length > 0 && (
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl mb-6 border border-orange-100 dark:border-orange-800/30 text-left">
                <div className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Areas That May Be Affected
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.affectedAreas.map((area, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-orange-200 dark:border-orange-800/50">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {result.recommendations && (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl mb-6 border border-green-100 dark:border-green-800/30 text-left">
                <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Personalized Recommendations
                </div>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                      <span className="leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/40 p-4 rounded-xl flex items-start gap-3 text-left mb-8">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <div className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Important Disclaimer:</strong> This is a screening tool designed for self-reflection and awareness, not a clinical diagnosis. Results are based solely on your self-reported responses and should be interpreted as preliminary insights. For accurate assessment and personalized treatment, please consult a qualified mental health professional.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => onNavigate('contact', 'scroll')}
                className="flex-1 bg-violet-600 text-white font-bold py-4 rounded-xl hover:bg-violet-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Book a Consultation <ArrowRight size={18} />
              </button>
              <button onClick={reset} className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                Take Another Assessment
              </button>
            </div>
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
    }, 1500);
    
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
            <FloatingShapes />
            <main id="main-content" role="main">
              {view === 'home' ? (
                <MainContent key="home" onNavigate={handleNavigation} />
              ) : (
                <ResourcesView key="resources" onNavigate={handleNavigation} />
              )}
            </main>
            <FloatingWhatsApp />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
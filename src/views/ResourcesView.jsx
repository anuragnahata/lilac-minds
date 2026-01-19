import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  ArrowLeft,
  Wind,
  Coffee,
  Award,
  FileText,
  PhoneCall,
  CheckCircle,
  Loader2,
  Moon,
  Battery, 
  Compass,
  Library,
  Cloud
} from 'lucide-react';
import { 
  Tilt3D, 
  ParallaxBackground, 
  BrainWellnessIllustration, 
  GrowthPlantIllustration 
} from '../components/shared';

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
        text = "Your responses indicate minimal anxiety symptoms. You appear to be managing daily stressors effectively and maintaining emotional equilibrium.";
        insights = "Your nervous system appears well-regulated. You likely have effective coping mechanisms in place and good stress tolerance.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue practicing your current self-care and stress management routines",
          "Maintain regular physical exercise (at least 30 minutes, 3-4 times weekly)",
          "Practice preventive mindfulness or meditation (even 10 minutes daily)",
          "Ensure you maintain a consistent sleep schedule of 7-8 hours",
          "Stay connected with your support network"
        ];
      } else if (score <= 14) {
        level = "Mild to Moderate Anxiety";
        text = "Your score suggests you are experiencing mild to moderate anxiety symptoms. You may be feeling more stressed, worried, or on edge than usual.";
        insights = "At this level, your body's stress response is activating more frequently than ideal. You may notice tension in your body, difficulty switching off your mind, or feeling drained.";
        affectedAreas = ["Concentration and focus", "Sleep quality", "Physical tension", "Emotional regulation"];
        recommendations = [
          "Begin monitoring your anxiety triggers—keep a brief daily log",
          "Practice 'Box Breathing' technique: inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds",
          "Reduce caffeine intake, especially after 12 PM",
          "Schedule daily 'worry time' (15 minutes) to contain anxious thoughts",
          "Consider booking a consultation to learn personalized anxiety management techniques",
          "Engage in regular physical activity"
        ];
      } else if (score <= 21) {
        level = "Moderate to Severe Anxiety";
        text = "Your responses indicate moderate to severe anxiety symptoms. Worry and nervousness are likely interfering significantly with your daily functioning.";
        insights = "At this level, your nervous system is in a heightened state of alertness. The 'fight or flight' response may be activating frequently.";
        affectedAreas = ["Work/academic performance", "Relationships and social life", "Physical health", "Decision-making ability", "Overall quality of life"];
        recommendations = [
          "We strongly recommend scheduling a professional consultation",
          "Practice Progressive Muscle Relaxation (PMR) daily",
          "Break overwhelming tasks into very small, manageable steps",
          "Limit exposure to anxiety-provoking content before bedtime",
          "Prioritize sleep hygiene: consistent bedtime, no screens 1 hour before bed",
          "Lean on your support system—share your struggles with trusted people"
        ];
      } else {
        level = "Severe Anxiety";
        text = "Your score indicates severe anxiety symptoms that are likely having a profound impact on your daily life. Please know that severe anxiety is highly treatable with proper professional support.";
        insights = "At this severity level, your nervous system is in chronic overdrive. This is not your fault—anxiety is a medical condition, not a character flaw.";
        affectedAreas = ["All areas of daily functioning", "Physical health and immune system", "Work/academic capability", "Personal relationships", "Self-esteem and confidence"];
        recommendations = [
          "Please seek professional help as soon as possible—this is urgent but very treatable",
          "If you experience panic attacks, remember they are temporary and will pass",
          "Practice grounding techniques when overwhelmed: name 5 things you can see, 4 you can hear, 3 you can touch",
          "Reach out to your support system—do not face this alone",
          "Avoid making major life decisions while in this state",
          "Be compassionate with yourself—seeking help is a sign of strength"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  depression: {
    id: 'depression',
    title: "Depression & Mood Assessment",
    desc: "A comprehensive evaluation based on the PHQ-9 to assess the presence and severity of depressive symptoms over the past 2 weeks.",
    icon: Cloud,
    color: "text-gray-600 dark:text-gray-400",
    bg: "bg-gray-50 dark:bg-gray-800/50",
    questions: [
      "Over the past 2 weeks, how often have you had little interest or pleasure in doing things you usually enjoy?",
      "How often have you felt down, depressed, hopeless, or emotionally numb?",
      "How frequently have you had trouble falling asleep, staying asleep, or sleeping too much?",
      "How often have you felt tired, fatigued, or had little energy even after rest?",
      "How frequently have you experienced changes in appetite—either eating too little or overeating?",
      "How often have you felt bad about yourself, felt like a failure, or felt you have let yourself or others down?",
      "How frequently have you had trouble concentrating on things like reading, watching TV, or completing tasks?",
      "How often have you noticed yourself moving or speaking more slowly than usual, or feeling agitated?",
      "How often have you had thoughts that you would be better off dead, or thoughts of hurting yourself?",
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
        text = "Your responses suggest minimal or no depressive symptoms. You appear to be maintaining a healthy emotional baseline.";
        insights = "Your emotional regulation appears stable. You are likely experiencing normal fluctuations in mood that do not persist.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue engaging in activities and hobbies that bring you joy",
          "Maintain your social connections",
          "Keep a consistent sleep schedule",
          "Regular physical exercise helps maintain mood stability",
          "Practice gratitude or journaling to reinforce positive thought patterns"
        ];
      } else if (score <= 11) {
        level = "Mild to Moderate Depression";
        text = "Your score indicates mild to moderate depressive symptoms. You may be feeling persistently low, lacking motivation, or experiencing less joy than usual.";
        insights = "At this level, your brain's reward and motivation systems may be underactive. This is not laziness—it's your brain chemistry signaling it needs support.";
        affectedAreas = ["Motivation and drive", "Energy levels", "Sleep patterns", "Social engagement", "Self-esteem", "Concentration"];
        recommendations = [
          "Practice 'Behavioral Activation'—commit to doing small activities even when you don't feel like it",
          "Get 15-20 minutes of natural sunlight daily, preferably in the morning",
          "Establish a gentle daily routine with small, achievable goals",
          "Reach out to a trusted friend or family member",
          "Limit alcohol consumption, which is a depressant",
          "Consider booking a therapy session to explore underlying causes"
        ];
      } else if (score <= 17) {
        level = "Moderate Depression";
        text = "Your responses indicate moderate depression. You are likely struggling with persistent low mood, reduced motivation, and changes in sleep or appetite.";
        insights = "At this level, depression is likely impacting multiple areas of your life. The good news is that moderate depression responds very well to professional treatment.";
        affectedAreas = ["Work/academic performance", "Relationships", "Physical health", "Self-worth and confidence", "Decision-making", "Ability to experience pleasure"];
        recommendations = [
          "Professional support is strongly recommended—CBT is highly effective for depression",
          "Challenge negative automatic thoughts: ask 'What evidence supports or contradicts this?'",
          "Avoid isolation—force small social interactions even when you want to withdraw",
          "Focus on small, achievable daily goals",
          "Physical exercise has antidepressant effects—even a 20-minute walk can help",
          "Practice self-compassion; speak to yourself as you would to a dear friend"
        ];
      } else if (score <= 23) {
        level = "Moderately Severe Depression";
        text = "Your score indicates moderately severe depression. You are likely experiencing significant impairment in your daily functioning.";
        insights = "At this severity, depression has likely become a significant barrier to normal life. Many people recover fully from depression at this level with the right support.";
        affectedAreas = ["All major life domains", "Physical health and self-care", "Relationships and social life", "Work/academic capability", "Self-perception and identity"];
        recommendations = [
          "Please prioritize seeking professional mental health support",
          "Consider discussing treatment options with a psychiatrist",
          "Ensure you have a safety plan if thoughts of self-harm arise",
          "Focus on basic self-care: regular meals, adequate sleep, gentle movement",
          "Accept help from others—let people support you",
          "Remember: depression lies. The hopelessness you feel is a symptom, not reality."
        ];
      } else {
        level = "Severe Depression";
        text = "Your score indicates severe depression requiring immediate professional attention. Please know that even severe depression is treatable.";
        insights = "At this level, depression has profoundly affected your brain's functioning. You are not broken—you are ill and need medical attention.";
        affectedAreas = ["Complete daily functioning", "Physical safety and well-being", "All relationships", "Ability to work or study", "Self-care", "Physical health"];
        recommendations = [
          "Please seek immediate professional help—contact a mental health professional or crisis helpline today",
          "If you have thoughts of harming yourself, please reach out to a crisis helpline immediately",
          "Do not isolate—stay connected with at least one trusted person",
          "Remove access to any means of self-harm from your immediate environment",
          "Focus only on getting through today—one hour, one moment at a time",
          "Remember: This feeling will not last forever. Recovery is possible."
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  burnout: {
    id: 'burnout',
    title: "Burnout & Exhaustion Assessment",
    desc: "A comprehensive evaluation of physical, emotional, and mental exhaustion related to work, studies, or life demands.",
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
        text = "Your responses suggest you are managing your energy and work-life balance effectively.";
        insights = "You seem to have established good boundaries between work and personal life.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Continue maintaining your current work-life boundaries",
          "Keep engaging in restorative activities and hobbies outside of work",
          "Take regular micro-breaks during work to sustain your energy",
          "Stay connected with supportive relationships",
          "Periodically reassess your workload and adjust before stress accumulates"
        ];
      } else if (score <= 28) {
        level = "Moderate Burnout Risk";
        text = "Your score indicates moderate burnout risk. You are showing clear signs of exhaustion and may be running on depleted reserves.";
        insights = "At this level, your body and mind are signaling that the current pace is unsustainable.";
        affectedAreas = ["Physical energy and stamina", "Sleep quality", "Emotional resilience", "Work satisfaction", "Personal relationships", "Physical health"];
        recommendations = [
          "Take a short break or mental health day as soon as possible",
          "Re-evaluate your workload: identify tasks that can be delegated or eliminated",
          "Prioritize sleep and nutrition over deadlines for the next 1-2 weeks",
          "Practice saying 'no' to new commitments until your current load is manageable",
          "Schedule non-negotiable recovery time",
          "Consider whether systemic factors are contributing"
        ];
      } else {
        level = "High Burnout Risk";
        text = "Your responses indicate significant burnout. You are experiencing substantial physical, emotional, and mental exhaustion that requires immediate intervention.";
        insights = "At this level, you have likely been running on empty for too long. Recovery requires significant changes, not just a vacation.";
        affectedAreas = ["Physical health and immunity", "Mental health (risk of depression/anxiety)", "Cognitive function and memory", "All relationships", "Job performance", "Overall quality of life"];
        recommendations = [
          "Please treat this as a health crisis—seek professional support",
          "Have an honest conversation with your supervisor about reducing your load",
          "Consider whether medical leave is necessary for recovery",
          "Practice 'radical rest': complete disconnection from work for defined periods",
          "Prioritize basic self-care: regular meals, adequate sleep, gentle movement",
          "Examine whether your current work or life situation is sustainable long-term",
          "Be patient—recovery from severe burnout takes months, not days"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  sleep: {
    id: 'sleep',
    title: "Sleep Quality & Insomnia Assessment",
    desc: "A thorough evaluation of your sleep patterns, quality, and daytime functioning over the past month.",
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
      "How much has poor sleep impaired your ability to function mentally (concentration, memory)?",
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
        text = "Your responses indicate healthy sleep patterns. You appear to be getting restorative sleep.";
        insights = "Your sleep architecture appears healthy. This is protective for both your mental and physical health.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Maintain your consistent sleep schedule",
          "Continue avoiding screens for at least 30-60 minutes before bed",
          "Keep your bedroom environment optimized: cool, dark, and quiet",
          "Limit caffeine intake, especially after early afternoon",
          "Stay physically active during the day to promote deeper sleep"
        ];
      } else if (score <= 14) {
        level = "Mild to Moderate Sleep Difficulties";
        text = "Your score suggests you are experiencing some sleep disturbances that are affecting your rest quality and daytime functioning.";
        insights = "At this level, your sleep quality is compromised, which affects your cognitive function, emotional regulation, and physical recovery.";
        affectedAreas = ["Daytime energy and alertness", "Concentration and memory", "Mood stability", "Stress resilience", "Physical health"];
        recommendations = [
          "Establish a consistent sleep-wake schedule, even on weekends",
          "Create a relaxing 'wind-down' routine 30-60 minutes before bed",
          "Avoid caffeine after 12-2 PM and limit alcohol",
          "If you can't fall asleep within 20 minutes, get up and do something calm",
          "Limit daytime naps to 20 minutes maximum",
          "Reduce screen exposure before bed; blue light suppresses melatonin",
          "Get bright light exposure in the morning"
        ];
      } else {
        level = "Significant Sleep Problems";
        text = "Your responses indicate significant sleep difficulties that are likely having a substantial impact on your daily functioning.";
        insights = "At this severity, your sleep problems are likely chronic and affecting your physical health, mental health, and cognitive abilities.";
        affectedAreas = ["All daytime functioning", "Mental health (anxiety, depression)", "Physical health and immunity", "Cognitive performance", "Emotional regulation", "Relationships"];
        recommendations = [
          "Consult a professional for CBT for Insomnia (CBT-I)—the gold standard treatment",
          "Get a medical evaluation to rule out underlying conditions",
          "Implement strict sleep hygiene: consistent schedule, optimized environment",
          "Practice stimulus control: use the bed only for sleep",
          "Review all medications and substances for sleep-interfering effects",
          "Address any underlying anxiety or depression",
          "Avoid relying on alcohol or over-the-counter sleep aids"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  },
  career: {
    id: 'career',
    title: "Career Clarity & Direction Assessment",
    desc: "A comprehensive evaluation of your career readiness, self-awareness, and decision-making confidence.",
    icon: Compass,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    questions: [
      "I have a clear understanding of my core strengths, natural abilities, and areas for growth.",
      "I can identify my personal values and know what matters most to me in a career.",
      "I have a good understanding of my personality type and how it affects my work preferences.",
      "I know which specific career paths or fields genuinely interest me and align with my abilities.",
      "I am aware of the educational qualifications, skills, and experience required for my desired career.",
      "I feel confident in my ability to make important decisions about my academic stream or career direction.",
      "I have researched multiple career options and understand the pros and cons of each.",
      "I have a backup plan or alternative options if my primary career choice doesn't work out.",
      "I feel supported and guided in my career journey by family, mentors, or counselors.",
      "I have a realistic understanding of the job market, industry trends, and future opportunities.",
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
        text = "Your responses indicate that you are currently uncertain about your career direction. This is completely normal and simply means you need more self-exploration.";
        insights = "Career confusion often stems from insufficient self-knowledge or insufficient market knowledge. Clarity comes from structured exploration.";
        affectedAreas = ["Decision-making confidence", "Academic/career planning", "Stress and anxiety about the future", "Sense of direction and purpose"];
        recommendations = [
          "Book a comprehensive Career Counselling session",
          "Complete a full Psychometric Assessment (aptitude, personality, interest)",
          "Engage in self-reflection: What activities make you lose track of time?",
          "Research at least 5-10 different career paths",
          "Talk to professionals in various fields",
          "Don't rush the decision—invest time now in clarity",
          "Separate your own desires from external expectations"
        ];
      } else if (score <= 30) {
        level = "Moderate Career Clarity";
        text = "Your score suggests you have some direction but may lack specific details or complete confidence.";
        insights = "You likely have a general sense of your interests but may be lacking specific information or have conflicting options.";
        affectedAreas = ["Commitment to a specific path", "Action planning", "Confidence in decisions", "Preparation for next steps"];
        recommendations = [
          "Narrow down your interests to your top 2-3 career options",
          "Create a detailed comparison: requirements, lifestyle, income, growth prospects",
          "Conduct informational interviews with professionals in your fields of interest",
          "Identify your specific gap: Is it lack of information, fear of commitment, or external conflict?",
          "A focused career mentorship session could help clarify the final steps",
          "Start preparing for practical requirements: entrance exams, skill-building",
          "Build a network in your areas of interest"
        ];
      } else {
        level = "High Career Clarity";
        text = "Excellent! Your responses indicate a strong sense of self-awareness, clear career direction, and readiness to take action.";
        insights = "You have achieved a level of career clarity that many struggle to reach. The next phase is about execution and continuous refinement.";
        affectedAreas = ["No significant areas of concern identified"];
        recommendations = [
          "Focus on execution: entrance exam preparation, applications, skill development",
          "Build a detailed 1-2 year roadmap with milestones",
          "Seek a mentor in your specific field",
          "Start building relevant experience through internships or projects",
          "Stay flexible—career paths evolve, and you will continue to learn",
          "Help others who are struggling with career confusion",
          "Celebrate your progress—you have done significant work to reach this point"
        ];
      }
      return { level, text, recommendations, insights, affectedAreas };
    }
  }
};

const ResourcesView = ({ onNavigate }) => {
  const [activeTest, setActiveTest] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
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

        {step === 'form' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-white/10 max-w-2xl mx-auto"
          >
            <button 
              onClick={reset}
              className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Resources
            </button>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Assessment Completed!</h2>
              <p className="text-slate-600 dark:text-slate-400">You answered all {activeTest.questions.length} questions. Please provide your details to view your personalized results.</p>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="animate-spin text-violet-600 w-12 h-12 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 font-medium">Analyzing your responses...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Full Name</label>
                  <input required type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-all" 
                    value={user.name} onChange={e => setUser({...user, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Mobile Number</label>
                    <input required type="tel" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-all" 
                      value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">City</label>
                    <input required type="text" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-all" 
                      value={user.city} onChange={e => setUser({...user, city: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Email Address</label>
                  <input required type="email" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-white transition-all" 
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

        {step === 'questions' && (
          <div className="max-w-2xl mx-auto">
            <button 
              onClick={reset}
              className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Resources
            </button>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{activeTest.title}</h2>
              <span className="text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 px-3 py-1 rounded-full">
                {Object.keys(answers).length} / {activeTest.questions.length}
              </span>
            </div>
            
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-violet-600 w-12 h-12 mb-4" />
                <p className="text-slate-600 dark:text-slate-400 font-medium">Analyzing results...</p>
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

        {step === 'result' && result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-white/10 max-w-3xl mx-auto"
          >
            <button 
              onClick={reset}
              className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Resources
            </button>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600 dark:text-violet-400">
                <Award size={40} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Your Personalized Report</h2>
              <p className="text-slate-500 dark:text-slate-400">Thank you, {user.name}. Here is your detailed assessment analysis:</p>
            </div>
            
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 p-6 rounded-2xl mb-6 border border-violet-100 dark:border-violet-800/30 text-left">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <div className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Result Indicator</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full">Score: {result.score}/{activeTest.questions.length * Math.max(...activeTest.options.map(o => o.score))}</div>
              </div>
              <div className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-3">{result.level}</div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{result.text}</p>
            </div>

            {result.insights && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl mb-6 border border-blue-100 dark:border-blue-800/30 text-left">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  What This Means
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{result.insights}</p>
              </div>
            )}

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
                <strong>Important Disclaimer:</strong> This is a screening tool designed for self-reflection and awareness, not a clinical diagnosis. Please consult a qualified mental health professional for accurate assessment.
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

export default ResourcesView;

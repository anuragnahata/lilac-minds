import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, RotateCcw, PhoneCall } from 'lucide-react';
import { ASSESSMENT_DATA } from './ResourcesView';

const AssessmentView = ({ onNavigate }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const assessmentKey = Object.keys(ASSESSMENT_DATA).find(
    key => ASSESSMENT_DATA[key].slug === slug
  );
  const assessment = assessmentKey ? ASSESSMENT_DATA[assessmentKey] : null;

  useEffect(() => {
    if (assessment) {
      document.title = `${assessment.title} | Lilac Minds`;
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.content = assessment.desc;
      }
    }
  }, [assessment]);

  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Assessment Not Found</h1>
          <button 
            onClick={() => navigate('/resources')}
            className="text-violet-600 dark:text-violet-400 hover:underline"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const Icon = assessment.icon;

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, s) => sum + s, 0);
      setResult(assessment.getResult(totalScore));
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/20 pt-24 pb-16"
    >
      <div className="max-w-3xl mx-auto px-6">
        <button
          onClick={() => navigate('/resources')}
          className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Resources</span>
        </button>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className={`${assessment.bg} p-6 border-b border-slate-200 dark:border-slate-700`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-12 h-12 rounded-xl ${assessment.bg} flex items-center justify-center`}>
                <Icon className={assessment.color} size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  {assessment.title}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {assessment.questions.length} questions
                </p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6"
              >
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>Question {currentQuestion + 1} of {assessment.questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-violet-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <h2 className="text-lg font-medium text-slate-800 dark:text-white mb-6">
                  {assessment.questions[currentQuestion]}
                </h2>

                <div className="space-y-3">
                  {assessment.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all text-slate-700 dark:text-slate-300"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {currentQuestion > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 mt-6 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Previous question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Assessment Complete
                  </h2>
                  <p className={`text-lg font-semibold ${assessment.color}`}>
                    {result?.level}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {result?.text}
                  </p>
                </div>

                {result?.insights && (
                  <div className="mb-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Key Insights</h3>
                    <p className="text-slate-600 dark:text-slate-400">{result.insights}</p>
                  </div>
                )}

                {result?.recommendations && (
                  <div className="mb-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">Recommendations</h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                          <CheckCircle className="text-green-500 shrink-0 mt-1" size={16} />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5 mb-6">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <strong>Disclaimer:</strong> This self-assessment is for educational purposes only and is not a clinical diagnosis. For a comprehensive evaluation and personalized treatment plan, please consult with a qualified mental health professional.
                  </p>
                  <button
                    onClick={() => onNavigate('contact', 'scroll')}
                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full font-medium transition-colors"
                  >
                    <PhoneCall size={18} />
                    Book a Consultation
                  </button>
                </div>

                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <RotateCcw size={16} />
                  Take assessment again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AssessmentView;

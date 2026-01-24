import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { BLOGS_DATA } from './ResourcesView';

const ArticleView = ({ onNavigate }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = BLOGS_DATA.find(blog => blog.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Lilac Minds`;
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.content = article.desc;
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Article Not Found</h1>
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/20 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate('/resources')}
          className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Resources</span>
        </button>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full">
                <Tag size={14} />
                {article.tag}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                <Clock size={14} />
                {article.readTime} read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {article.desc}
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content}
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Need Professional Support?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If this article resonated with you and you'd like to explore these topics further with professional guidance, we're here to help.
              </p>
              <button
                onClick={() => onNavigate('contact', 'scroll')}
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Book a Consultation
              </button>
            </div>
          </footer>
        </article>
      </div>
    </motion.div>
  );
};

export default ArticleView;

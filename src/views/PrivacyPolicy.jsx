import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-xl">
              <Shield className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Introduction
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Lilac Minds ("we," "our," or "us"), operated by Prarthana Thaker, is committed to protecting your privacy and ensuring the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our psychology and career counselling services in Jamnagar, Gujarat.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                We adhere to the ethical guidelines set by the Rehabilitation Council of India (RCI) and applicable data protection laws in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Age, gender, and occupation</li>
                    <li>Address and location details</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Health Information</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Mental health history and current concerns</li>
                    <li>Medical history relevant to psychological treatment</li>
                    <li>Session notes and treatment progress</li>
                    <li>Psychological assessment results</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                    <li>Browser type and device information</li>
                    <li>IP address and general location</li>
                    <li>Website usage data and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>To provide psychotherapy, counselling, and career guidance services</li>
                <li>To schedule and manage appointments</li>
                <li>To communicate with you about your treatment and services</li>
                <li>To maintain accurate client records as required by professional standards</li>
                <li>To send appointment reminders via WhatsApp, email, or phone</li>
                <li>To improve our website and services</li>
                <li>To respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl border border-violet-200 dark:border-violet-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Lock className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Confidentiality
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong>Your conversations with us are 100% confidential.</strong> We adhere to strict ethical guidelines set by the Rehabilitation Council of India (RCI). What you share in the therapy room stays in the therapy room. Your records, notes, and personal information are stored securely and are never shared with anyone—including family members—without your explicit written consent.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                <strong>Exceptions to confidentiality:</strong> The only exceptions are rare situations involving imminent risk to yourself or others, or legal mandates, which we would discuss with you transparently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Information Sharing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>With your explicit written consent</li>
                <li>With healthcare professionals (psychiatrists, physicians) for coordinated care, with your consent</li>
                <li>When required by law or legal process</li>
                <li>In emergency situations involving risk to life</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. For online therapy sessions, we use encrypted, HIPAA-compliant platforms to ensure your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Access your personal information and therapy records</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Withdraw consent for data processing</li>
                <li>Receive a copy of your records upon written request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cookies and Website Analytics</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our website may use cookies and similar technologies to enhance your browsing experience. These help us understand how visitors use our site and improve our services. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We provide services to children and adolescents with appropriate parental/guardian consent. For minors, we maintain confidentiality while keeping parents informed about general progress and involving them as therapeutic partners when beneficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-slate-600 dark:text-slate-400">
                <p><strong>Lilac Minds</strong></p>
                <p>Prarthana Thaker, Clinical Psychologist & Career Counsellor</p>
                <p>Sarvoday Society, 9, Krishna Nagar Main Rd,</p>
                <p>Jamnagar, Gujarat 361006, India</p>
                <p className="flex items-center gap-2 mt-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:lilac.minds.in@gmail.com" className="text-violet-600 dark:text-violet-400 hover:underline">lilac.minds.in@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918200711499" className="text-violet-600 dark:text-violet-400 hover:underline">+91 82007 11499</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

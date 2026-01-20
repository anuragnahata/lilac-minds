import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, XCircle, Mail, Phone } from 'lucide-react';

const TermsOfUse = ({ onNavigate }) => {
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
              <Scale className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Terms of Use
            </h1>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Agreement to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Welcome to Lilac Minds. By accessing our website (lilacminds.com) or using our psychology and career counselling services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                These terms apply to all visitors, clients, and others who access or use our services in Jamnagar, Gujarat, and online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Lilac Minds, operated by Prarthana Thaker (Clinical Psychologist & Career Counsellor), provides the following services:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Individual psychotherapy and counselling</li>
                <li>Anxiety and depression treatment</li>
                <li>Stress management and burnout therapy</li>
                <li>Career counselling and aptitude assessment</li>
                <li>Student mentorship and academic guidance</li>
                <li>Relationship and family counselling</li>
                <li>Online therapy sessions via secure video platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                Client Responsibilities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                As a client of Lilac Minds, you agree to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Provide accurate and complete information about yourself and your concerns</li>
                <li>Attend scheduled appointments on time or provide at least 24 hours' notice for cancellations</li>
                <li>Actively participate in your therapy or counselling process</li>
                <li>Respect the therapeutic relationship and professional boundaries</li>
                <li>Pay for services as agreed upon</li>
                <li>Maintain a safe and private environment during online sessions</li>
                <li>Inform us of any changes in your contact information or health status</li>
              </ul>
            </section>

            <section className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                Appointment and Cancellation Policy
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Scheduling</h3>
                  <p>Sessions can be scheduled via WhatsApp, phone, or email. Confirmation will be sent prior to your appointment.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Session Duration</h3>
                  <p>Standard sessions last 45-60 minutes. Initial intake sessions may extend to 75-90 minutes.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Cancellation</h3>
                  <p>We request at least 24 hours' notice for cancellations or rescheduling. Late cancellations (less than 24 hours) may incur a cancellation fee. Repeated no-shows may affect your booking priority.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Payment</h3>
                  <p>Payment is expected at the time of service or as otherwise agreed. We accept Cash, UPI, Credit Card, and Debit Card.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Professional Scope and Limitations</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  <strong>Not Medical Treatment:</strong> As clinical psychologists, we provide psychotherapy and counselling services. We do not prescribe medication. If medication is needed, we will refer you to a trusted psychiatrist for coordinated care.
                </p>
                <p>
                  <strong>Not Emergency Services:</strong> Our services are not designed for psychiatric emergencies. If you are experiencing a mental health crisis, suicidal thoughts, or any emergency, please contact emergency services immediately or go to the nearest hospital.
                </p>
                <p>
                  <strong>No Guaranteed Outcomes:</strong> While we strive to provide the highest quality of care, therapy outcomes vary based on individual circumstances, commitment, and various factors beyond our control.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                Prohibited Conduct
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                When using our website or services, you agree not to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Provide false or misleading information</li>
                <li>Engage in abusive, threatening, or harassing behavior toward staff</li>
                <li>Record sessions without explicit written consent</li>
                <li>Share confidential information from group sessions (if applicable)</li>
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Copy, reproduce, or distribute our website content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Online Therapy Terms</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                For online therapy sessions, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>You are physically located in India during the session</li>
                <li>You will use a stable internet connection and appropriate device</li>
                <li>You will be in a private, confidential space during sessions</li>
                <li>Technical difficulties may occasionally disrupt sessions</li>
                <li>Online therapy may not be suitable for all conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All content on the Lilac Minds website, including text, graphics, logos, images, and design elements, is the property of Lilac Minds and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Website Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The information provided on our website is for general informational purposes only and should not be considered as professional psychological advice, diagnosis, or treatment. Always seek the advice of a qualified mental health professional with any questions you may have regarding your mental health.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To the fullest extent permitted by law, Lilac Minds shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Termination of Services</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Either party may terminate the therapeutic relationship at any time. If we determine that our services are not appropriate for your needs, we will provide referrals to other qualified professionals. We reserve the right to terminate services in cases of non-compliance with these terms or for non-payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Governing Law</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Jamnagar, Gujarat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Changes to Terms</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website or services after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="space-y-2 text-slate-600 dark:text-slate-400">
                <p><strong>Lilac Minds</strong></p>
                <p>Prarthana Thaker, Clinical Psychologist & Career Counsellor</p>
                <p>Sarvoday Society, 9, Krishna Nagar Main Rd,</p>
                <p>Jamnagar, Gujarat 361006, India</p>
                <p className="flex items-center gap-2 mt-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@lilacminds.com" className="text-violet-600 dark:text-violet-400 hover:underline">hello@lilacminds.com</a>
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

export default TermsOfUse;

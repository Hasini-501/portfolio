import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, Check, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message & trigger mailto option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Construct mailto link as direct fallback so Hasini actually receives the email!
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Hasini,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>09 • Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-stone-700 max-w-2xl leading-relaxed">
            “Whether it's a project, an internship opportunity, a collaboration, or simply a conversation about technology — I'd love to hear from you.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels & student context */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-pink-200 shadow-xl shadow-pink-200/30 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center text-rose-600">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  Direct Inbox
                </span>
                <p className="text-base font-semibold text-stone-900 break-all mt-0.5">
                  {PERSONAL_INFO.email}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="contact-direct-mailto"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors shadow-sm shadow-rose-500/25"
                >
                  Write Email
                </a>

                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="px-3 py-2 rounded-xl text-xs font-mono bg-pink-50 hover:bg-pink-100 text-stone-700 border border-pink-200 transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-3xl bg-white border border-pink-200 shadow-xl shadow-pink-200/30 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-mono">
                Social Profiles & Networks
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-link-linkedin"
                  className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-200/80 flex items-center justify-between hover:border-rose-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-rose-600" />
                    <div>
                      <span className="font-semibold text-stone-900 block">LinkedIn</span>
                      <span className="text-xs text-stone-500 font-mono">linkedin.com/in/hasini-doddigarla</span>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-rose-600 transition-colors">↗</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-link-github"
                  className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-200/80 flex items-center justify-between hover:border-rose-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-rose-600" />
                    <div>
                      <span className="font-semibold text-stone-900 block">GitHub</span>
                      <span className="text-xs text-stone-500 font-mono">github.com/hasinidoddigarla</span>
                    </div>
                  </div>
                  <span className="text-stone-400 group-hover:text-rose-600 transition-colors">↗</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-stone-600 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-pink-200 shadow-xl shadow-pink-200/30 relative">
              
              <h3 className="text-xl font-display font-bold text-stone-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Fill in the details below and it will compose a direct message to Hasini's inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                    Your email client will open to send this directly to <strong className="text-rose-600">{PERSONAL_INFO.email}</strong>. I usually respond within 24 hours!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 text-xs font-semibold text-rose-600 underline"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-2"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-pink-50/40 border border-pink-200 text-stone-900 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-2"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-pink-50/40 border border-pink-200 text-stone-900 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-2"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Hasini, I saw your Smart Hiring platform and would love to discuss an internship opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-pink-50/40 border border-pink-200 text-stone-900 text-sm focus:outline-none focus:border-rose-400 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200 shadow-md shadow-rose-500/25 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-stone-600">
            © 2026 Hasini Doddigarla. Built with curiosity, code & a lot of learning.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
            <span>Andhra Pradesh, India</span>
            <span>•</span>
            <span className="text-rose-600 font-semibold">B.Tech 2027</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

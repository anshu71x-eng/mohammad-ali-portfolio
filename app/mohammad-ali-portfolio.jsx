'use client';

import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, MessageCircle, Mic, Code, Settings } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#1a2332] text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2332]/95 backdrop-blur-sm border-b border-[#722f37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-bold text-xl">
              <span className="text-[#8B3A3A]">M</span>A
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm text-[#B0B0B0] hover:text-white transition">About</a>
              <a href="#services" className="text-sm text-[#B0B0B0] hover:text-white transition">Services</a>
              <a href="#work" className="text-sm text-[#B0B0B0] hover:text-white transition">Work</a>
              <a href="#contact" className="text-sm text-[#B0B0B0] hover:text-white transition">Contact</a>
            </div>
            <div className="hidden md:block">
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-[#8B3A3A] hover:bg-[#A0534F] text-white text-sm font-medium rounded transition">
                Let's Talk
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-[#8B3A3A]">Mohammad Ali</span>
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[#A0534F]">Voice Agents</span>
                <span className="text-[#B0B0B0]">·</span>
                <span className="text-[#A0534F]">Full-Stack Developer</span>
                <span className="text-[#B0B0B0]">·</span>
                <span className="text-[#A0534F]">AI Specialist</span>
              </div>
              <p className="text-lg text-[#B0B0B0] mb-8 max-w-xl">
                I help businesses automate customer communication with AI voice agents, build premium websites, and scale operations through intelligent automation.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[#8B3A3A]">50+</div>
                  <div className="text-xs text-[#B0B0B0] mt-2">PROJECTS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B3A3A]">24/7</div>
                  <div className="text-xs text-[#B0B0B0] mt-2">AVAILABLE</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B3A3A]">3x</div>
                  <div className="text-xs text-[#B0B0B0] mt-2">HAPPY CLIENTS</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work" className="px-8 py-3 bg-[#8B3A3A] hover:bg-[#A0534F] text-white font-medium rounded inline-flex items-center justify-center transition">
                  View My Work
                </a>
                <a href="https://wa.me/918058058952" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#8B3A3A] hover:bg-[#8B3A3A]/10 text-white font-medium rounded inline-flex items-center justify-center transition">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#722f37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {['React', 'Next.js', 'Python', 'Voice AI', 'Automation', 'AWS', 'Node.js', 'Tailwind'].map((skill, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 bg-[#0f1e36] border border-[#722f37]/30 rounded-full text-sm text-[#B0B0B0] whitespace-nowrap hover:border-[#8B3A3A] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">ABOUT ME</span>
            <div className="h-0.5 bg-[#8B3A3A] mt-2"></div>
          </div>

          <p className="text-lg text-[#B0B0B0] mb-8 leading-relaxed">
            I'm <span className="text-white font-semibold">Mohammad Ali</span>, an <span className="text-[#8B3A3A]">AI Automation Specialist</span> and <span className="text-[#8B3A3A]">Full-Stack Web Developer</span>. I create intelligent <span className="text-[#8B3A3A]">Voice Agents</span>, build premium websites, and automate business processes to help companies generate more leads and sales.
          </p>

          <p className="text-[#B0B0B0] leading-relaxed mb-8">
            Based in Kota, Rajasthan, I work with businesses worldwide to implement AI-driven solutions that transform customer communication and streamline operations. Whether it's building a responsive web platform, deploying voice automation, or creating smart workflows—I'm obsessed with results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 p-6 bg-[#0f1e36] border border-[#722f37]/20 rounded-lg">
            <div>
              <span className="text-xs text-[#B0B0B0] tracking-widest">BASED IN</span>
              <p className="text-white mt-2">India - Working worldwide</p>
            </div>
            <div>
              <span className="text-xs text-[#B0B0B0] tracking-widest">STACK</span>
              <p className="text-white mt-2">Next.js - Python - React</p>
            </div>
            <div>
              <span className="text-xs text-[#B0B0B0] tracking-widest">DELIVERY</span>
              <p className="text-white mt-2">1-3 weeks/project</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1e36]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Three specialties.<br />
              <span className="text-[#8B3A3A]">One obsession — results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1a2332] border border-[#722f37]/20 rounded-lg hover:border-[#8B3A3A] hover:shadow-lg hover:shadow-[#8B3A3A]/20 transition group">
              <div className="w-12 h-12 bg-[#8B3A3A]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#8B3A3A]/30 transition">
                <Mic className="text-[#8B3A3A]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice Agents</h3>
              <p className="text-[#B0B0B0] mb-4">
                AI-powered voice agents that handle customer calls, appointments, and inquiries 24/7. Reduce support costs while improving response times.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2">
                Learn more <ExternalLink size={16} />
              </a>
            </div>

            <div className="p-8 bg-[#1a2332] border border-[#722f37]/20 rounded-lg hover:border-[#8B3A3A] hover:shadow-lg hover:shadow-[#8B3A3A]/20 transition group">
              <div className="w-12 h-12 bg-[#8B3A3A]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#8B3A3A]/30 transition">
                <Code className="text-[#8B3A3A]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-[#B0B0B0] mb-4">
                Full-stack web applications built with React, Next.js, and modern tech. Fast, responsive, and designed for conversion.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2">
                Learn more <ExternalLink size={16} />
              </a>
            </div>

            <div className="p-8 bg-[#1a2332] border border-[#722f37]/20 rounded-lg hover:border-[#8B3A3A] hover:shadow-lg hover:shadow-[#8B3A3A]/20 transition group">
              <div className="w-12 h-12 bg-[#8B3A3A]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#8B3A3A]/30 transition">
                <Settings className="text-[#8B3A3A]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Automation</h3>
              <p className="text-[#B0B0B0] mb-4">
                Intelligent workflows that automate lead generation, CRM integration, and business processes. Save time, scale faster.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2">
                Learn more <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
            <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">SELECTED WORK</span>
            <h2 className="text-4xl font-bold mt-4">Recent projects</h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-[#0f1e36] border-l-4 border-[#8B3A3A] rounded hover:bg-[#1a2332] transition">
              <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">VOICE AUTOMATION</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">AI Voice Agent System</h3>
              <p className="text-[#B0B0B0] mb-4">
                Automated voice calling system for customer support, appointment booking, and lead qualification. Handles 1000+ calls daily.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2 w-fit">
                Learn more <ExternalLink size={16} />
              </a>
            </div>

            <div className="p-8 bg-[#0f1e36] border-l-4 border-[#8B3A3A] rounded hover:bg-[#1a2332] transition">
              <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">WEB DEVELOPMENT</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">E-Commerce Platform</h3>
              <p className="text-[#B0B0B0] mb-4">
                Full-stack e-commerce platform with product catalog, cart, and payment integration. Built with React + Node.js.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2 w-fit">
                Learn more <ExternalLink size={16} />
              </a>
            </div>

            <div className="p-8 bg-[#0f1e36] border-l-4 border-[#8B3A3A] rounded hover:bg-[#1a2332] transition">
              <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">AUTOMATION</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">Business Automation Suite</h3>
              <p className="text-[#B0B0B0] mb-4">
                Automated workflows for lead generation, email marketing, and CRM integration. Reduced manual work by 80%.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2 w-fit">
                Learn more <ExternalLink size={16} />
              </a>
            </div>

            <div className="p-8 bg-[#0f1e36] border-l-4 border-[#8B3A3A] rounded hover:bg-[#1a2332] transition">
              <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">ADVERTISING</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">AI UGC Ad Campaign</h3>
              <p className="text-[#B0B0B0] mb-4">
                AI-driven user-generated content ads for digital marketing. 3x higher engagement than traditional ads.
              </p>
              <a href="#contact" className="text-[#8B3A3A] hover:text-[#A0534F] text-sm font-medium flex items-center gap-2 w-fit">
                Learn more <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1e36]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs text-[#8B3A3A] tracking-widest font-bold">LET'S BUILD SOMETHING</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-[#B0B0B0] mb-12 max-w-2xl mx-auto">
            Whether it's AI Voice Agents, a premium website, or a complete automation solution — I'm ready to talk about it. Let's create something remarkable together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918058058952"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#4CAF50] hover:bg-green-600 text-white font-medium rounded inline-flex items-center justify-center gap-3 transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:anshu.71x@gmail.com"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-[#1a2332] font-medium rounded inline-flex items-center justify-center gap-3 transition"
            >
              <Mail size={20} />
              Email me
            </a>
          </div>

          <a href="tel:+918058058952" className="block mt-6 text-[#8B3A3A] hover:text-[#A0534F] font-medium">
            <Phone size={16} className="inline mr-2" />
            +91 8058058952
          </a>
        </div>
      </section>

      <footer className="border-t border-[#722f37]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="#" className="font-bold text-xl inline-block">
                <span className="text-[#8B3A3A]">M</span>A
              </a>
            </div>
            <div className="text-center text-[#B0B0B0]">
              <p>Kota, Rajasthan</p>
              <p className="text-sm">Working worldwide</p>
            </div>
            <div className="flex justify-end gap-6">
              <a href="#" className="text-[#B0B0B0] hover:text-[#8B3A3A] transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#B0B0B0] hover:text-[#8B3A3A] transition">
                <Github size={20} />
              </a>
              <a href="mailto:anshu.71x@gmail.com" className="text-[#B0B0B0] hover:text-[#8B3A3A] transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-[#722f37]/20 pt-8 text-center text-[#B0B0B0] text-sm">
            <p>© 2025 Mohammad Ali. Crafted with obsession.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


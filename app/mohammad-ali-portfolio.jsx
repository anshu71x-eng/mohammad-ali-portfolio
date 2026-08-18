'use client';

import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, MessageCircle, Zap, Code, Mic, Settings } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#1a2332] text-white min-h-screen">
      {/* Navigation */}
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
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#8B3A3A] hover:bg-[#A0534F] text-white text-sm font-medium rounded transition"
              >
                Let's Talk
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#722f37]/20">
              <a href="#about" className="block py-2 text-[#B0B0B0] hover:text-white">About</a>
              <a href="#services" className="block py-2 text-[#B0B0B0] hover:text-white">Services</a>
              <a href="#work" className="block py-2 text-[#B0B0B0] hover:text-white">Work</a>
              <a href="#contact" className="block py-2 text-[#B0B0B0] hover:text-white">Contact</a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-2 bg-[#8B3A3A] hover:bg-[#A0534F] text-white text-sm font-medium rounded transition"
              >
                Let's Talk
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs text-[#B0B0B0] tracking-widest">WELCOME</span>
              </div>
              
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
                <a 
                  href="#work"
                  className="px-8 py-3 bg-[#8B3A3A] hover:bg-[#A0534F] text-white font-medium rounded inline-flex items-center justify-center transition"
                >
                  View My Work
                </a>
                <a 
                  href="https://wa.me/918058058952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-[#8B3A3A] hover:bg-[#8B3A3A]/10 text-white font-medium rounded inline-flex items-center justify-center transition"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-4 border-[#8B3A3A] overflow-hidden shadow-2xl">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%230f1e36' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%238B3A3A' text-anchor='middle' dy='.3em' font-family='sans-serif'%3EProfile Photo%3C/text%3E%3C/svg%3E"
                  alt="Mohammad Ali"
                  className="w-full h-full object-cover"
                />
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
              <p className="text-[#B0B0B0]

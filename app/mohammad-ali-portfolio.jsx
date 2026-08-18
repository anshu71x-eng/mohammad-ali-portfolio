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

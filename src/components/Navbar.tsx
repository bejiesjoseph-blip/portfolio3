import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-medium text-neutral-100 hover:text-white transition-colors">
          {PORTFOLIO_DATA.profile.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            download="Bejies_Joseph_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 text-xs font-medium transition-colors"
          >
            <span>Resume</span>
            <Download className="w-3 h-3" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-400 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-6 py-4 flex flex-col gap-3 text-sm text-neutral-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-white py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            download="Bejies_Joseph_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 mt-2 px-3 py-2 rounded border border-neutral-700 text-neutral-100 text-xs font-medium"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
};

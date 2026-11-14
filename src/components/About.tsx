import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
          About
        </h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
          {PORTFOLIO_DATA.profile.about.map((p, idx) => (
            <p key={idx}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

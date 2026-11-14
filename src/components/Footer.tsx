import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-900 text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          {PORTFOLIO_DATA.profile.name} • Chennai, India
        </div>
        <div className="text-neutral-500">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

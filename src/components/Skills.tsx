import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-8">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skills.map((group) => (
            <div key={group.group} className="space-y-2">
              <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

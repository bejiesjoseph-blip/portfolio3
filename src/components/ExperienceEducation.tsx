import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-12 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-neutral-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-400">
                    {exp.company} • {exp.location} ({exp.mode})
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 text-xs text-neutral-400 pt-1">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2">
                        <span className="text-neutral-500">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.credentialId && (
                    <div className="text-[11px] font-mono text-neutral-500 pt-1">
                      {exp.credentialId}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1 pb-4 border-b border-neutral-800/40 last:border-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-400">
                    {edu.institution} {edu.grade ? `• ${edu.grade}` : ''}
                  </div>

                  {edu.details && (
                    <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

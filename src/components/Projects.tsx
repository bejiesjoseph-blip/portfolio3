import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-8">
          Selected Projects
        </h2>

        <div className="space-y-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 self-start sm:self-auto transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-neutral-400">
                {project.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-500 mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono text-neutral-400 bg-neutral-800/50 rounded"
                  >
                    {tech}
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

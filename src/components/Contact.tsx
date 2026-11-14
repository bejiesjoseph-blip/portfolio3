import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
          Contact
        </h2>

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
            I'm currently looking for software engineering internships and junior backend roles. The fastest way to reach me is by email.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PORTFOLIO_DATA.profile.email}</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 rounded transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 rounded transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

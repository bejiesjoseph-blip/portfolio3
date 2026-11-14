import React, { useState } from 'react';
import { Download, Mail, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <div className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
            {PORTFOLIO_DATA.profile.location}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-100 tracking-tight">
            {PORTFOLIO_DATA.profile.name}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-normal">
            {PORTFOLIO_DATA.profile.headline}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed pt-2">
            Undergraduate in AI & Data Science at KCG College of Technology. Focused on building reliable backend APIs, asynchronous workers, and grounded retrieval-augmented generation (RAG) pipelines using Python, FastAPI, and MySQL.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Bejies_Joseph_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
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

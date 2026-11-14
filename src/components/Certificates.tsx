import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-12 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
          Certifications & Verified Credentials
        </h2>

        <div className="divide-y divide-neutral-800/60 border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
          {PORTFOLIO_DATA.certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-900/50 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-neutral-100">
                    {cert.title}
                  </h3>
                  {cert.score && (
                    <span className="text-[11px] font-mono text-neutral-400 bg-neutral-800/80 px-1.5 py-0.5 rounded">
                      {cert.score}
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-400">
                  {cert.issuer} • {cert.date}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
                >
                  <Eye className="w-3 h-3" />
                  <span>Preview</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                    title="Verify Online"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};

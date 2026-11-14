import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const isPdf = certificate.fileUrl?.endsWith('.pdf');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
              {certificate.title}
            </h3>
            <p className="text-xs text-neutral-400">
              {certificate.issuer} • {certificate.date}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preview */}
        <div className="p-4 overflow-y-auto">
          {certificate.fileUrl && (
            <div className="rounded border border-neutral-800 overflow-hidden bg-neutral-950 flex items-center justify-center">
              {isPdf ? (
                <iframe
                  src={`${certificate.fileUrl}#toolbar=0`}
                  title={certificate.title}
                  className="w-full h-80 sm:h-96 border-0"
                />
              ) : (
                <img
                  src={certificate.fileUrl}
                  alt={certificate.title}
                  className="max-h-96 w-auto object-contain"
                />
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
          <div className="text-neutral-400 font-mono">
            {certificate.score || certificate.credentialId || ''}
          </div>
          <div className="flex items-center gap-2">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-neutral-700 text-neutral-300 hover:text-white"
              >
                <span>Verify</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {certificate.fileUrl && (
              <a
                href={certificate.fileUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-100 hover:bg-white text-neutral-900 font-medium"
              >
                <Download className="w-3 h-3" />
                <span>Download</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

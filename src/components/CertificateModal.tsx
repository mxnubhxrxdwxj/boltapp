import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { buttonClasses } from '@/lib/buttonStyles';

interface CertificateModalProps {
  title: string;
  src: string;
  onClose: () => void;
}

export default function CertificateModal({ title, src, onClose }: CertificateModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="flex h-full max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-electric-500/40 bg-navy-900 shadow-glow"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-navy-700 px-5 py-4">
          <h3 className="truncate text-base font-semibold text-navy-50">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-navy-200 transition-colors hover:bg-navy-800 hover:text-electric-200 sm:inline-flex"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Open in new tab
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate"
              className="rounded-md p-2 text-navy-100 transition-colors hover:bg-navy-800"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <iframe src={src} title={title} className="min-h-0 w-full flex-1 bg-white" />

        <div className="flex justify-center border-t border-navy-700 p-4 sm:hidden">
          <a href={src} target="_blank" rel="noopener noreferrer" className={buttonClasses('secondary')}>
            <ExternalLink size={16} aria-hidden="true" />
            Open certificate
          </a>
        </div>
      </div>
    </div>
  );
}

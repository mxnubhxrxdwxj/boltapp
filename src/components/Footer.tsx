import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

const iconLinkClasses =
  'flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 text-navy-200 transition-all duration-300 hover:border-electric-400 hover:text-electric-200 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-300';

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-medium text-navy-100">Designed &amp; Built by {profile.name}.</p>
          <p className="mt-1 text-sm text-navy-400">Aspiring DevOps Engineer.</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLinkClasses}>
            <Github size={18} aria-hidden="true" />
          </a>
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLinkClasses}
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          ) : (
            <span aria-label="LinkedIn profile coming soon" className={`${iconLinkClasses} cursor-not-allowed border-dashed text-navy-500`}>
              <Linkedin size={18} aria-hidden="true" />
            </span>
          )}
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLinkClasses}>
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { profile } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="06" label="contact" title="Let's Connect" />
        </Reveal>

        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-navy-700 bg-navy-900/60 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-lg leading-relaxed text-navy-200">
                I am open to opportunities as a Junior DevOps Engineer, Linux Administrator or Cloud Engineer.
                Reach out and I will get back to you.
              </p>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-navy-400">Name</dt>
                  <dd className="mt-1 text-navy-100">{profile.name}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-navy-400">Email</dt>
                  <dd className="mt-1 break-all text-navy-100">{profile.email}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-4">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email Me
              </ButtonLink>
              <ButtonLink href={profile.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                <Github size={18} aria-hidden="true" />
                GitHub Profile
              </ButtonLink>
              <ButtonLink
                href={profile.linkedinUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <Linkedin size={18} aria-hidden="true" />
                {profile.linkedinUrl ? 'LinkedIn Profile' : 'LinkedIn Profile Coming Soon'}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

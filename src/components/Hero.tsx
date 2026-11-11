import { Download, FolderOpen } from 'lucide-react';
import ButtonLink from '@/components/ButtonLink';
import { assetUrl } from '@/lib/assets';
import { profile } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pb-20 pt-32 scroll-mt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-navy-300">
            <span className="text-success-400">manu@devops</span>
            <span className="text-navy-400">:</span>
            <span className="text-electric-300">~</span>
            <span className="text-navy-400">$ </span>
            whoami
            <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-electric-400" />
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-navy-50 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-electric-300">{profile.name}</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-navy-100 sm:text-2xl">{profile.title}</p>

          <p className="mt-4 font-mono text-sm text-electric-200/90 sm:text-base">{profile.tagline}</p>

          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-navy-300">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#projects">
              <FolderOpen size={18} aria-hidden="true" />
              View My Projects
            </ButtonLink>
            <ButtonLink href={assetUrl(profile.resumeFile)} download variant="secondary">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </ButtonLink>
          </div>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '150ms' }}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-electric-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-electric-400/60 bg-navy-900 shadow-glow">
              <img
                src={assetUrl(profile.photoFile)}
                alt="Portrait of Manu"
                className="h-full w-full object-cover object-top"
                width={1094}
                height={1050}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

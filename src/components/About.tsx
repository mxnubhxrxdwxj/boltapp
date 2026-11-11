import { Target } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/portfolio';

const focusAreas = [
  'Linux Administration',
  'Cloud Computing',
  'Server Infrastructure',
  'Automation',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="01" label="about" title="About Me" />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-700 bg-navy-900/60 p-8 sm:p-10">
              <div className="space-y-5 text-base leading-relaxed text-navy-200 sm:text-lg">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-2xl border border-navy-700 bg-navy-900/60 p-8 transition-all duration-300 hover:border-electric-500/50 hover:shadow-glow-soft">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-navy-50">
                <Target size={20} className="text-electric-300" aria-hidden="true" />
                Focus Areas
              </h3>
              <ul className="mt-6 space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-navy-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric-400" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

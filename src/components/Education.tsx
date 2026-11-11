import { GraduationCap, MapPin, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="04" label="education" title="Education" />
        </Reveal>

        <ol className="relative ml-3 space-y-10 border-l border-navy-700 sm:ml-4">
          {education.map((entry) => (
            <li key={entry.degree} className="relative pl-8 sm:pl-10">
              <span
                className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-electric-400 ring-4 ring-navy-950 shadow-glow"
                aria-hidden="true"
              />
              <Reveal>
                <div className="rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-all duration-300 hover:border-electric-500/50 hover:shadow-glow-soft sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-navy-50">
                      <GraduationCap size={22} className="shrink-0 text-electric-300" aria-hidden="true" />
                      {entry.degree}
                    </h3>
                    <span className="font-mono text-sm text-electric-200">{entry.period}</span>
                  </div>

                  <p className="mt-3 text-navy-100">{entry.institution}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-navy-300">
                    <MapPin size={14} aria-hidden="true" />
                    {entry.location}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-navy-200">
                        <Star size={14} className="mt-0.5 shrink-0 text-electric-400" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

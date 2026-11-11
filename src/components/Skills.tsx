import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="02" label="skills" title="Technical Skills" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="h-full">
              <div className="h-full rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-all duration-300 hover:border-electric-500/50 hover:shadow-glow-soft sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 ring-1 ring-electric-500/30">
                    <group.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-navy-50">{group.title}</h3>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-lg border border-navy-700 bg-navy-950/70 px-3 py-2.5 text-sm text-navy-100 transition-all duration-200 hover:border-electric-400/60 hover:text-electric-200"
                    >
                      <skill.icon
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-navy-300 transition-colors duration-200 group-hover/skill:text-electric-300"
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

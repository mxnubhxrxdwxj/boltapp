import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="03" label="projects" title="Projects" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

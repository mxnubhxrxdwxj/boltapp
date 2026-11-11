import { useState } from 'react';
import { ChevronDown, Github, Server } from 'lucide-react';
import ButtonLink from '@/components/ButtonLink';
import { buttonClasses } from '@/lib/buttonStyles';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<Project['status'], string> = {
  Completed: 'border-success-500/40 bg-success-500/10 text-success-400',
  'In Progress': 'border-warning-500/40 bg-warning-500/10 text-warning-400',
};

const storyLabels = [
  { key: 'situation', label: 'Situation' },
  { key: 'task', label: 'Task' },
  { key: 'action', label: 'Action' },
  { key: 'result', label: 'Result' },
] as const;

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/50 hover:shadow-glow-soft sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 ring-1 ring-electric-500/30">
          <Server size={22} aria-hidden="true" />
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-navy-50">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-navy-300">{project.description}</p>

      <div className="mt-6">
        <p className="font-mono text-xs uppercase tracking-wider text-navy-400">Technologies</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-navy-700 bg-navy-950/70 px-2.5 py-1 text-xs text-navy-100"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {expanded && (
        <dl className="mt-6 space-y-4 border-t border-navy-800 pt-6">
          {storyLabels.map(({ key, label }) => (
            <div key={key}>
              <dt className="font-mono text-xs uppercase tracking-wider text-electric-300">{label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-navy-200">{project[key]}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className={buttonClasses('secondary')}
        >
          {expanded ? 'Hide details' : 'View details'}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
        <ButtonLink
          href={project.repoUrl || undefined}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <Github size={16} aria-hidden="true" />
          {project.repoUrl ? 'GitHub Repository' : 'Repository Coming Soon'}
        </ButtonLink>
      </div>
    </article>
  );
}

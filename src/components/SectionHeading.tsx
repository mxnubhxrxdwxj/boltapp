interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
}

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-electric-300">
        <span className="text-navy-400">{index}</span> / {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-50 sm:text-4xl">{title}</h2>
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-electric-400 to-transparent" />
    </div>
  );
}

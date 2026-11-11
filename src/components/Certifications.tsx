import { useCallback, useState } from 'react';
import { Award, ExternalLink, Eye } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import CertificateModal from '@/components/CertificateModal';
import { assetUrl } from '@/lib/assets';
import { certifications, type Certification } from '@/data/portfolio';

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);
  const closeModal = useCallback(() => setActive(null), []);

  return (
    <section id="certifications" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="05" label="certifications" title="Certifications" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => {
            const src = assetUrl(certification.file);
            return (
              <Reveal key={certification.file} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/50 hover:shadow-glow-soft sm:p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300 ring-1 ring-electric-500/30">
                    <Award size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-navy-50">{certification.title}</h3>
                  <p className="mt-2 text-navy-200">{certification.course}</p>
                  <p className="mt-1 text-sm text-navy-400">
                    {certification.issuer} · {certification.date}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <button
                      type="button"
                      onClick={() => setActive(certification)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-electric-500 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                    >
                      <Eye size={16} aria-hidden="true" />
                      View Certificate
                    </button>
                    <ButtonLink href={src} target="_blank" rel="noopener noreferrer" variant="secondary">
                      <ExternalLink size={16} aria-hidden="true" />
                      Open PDF
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active && (
        <CertificateModal title={active.title} src={assetUrl(active.file)} onClose={closeModal} />
      )}
    </section>
  );
}

type ButtonVariant = 'primary' | 'secondary';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-electric-600 text-white shadow-sm hover:bg-electric-500 hover:shadow-glow',
  secondary:
    'border border-navy-600 bg-navy-900/60 text-navy-100 hover:border-electric-400 hover:bg-navy-800 hover:text-white',
};

export const buttonClasses = (variant: ButtonVariant = 'primary', extra = '') =>
  `${base} ${variants[variant]} ${extra}`.trim();

export const disabledButtonClasses = (extra = '') =>
  `${base} cursor-not-allowed border border-dashed border-navy-600 text-navy-400 ${extra}`.trim();

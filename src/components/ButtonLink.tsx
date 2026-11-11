import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { buttonClasses, disabledButtonClasses } from '@/lib/buttonStyles';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export default function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  if (!href) {
    return (
      <span aria-disabled="true" className={disabledButtonClasses(className)}>
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={buttonClasses(variant, className)} {...rest}>
      {children}
    </a>
  );
}

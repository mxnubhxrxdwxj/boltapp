import { useEffect, useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-navy-700 bg-navy-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm text-navy-100" onClick={closeMenu}>
          <Terminal size={18} className="text-electric-300" aria-hidden="true" />
          <span>
            manu<span className="text-navy-400">@</span>devops
            <span className="text-electric-300">:~$</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-navy-200 transition-colors duration-200 hover:bg-navy-800 hover:text-electric-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-navy-100 transition-colors hover:bg-navy-800 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="border-t border-navy-800 px-6 py-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-3 text-base text-navy-100 hover:bg-navy-800 hover:text-electric-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

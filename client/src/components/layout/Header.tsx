import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: "Home" },
    { href: '/servicos', label: "Serviços" },
    { href: '/orcamento', label: "Orçamento" },
    { href: '/videos-fotos', label: "Vídeos e Fotos" },
    { href: '/clientes-parceiros', label: "Clientes - Parceiros" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+551146478871" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              11 4647-8871
            </a>
            <a href="mailto:rsipan@gruporegren.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              rsipan@gruporegren.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img
              src="https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/0ced70c43d3545738a09dfdb6ba24766.jpg"
              alt="REGREN"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.href.replace('/', '') || 'home'}`}
              >
                <span
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer block ${
                    location === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-nav-${link.href.replace('/', '') || 'home'}`}
              >
                <span
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    location === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+551146478871" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 11 4647-8871
              </a>
              <a href="mailto:rsipan@gruporegren.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> rsipan@gruporegren.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

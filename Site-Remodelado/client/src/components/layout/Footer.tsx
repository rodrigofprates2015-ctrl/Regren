import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-industrial text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/0ced70c43d3545738a09dfdb6ba24766.jpg"
              alt="REGREN"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Há mais de 20 anos desenvolvendo soluções inovadoras de engenharia e manutenção industrial.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-link-home">Home</Link>
              <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-link-servicos">Serviços</Link>
              <Link href="/orcamento" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-link-orcamento">Orçamento</Link>
              <Link href="/videos-fotos" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-link-videos">Vídeos e Fotos</Link>
              <Link href="/clientes-parceiros" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-link-clientes">Clientes - Parceiros</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="tel:+551146478871" className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                11 4647-8871
              </a>
              <a href="mailto:rsipan@gruporegren.com" className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                rsipan@gruporegren.com
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                Seg - Sex: 08h às 18h
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-secondary">Localização</h4>
            <div className="flex items-start gap-3 text-sm text-gray-400 mb-4">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              <span>
                Rod. Alberto Hinoto 7072 – Galpão Nº 100<br />
                Bairro Cuiabá – CEP 08597-690<br />
                Itaquaquecetuba – SP
              </span>
            </div>
            <a
              href="https://goo.gl/maps/zcgexGCWE4Z8iJPx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-medium"
              data-testid="link-maps"
            >
              <MapPin className="w-4 h-4" />
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} REGREN Engenharia e Soluções Industriais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

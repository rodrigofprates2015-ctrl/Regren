import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Handshake,
  Star,
  Quote
} from 'lucide-react';

const clients = [
  { name: 'Indústria ABC', sector: 'Metalurgia' },
  { name: 'Empresa XYZ', sector: 'Automação' },
  { name: 'Grupo Industrial Beta', sector: 'Petroquímica' },
  { name: 'Manufatura Delta', sector: 'Automotivo' },
  { name: 'Corporação Omega', sector: 'Alimentícia' },
  { name: 'Indústrias Sigma', sector: 'Farmacêutica' },
  { name: 'Grupo Alfa', sector: 'Mineração' },
  { name: 'Empresa Gama', sector: 'Papel e Celulose' },
];

const partners = [
  { name: 'Fornecedor Premium', type: 'Fornecedor', description: 'Equipamentos e insumos de alta qualidade' },
  { name: 'Tech Solutions', type: 'Tecnologia', description: 'Soluções de automação e controle' },
  { name: 'Steel Masters', type: 'Matéria-prima', description: 'Aços especiais e ligas metálicas' },
  { name: 'Industrial Tools', type: 'Ferramentas', description: 'Ferramentaria de precisão' },
];

const testimonials = [
  {
    text: 'A REGREN superou nossas expectativas com um projeto de manutenção complexo. Profissionais extremamente competentes e comprometidos.',
    author: 'Carlos Silva',
    role: 'Gerente de Manutenção',
    company: 'Indústria ABC'
  },
  {
    text: 'Trabalhamos com a REGREN há mais de 5 anos. A qualidade dos serviços e o cumprimento dos prazos são impecáveis.',
    author: 'Maria Santos',
    role: 'Diretora de Operações',
    company: 'Grupo Industrial Beta'
  },
  {
    text: 'O projeto 3D desenvolvido pela equipe foi fundamental para a modernização da nossa linha de produção. Recomendo!',
    author: 'João Oliveira',
    role: 'Engenheiro Chefe',
    company: 'Manufatura Delta'
  }
];

const stats = [
  { value: '20+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Realizados' },
  { value: '100+', label: 'Clientes Atendidos' },
  { value: '98%', label: 'Satisfação' },
];

export default function ClientesParceiros() {
  return (
    <Layout>
      <section className="bg-industrial bg-noise py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 animate-slide-up">
              Clientes e <span className="text-secondary">Parceiros</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Conheça algumas das empresas que confiam em nosso trabalho e os parceiros que nos ajudam a entregar excelência.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="font-display font-bold text-4xl md:text-5xl text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Nossos Clientes</h2>
              <p className="text-muted-foreground">Empresas que confiam em nosso trabalho</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all border"
                data-testid={`client-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <Building2 className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Parceiros Estratégicos</h2>
              <p className="text-muted-foreground">Empresas que fazem parte do nosso ecossistema</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all bg-white"
                data-testid={`partner-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <Users className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                    {partner.type}
                  </span>
                  <h3 className="font-display font-bold text-lg mt-1 mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Depoimentos</h2>
              <p className="text-muted-foreground">O que nossos clientes dizem sobre nós</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg relative"
                data-testid={`testimonial-${index}`}
              >
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
                  <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                Quer fazer parte da nossa história?
              </h2>
              <p className="text-white/80">
                Entre em contato e descubra como podemos ajudar sua empresa.
              </p>
            </div>
            <Link href="/orcamento">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2 shrink-0" data-testid="button-cta-parceiros">
                Fale Conosco
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

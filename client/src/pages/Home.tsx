import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Cog, Wrench, Factory, Target, Shield, Award, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const highlights = [
    {
      icon: Cog,
      title: "Serviços",
      description: "Oferecemos soluções inovadoras de engenharia e manutenção com qualidade e flexibilidade."
    },
    {
      icon: Wrench,
      title: "Manutenção Industrial",
      description: "Oferecemos soluções inovadoras de engenharia e manutenção com qualidade e flexibilidade."
    },
    {
      icon: Factory,
      title: "Projetos Industriais",
      description: "Oferecemos soluções inovadoras de engenharia e manutenção com qualidade e flexibilidade."
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Missão',
      text: 'Oferecer serviços e soluções inovadoras de engenharia e manutenção com qualidade e flexibilidade, prestados com ética, respeito e honestidade.'
    },
    {
      icon: Shield,
      title: 'Política de Qualidade',
      text: 'Buscar a satisfação do cliente assegurando a qualidade e pontualidade nos serviços, aperfeiçoando os recursos humanos, buscando aprimoramento e melhoria contínua dos processos.'
    }
  ];

  return (
    <Layout>
      <section className="relative bg-industrial bg-noise min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--secondary))_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Há mais de 20 anos no mercado</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-up">
              Engenharia e Soluções Industriais com<br />
              <span className="text-secondary italic">Qualidade</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Oferecemos soluções inovadoras de engenharia e manutenção com qualidade e flexibilidade.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/orcamento">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2" data-testid="button-orcamento-hero">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/servicos">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold" data-testid="button-servicos-hero">
                  Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              O que <span className="text-primary">oferecemos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos tudo o que você precisa em soluções de reparos e Projetos Industriais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                data-testid={`card-highlight-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <Link href="/servicos" className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
                    Saiba mais <ChevronRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
              <img 
                src="https://yata-apix-4423ffda-6e06-49d1-9bba-1390402b9622.s3-object.locaweb.com.br/2d2430ada72b4811a3ee0c00dc787cd1.jpg"
                alt="Equipe REGREN em operação"
                className="relative rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Sobre a <span className="text-primary">REGREN</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Atuamos há mais de 20 anos desenvolvendo soluções com foco na Indústria, nas áreas de MANUTENÇÃO e PROJETOS, para redução de custo e aumento da confiabilidade e produtividade.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Elaboramos PROJETOS em 3D para customização de equipamentos conforme necessidade do nosso cliente. Contamos com uma infraestrutura robusta e equipe técnica preparada para atender o mercado dinâmico e competitivo.
              </p>
              <Link href="/servicos">
                <Button className="gap-2" data-testid="button-conhecer-servicos">
                  Conhecer nossos serviços
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {values.map((item, index) => (
              <Card 
                key={item.title} 
                className="border-l-4 border-l-secondary shadow-md"
                data-testid={`card-value-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
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
                Pronto para transformar sua indústria?
              </h2>
              <p className="text-white/80">
                Entre em contato e solicite um orçamento sem compromisso.
              </p>
            </div>
            <Link href="/orcamento">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2 shrink-0" data-testid="button-cta-orcamento">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

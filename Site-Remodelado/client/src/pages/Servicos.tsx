import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Settings, 
  Wrench, 
  Zap, 
  Cpu, 
  Cog,
  PenTool,
  DraftingCompass,
  Layers,
  Factory,
  CheckCircle2
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/1c0c21de4543429db44d4fa4d8e1319f.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/82948ec378ab4355bfaf7baf8deeb9e3.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/7f94b76f061e4b5fa955215f4ba5ad67.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/b7e15e153bfe4f2287ae831f29ffbeb7.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/1f15508fe8894a469a32515535ef18ec.png",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/1cc5169cf4944e8ab9317037c9e3727f.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/609e12296f8d407a8232c4d024efc60c.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/7a22f4b109bb48eca3833ec5eb4737e8.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/ea491b1c35dd48d6a7c15d071f09cb90.jpg",
  "https://yata-apix-8c3dfe57-abcf-4b2a-99a6-196809bbe497.s3-object.locaweb.com.br/2faf9b487a52423f9d708d9dff979ce8.jpg"
];

const maintenanceServices = [
  {
    title: 'Recuperação e fabricação de engrenagens.',
    icon: Cog
  },
  {
    title: 'Manutenção em redutores de velocidade diversas marcas e modelos do mercado.',
    icon: Settings
  },
  {
    title: 'Manutenção em bombas (lobolo, acoplamento magnético, centrífuga, engrenagem, pneumática, entre outras).',
    icon: Factory
  },
  {
    title: 'Usinagem em geral.',
    icon: Layers
  },
  {
    title: 'Reforma e fabricação de máquinas para envase.',
    icon: Wrench
  }
];

const projectServices = [
  {
    title: 'Projetos Mecânicos em 2D e 3D - Software Inventor - Autodesk',
    icon: DraftingCompass
  },
  {
    title: 'Integração de sistemas, projetos e programação de CLP Software.',
    icon: Cpu
  },
  {
    title: 'Projetos Elétricos (Industrial).',
    icon: Zap
  },
  {
    title: 'Projetos de otimização de processos industriais.',
    icon: PenTool
  },
  {
    title: 'Projetos especiais e fabricação própria de bomba de engrenagem.',
    icon: Settings
  }
];

import { useTranslation } from 'react-i18next';

export default function Servicos() {
  return (
    <Layout>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluções completas em engenharia e manutenção industrial com foco em excelência e resultados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Manutenção Industrial Section */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-primary/20">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display font-bold text-3xl text-foreground">
                  Manutenção Industrial
                </h2>
              </div>
              
              <div className="grid gap-6">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-foreground font-medium text-lg leading-snug">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projetos Industriais Section */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-primary/20">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <DraftingCompass className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-3xl text-foreground leading-none mb-2">
                    Projetos Industriais
                  </h2>
                  <p className="text-primary font-medium text-sm uppercase tracking-wider">
                    Customização conforme necessidade
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {projectServices.map((service, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-foreground font-medium text-lg leading-snug">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousels Section */}
          <div className="space-y-24">
            {/* Projetos Carousel */}
            <div className="bg-muted rounded-3xl p-12 shadow-inner">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  Portfólio de Projetos
                </h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
              </div>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                        <img 
                          src={image} 
                          alt={`Projetos - Regren ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-white text-primary hover:bg-primary hover:text-white -left-16 border-none shadow-lg" />
                <CarouselNext className="hidden md:flex bg-white text-primary hover:bg-primary hover:text-white -right-16 border-none shadow-lg" />
              </Carousel>
            </div>

            {/* Manutenção Carousel */}
            <div className="bg-muted rounded-3xl p-12 shadow-inner">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  Trabalhos de Manutenção
                </h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
              </div>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                        <img 
                          src={image} 
                          alt={`Manutenção - Regren ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-white text-primary hover:bg-primary hover:text-white -left-16 border-none shadow-lg" />
                <CarouselNext className="hidden md:flex bg-white text-primary hover:bg-primary hover:text-white -right-16 border-none shadow-lg" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Precisa de um serviço específico?
              </h2>
              <p className="text-muted-foreground">
                Entre em contato conosco para discutir sua necessidade e receber um orçamento personalizado.
              </p>
            </div>
            <Link href="/orcamento">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 gap-2 shrink-0" data-testid="button-orcamento-servicos">
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

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function Orcamento() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <section className="bg-industrial bg-noise py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 animate-slide-up">
              Solicite um <span className="text-secondary">Orçamento</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12 animate-fade-in">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-3">Mensagem Enviada!</h3>
                      <p className="text-muted-foreground">
                        Obrigado pelo contato. Nossa equipe retornará em breve.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Seu nome"
                            data-testid="input-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="seu@email.com"
                            data-testid="input-email"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(11) 99999-9999"
                            data-testid="input-phone"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nome da empresa"
                            data-testid="input-company"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Orçamento para manutenção"
                          data-testid="input-subject"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Descreva sua necessidade..."
                          data-testid="input-message"
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full gap-2" data-testid="button-submit">
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <a href="tel:+551146478871" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors" data-testid="contact-phone">
                      <Phone className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>11 4647-8871</span>
                    </a>
                    <a href="mailto:rsipan@gruporegren.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors" data-testid="contact-email">
                      <Mail className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>rsipan@gruporegren.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>Seg - Sex: 08h às 18h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg mb-4">Localização</h3>
                  <div className="flex items-start gap-3 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
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
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                    data-testid="link-maps-orcamento"
                  >
                    <MapPin className="w-4 h-4" />
                    Abrir no Google Maps
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg mb-3">Por que escolher a REGREN?</h3>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      Mais de 20 anos de experiência
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      Equipe técnica qualificada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      Infraestrutura robusta
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      Preço justo e competitivo
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

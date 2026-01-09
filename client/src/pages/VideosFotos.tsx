import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  X,
  ZoomIn,
  Image as ImageIcon,
  Video
} from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Usinagem CNC de Precisão',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop',
    description: 'Demonstração do nosso processo de usinagem CNC'
  },
  {
    id: 2,
    title: 'Montagem Industrial',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    description: 'Equipe realizando montagem de linha de produção'
  },
  {
    id: 3,
    title: 'Manutenção Preventiva',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
    description: 'Procedimentos de manutenção preventiva'
  },
  {
    id: 4,
    title: 'Caldeiraria Industrial',
    thumbnail: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&h=400&fit=crop',
    description: 'Fabricação de estruturas metálicas'
  },
  {
    id: 5,
    title: 'Projetos 3D',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    description: 'Visualização de projetos em 3D'
  }
];

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    title: 'Equipamentos CNC',
    category: 'Instalações'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
    title: 'Linha de Produção',
    category: 'Instalações'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
    title: 'Manutenção Industrial',
    category: 'Serviços'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=600&fit=crop',
    title: 'Soldagem Especializada',
    category: 'Serviços'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    title: 'Automação Industrial',
    category: 'Projetos'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    title: 'Instrumentação',
    category: 'Projetos'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=600&fit=crop',
    title: 'Galpão Industrial',
    category: 'Instalações'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    title: 'Projeto Customizado',
    category: 'Projetos'
  }
];

export default function VideosFotos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'videos' | 'fotos'>('videos');

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <Layout>
      <section className="bg-industrial bg-noise py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 animate-slide-up">
              Vídeos e <span className="text-secondary">Fotos</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Conheça nossas instalações, equipamentos e alguns dos nossos projetos realizados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Button
              variant={activeTab === 'videos' ? 'default' : 'outline'}
              onClick={() => setActiveTab('videos')}
              className="gap-2"
              data-testid="tab-videos"
            >
              <Video className="w-4 h-4" />
              Vídeos
            </Button>
            <Button
              variant={activeTab === 'fotos' ? 'default' : 'outline'}
              onClick={() => setActiveTab('fotos')}
              className="gap-2"
              data-testid="tab-fotos"
            >
              <ImageIcon className="w-4 h-4" />
              Fotos
            </Button>
          </div>
        </div>
      </section>

      {activeTab === 'videos' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
                Galeria de <span className="text-primary">Vídeos</span>
              </h2>
              <p className="text-muted-foreground">
                Assista aos vídeos dos nossos trabalhos e processos industriais
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gray-900">
                    <img
                      src={videos[currentVideoIndex].thumbnail}
                      alt={videos[currentVideoIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        className="w-20 h-20 rounded-full bg-secondary/90 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                        data-testid="button-play-video"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="font-display font-bold text-xl text-white mb-1">
                        {videos[currentVideoIndex].title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {videos[currentVideoIndex].description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
                data-testid="button-prev-video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
                data-testid="button-next-video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto pb-4">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`shrink-0 relative rounded-lg overflow-hidden transition-all ${
                    index === currentVideoIndex 
                      ? 'ring-4 ring-secondary scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  data-testid={`video-thumb-${index}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-32 h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'fotos' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
                Galeria de <span className="text-primary">Fotos</span>
              </h2>
              <p className="text-muted-foreground">
                Explore imagens das nossas instalações e projetos
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer gallery-item"
                  onClick={() => setSelectedPhoto(photo)}
                  data-testid={`photo-${index}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{photo.title}</p>
                      <p className="text-gray-300 text-xs">{photo.category}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          {selectedPhoto && (
            <div className="relative">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-display font-bold text-xl">{selectedPhoto.title}</h3>
                <p className="text-gray-300">{selectedPhoto.category}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                data-testid="button-close-photo"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

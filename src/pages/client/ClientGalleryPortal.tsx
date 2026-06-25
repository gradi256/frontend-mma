import { useState } from "react";
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  MessageSquare, 
  Grid, 
  List, 
  SlidersHorizontal,
  Plus,
  Compass,
  Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ClientGalleryPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Peinture", "Sculpture", "Photographie", "Tissage"];

  const artworks = [
    {
      id: 1,
      title: "Le Penseur du Terroir",
      category: "Sculpture",
      artist: "Atelier Gradi",
      price: "450 $",
      description: "Une pièce sculptée à la main dans du bois précieux, reflétant la sagesse et les coutumes ancestrales locales.",
      image: "/art1.jpg",
      available: true
    },
    {
      id: 2,
      title: "Reflets du Fleuve Congo",
      category: "Peinture",
      artist: "Atelier Gradi",
      price: "380 $",
      description: "Huile sur toile capturant les nuances chromatiques et les mouvements mystiques du fleuve au coucher du soleil.",
      image: "/art2.jpg",
      available: true
    },
    {
      id: 3,
      title: "Lumières de Kinshasa",
      category: "Photographie",
      artist: "Studio kusanika",
      price: "150 $",
      description: "Cliché urbain en édition limitée imprimé sur papier d'art, saisissant l'énergie vibrante des nuits de la capitale.",
      image: "/art3.jpg",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col antialiased">
      <header className="h-16 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center font-black text-white text-sm tracking-tighter">K</div>
          <span className="font-bold tracking-tight font-heading text-lg text-white">kusanika</span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative text-zinc-400 hover:text-white rounded-xl">
            <Heart className="w-5 h-5" />
          </Button>
          <Button className="h-10 px-4 text-xs font-bold gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 rounded-xl transition-all shadow-md shadow-black/20">
            <ShoppingBag className="w-4 h-4" /> Panier d'art
          </Button>
        </div>
      </header>

      <div className="relative w-full h-[45vh] sm:h-[40vh] flex flex-col justify-center p-6 sm:p-12 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/6722180-uhd_2160_3840_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Collection exclusive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
            Découvrez et acquérez des œuvres d'art uniques
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed">
            Entrez en relation directe avec les artisans de la communauté kusanika. Explorez des pièces d'exception authentiques et certifiées sans aucun intermédiaire.
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
        <aside className="w-60 shrink-0 space-y-6 hidden lg:block">
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filtrer par art
            </h3>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat 
                      ? "bg-primary text-white font-bold shadow-md shadow-primary/20" 
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <Input 
                placeholder="Rechercher une œuvre, un style, un artisan..." 
                className="pl-9 h-11 text-xs w-full bg-zinc-900 border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-primary rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" size="icon" className="h-11 w-11 border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white rounded-xl"><Grid className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="h-11 w-11 border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white rounded-xl"><List className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <Card key={art.id} className="group overflow-hidden border-zinc-800/80 bg-zinc-900 shadow-xl flex flex-col justify-between rounded-2xl transition-all hover:translate-y-[-4px]">
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/50">
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">
                    Image de l'œuvre
                  </div>
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-zinc-950/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-destructive transition-colors border border-zinc-800/40">
                    <Heart className="w-4 h-4" />
                  </button>
                  {!art.available && (
                    <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xs flex items-center justify-center">
                      <Badge variant="destructive" className="text-[10px] uppercase font-black tracking-widest px-3 py-1 bg-red-950 text-red-400 border border-red-800/30 rounded-md">
                        Indisponible
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-5 space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black tracking-widest text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">{art.category}</span>
                    <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                      <Compass className="w-3 h-3 text-zinc-500" /> {art.artist}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="text-base font-bold tracking-tight text-white line-clamp-1">
                      {art.title}
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-normal">
                      {art.description}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0 flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full border-t border-zinc-800/60 pt-4">
                    <span className="text-xs text-zinc-500 font-medium">Prix d'acquisition</span>
                    <span className="text-lg font-black text-white tracking-tight">{art.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 w-full pt-1">
                    <Button 
                      disabled={!art.available}
                      variant="outline" 
                      className="h-10 text-xs font-bold border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl gap-1.5 transition-all disabled:opacity-40"
                    >
                      <Plus className="w-3.5 h-3.5" /> Au panier
                    </Button>
                    <Button 
                      disabled={!art.available}
                      className="h-10 text-xs font-bold bg-primary hover:bg-primary-hover text-white gap-1.5 shadow-md shadow-primary/10 rounded-xl transition-all disabled:opacity-40"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Commander
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
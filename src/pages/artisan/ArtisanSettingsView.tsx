import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Camera, Save, Shield, HelpCircle, Palette } from "lucide-react";

export const ArtisanSettingsView = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-heading">Mon Profil & Paramètres</h1>
        <p className="text-sm text-muted-foreground">Mettez à jour vos informations publiques, coordonnées et identifiants de sécurité.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/60 bg-card shadow-xs">
            <div className="p-6 border-b border-border/40">
              <h2 className="text-base font-bold tracking-tight flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Informations Publiques
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Ces détails seront affichés sur votre vitrine kusanika.</p>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Nom d'artisan ou d'atelier</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="Atelier Gradi" className="pl-9 h-10 text-xs rounded-xl" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Spécialité principale</label>
                  <div className="relative">
                    <Palette className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="Sculpture & Peinture Traditionnelle" className="pl-9 h-10 text-xs rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Biographie / Description de l'atelier</label>
                <Textarea 
                  defaultValue="Création de pièces d'art uniques inspirées du patrimoine culturel africain. Chaque œuvre raconte une histoire sculptée ou peinte à la main."
                  className="text-xs rounded-xl min-h-25 leading-relaxed" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Localisation de l'atelier</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="Gombe, Kinshasa, RDC" className="pl-9 h-10 text-xs rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card shadow-xs">
            <div className="p-6 border-b border-border/40">
              <h2 className="text-base font-bold tracking-tight flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> Contact & Ventes directes
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Canaux utilisés par les clients pour passer les commandes de votre panier.</p>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Adresse Email professionnelle</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="contact@ateliergradi.com" type="email" className="pl-9 h-10 text-xs rounded-xl" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Numéro WhatsApp Business</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="+243 812 345 678" type="tel" className="pl-9 h-10 text-xs rounded-xl" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card shadow-xs">
            <div className="p-6 border-b border-border/40">
              <h2 className="text-base font-bold tracking-tight flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" /> Sécurité du compte
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Modifiez votre mot de passe pour sécuriser vos accès.</p>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Nouveau mot de passe</label>
                  <Input type="password" placeholder="••••••••" className="h-10 text-xs rounded-xl" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Confirmer le mot de passe</label>
                  <Input type="password" placeholder="••••••••" className="h-10 text-xs rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline" className="h-10 text-xs rounded-xl px-4 border-zinc-700/50">Annuler</Button>
            <Button className="h-10 text-xs rounded-xl px-4 font-bold bg-primary hover:bg-primary-hover gap-1.5 shadow-sm">
              <Save className="w-4 h-4" /> Enregistrer les modifications
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-border/60 bg-card shadow-xs text-center">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-tight">Visuel de la boutique</h3>
                <p className="text-[11px] text-muted-foreground">Format carré recommandé (JPG ou PNG).</p>
              </div>

              <div className="relative w-32 h-32 mx-auto group">
                <div className="w-full h-full rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-3xl text-primary overflow-hidden">
                  GK
                </div>
                <button className="absolute inset-0 bg-black/60 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer gap-1">
                  <Camera className="w-4 h-4" />
                  <span className="text-[9px] font-medium tracking-wide uppercase">Changer</span>
                </button>
              </div>

              <div className="bg-muted/40 p-3 rounded-xl border border-border/40 text-left space-y-1">
                <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Statut Vitrine</span>
                <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Certifié & En ligne
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dashed border-border bg-muted/20 p-5 rounded-2xl flex gap-3 items-start">
            <HelpCircle className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold">Besoin d'aide ?</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Pour modifier vos coordonnées bancaires ou l'intitulé de votre micro-entreprise, veuillez contacter le support kusanika.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
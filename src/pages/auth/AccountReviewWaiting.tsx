import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { 
  ShieldCheck, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  Paintbrush, 
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AccountReviewWaiting = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row w-full overflow-hidden">
      
      <div className="relative w-full lg:w-[40%] min-h-[40vh] lg:min-h-screen flex flex-col justify-center p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/6722180-uhd_2160_3840_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 space-y-4 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white">Vérification en cours</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
            Création de votre univers créatif.
          </h2>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Nous préparons votre vitrine et sécurisons votre profil d'artisan pour vous garantir la meilleure expérience sur Mwana Mbok'Art.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col items-center justify-center bg-background px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-md text-center space-y-8">
          
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-muted/50 border border-border mx-auto shadow-inner overflow-hidden animate-pulse">
            <img 
              src="/LOGO.png" 
              alt="Mwana Mbok'Art" 
              className="w-full h-full object-cover p-2"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground font-heading">
              Analyse de votre profil
            </h1>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
              Vos informations et vos choix d'abonnement sont en cours de validation par notre équipe de modération.
            </p>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-xs">
            <CardContent className="pt-6 space-y-6">
              
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="relative flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-primary animate-spin" />
                  <Paintbrush className="w-4 h-4 text-primary absolute" />
                </div>
                <span className="text-xs font-medium text-muted-foreground animate-pulse mt-2">
                  Configuration de la galerie numérique...
                </span>
              </div>

              <div className="space-y-2">
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                  <span>Analyse des pièces</span>
                  <span>{progress}%</span>
                </div>
              </div>

              <div className="border-t border-border/60 pt-4 grid grid-cols-2 gap-4 text-left">
                <div className="flex gap-2.5 items-start">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">Temps estimé</p>
                    <p className="text-[11px] text-muted-foreground">Moins de 30 minutes</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">Notification</p>
                    <p className="text-[11px] text-muted-foreground">E-mail envoyé dès validation</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="h-10 text-xs font-medium"
            >
              <RefreshCw className="mr-2 w-3.5 h-3.5" /> Actualiser le statut
            </Button>
            
            <div className="inline-flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-lg border border-border">
              <AlertCircle className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>Vous pouvez quitter cette page en toute sécurité.</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Une question ou un problème ?{" "}
              <NavLink to="/support" className="font-semibold text-primary hover:underline underline-offset-4">
                Contacter le support
              </NavLink>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
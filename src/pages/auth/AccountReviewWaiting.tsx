import { NavLink } from "react-router";
import { 
  ShieldCheck, 
  ArrowRight,
  AlertCircle,
  Inbox
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AccountReviewWaiting = () => {
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
            <span className="text-xs font-semibold text-white">Inscription enregistrée</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
            Votre dossier est entre nos mains.
          </h2>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Nous analysons votre profil avec soin pour garantir l'authenticité et la sécurité de notre communauté d'artisans.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col items-center justify-center bg-background px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-md text-center space-y-8">
          
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-muted/50 border border-border mx-auto shadow-inner overflow-hidden">
            <img 
              src="/LOGO.png" 
              alt="Mwana Mbok'Art" 
              className="w-full h-full object-cover p-2"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground font-heading">
              Merci pour votre confiance
            </h1>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
              Vos informations ont été transmises avec succès à notre équipe de modération.
            </p>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-xs">
            <CardContent className="pt-6 space-y-5">
              
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Inbox className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold mt-2">Vérification par e-mail</p>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed px-2">
                Dès que vos informations seront vérifiées et votre compte validé (sous un délai maximum de 30 minutes), vous recevrez un **lien d'activation par e-mail** pour ouvrir officiellement votre vitrine.
              </p>

              <div className="border-t border-border/60 pt-4 flex gap-3 items-start text-left bg-muted/20 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Pensez à vérifier votre dossier **Courriers indésirables (Spam)** si vous ne recevez rien d'ici 30 minutes.
                </p>
              </div>

            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <NavLink to="/#" className="w-full">
              <Button className="w-full h-10 text-xs font-medium shadow-lg shadow-primary/20">
                Retour à l'accueil <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </NavLink>
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Besoin d'aide immédiate ?{" "}
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
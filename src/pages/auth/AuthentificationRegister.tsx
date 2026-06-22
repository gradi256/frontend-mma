import { NavLink } from "react-router";
import { Paintbrush, ShoppingBag, ArrowRight } from "lucide-react";

export const AuthentificationRegister = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row w-full overflow-hidden">
      
      {/* SECTION GAUCHE : 2/5 de la page avec la vidéo et le texte */}
      <div className="relative w-full lg:w-[40%] min-h-[40vh] lg:min-h-screen flex flex-col justify-end p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/6192903-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 lg:bg-linear-to-r lg:from-transparent lg:to-background/10" />
          <div className="absolute inset-0 bg-black/40 lg:hidden" /> 
        </div>

        <div className="relative z-10 space-y-3 text-white lg:text-foreground">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight font-heading text-white lg:text-primary">
            L'art de notre terroir, à portée de clic.
          </h2>
          <p className="text-sm text-zinc-200 lg:text-muted-foreground max-w-md leading-relaxed">
            Découvrez des œuvres uniques, rencontrez des créateurs passionnés et plongez dans l'univers de Mwana Mbok'Art.
          </p>
        </div>
      </div>

      {/* SECTION DROITE : 3/5 de la page pour les boutons et l'authentification */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 bg-card lg:bg-background">
        <div className="w-full max-w-md space-y-8">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-muted/50 border border-border overflow-hidden shadow-inner">
              <img 
                src="/LOGO.png" 
                alt="Mwana Mbok'Art" 
                className="w-full h-full object-cover p-1.5"
              
              />
            </div>
            
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-foreground font-heading">
                Créer un compte
              </h1>
              <p className="text-sm text-muted-foreground">
                Sélectionnez le type de compte pour commencer.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            
            {/* Option 1 : Artisan */}
            <NavLink
              to="/auth/auth-register/artisan"
              className="group relative flex items-start gap-4 p-5 rounded-xl border border-border bg-card lg:bg-card transition-all duration-200 hover:border-primary hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            >
              <div className="flex p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform duration-200">
                <Paintbrush className="w-5 h-5" />
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200">
                  Devenir Artisan
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Créez votre vitrine, gérez vos abonnements et exposez vos œuvres d'art au monde entier.
                </p>
              </div>
              
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </NavLink>

            {/* Option 2 : Client */}
            <NavLink
              to="#"
              className="group relative flex items-start gap-4 p-5 rounded-xl border border-border bg-card lg:bg-card transition-all duration-200 hover:border-accent hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            >
              <div className="flex p-3 rounded-lg bg-accent text-accent-foreground group-hover:scale-105 transition-transform duration-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-base text-foreground group-hover:text-accent-foreground transition-colors duration-200">
                  Créer un compte Client
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Explorez la galerie d'art, suivez vos artistes préférés et passez vos commandes en toute sécurité.
                </p>
              </div>
              
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-1 transition-all duration-200" />
            </NavLink>

          </div>

          <div className="text-center lg:text-left pt-2">
            <p className="text-xs text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <NavLink to="/#" className="font-medium text-primary hover:underline underline-offset-4">
                Se connecter
              </NavLink>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
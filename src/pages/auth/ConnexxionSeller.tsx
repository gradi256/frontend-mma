import { useState } from "react";
import { NavLink } from "react-router";
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const ConnexxionSeller = () => {
  const [view, setView] = useState<"login" | "forgot" | "reset">("login");
  const [showPassword, setShowPassword] = useState(false);

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
          <div className="absolute inset-0 bg-black/50 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 space-y-4 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">Accès Sécurisé</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
            Ravis de vous revoir parmi nous.
          </h2>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Connectez-vous pour gérer votre galerie, suivre vos ventes et interagir avec vos collectionneurs.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col items-center justify-center bg-background px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-md">
          
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-10">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-muted/50 border border-border overflow-hidden shadow-inner">
              <img 
                src="/LOGO.png" 
                alt="Mwana Mbok'Art" 
                className="w-full h-full object-cover p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-foreground font-heading">
                {view === "login" && "Espace Artisan"}
                {view === "forgot" && "Mot de passe oublié"}
                {view === "reset" && "Réinitialisation"}
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                {view === "login" && "Saisissez vos identifiants pour accéder à votre tableau de bord."}
                {view === "forgot" && "Entrez votre e-mail pour recevoir un lien de récupération."}
                {view === "reset" && "Créez un nouveau mot de passe sécurisé pour votre compte."}
              </p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            {view === "login" && (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Adresse e-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="login-email"
                      type="email" 
                      className="pl-10 h-11"
                      placeholder="artisan@mwanambokart.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="login-password">Mot de passe</Label>
                    <button 
                      type="button"
                      onClick={() => setView("forgot")}
                      className="text-xs font-semibold text-primary hover:underline underline-offset-4"
                    >
                      Oublié ?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="login-password"
                      type={showPassword ? "text" : "password"} 
                      className="pl-10 pr-10 h-11"
                      placeholder="••••••••" 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full h-12 text-sm font-bold shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  Se connecter <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {view === "forgot" && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="forgot-email">Votre e-mail de récupération</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="forgot-email"
                      type="email" 
                      className="pl-10 h-11"
                      placeholder="votre@email.com" 
                    />
                  </div>
                </div>

                <Button 
                  type="button"
                  onClick={() => setView("reset")}
                  className="w-full h-12 text-sm font-bold"
                >
                  Envoyer le lien <RefreshCw className="ml-2 w-4 h-4" />
                </Button>

                <button 
                  type="button"
                  onClick={() => setView("login")}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour à la connexion
                </button>
              </div>
            )}

            {view === "reset" && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nouveau mot de passe</Label>
                  <Input 
                    id="new-password"
                    type="password" 
                    className="h-11"
                    placeholder="••••••••" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input 
                    id="confirm-password"
                    type="password" 
                    className="h-11"
                    placeholder="••••••••" 
                  />
                </div>

                <Button 
                  type="button"
                  onClick={() => setView("login")}
                  className="w-full h-12 text-sm font-bold"
                >
                  Réinitialiser mon accès <ShieldCheck className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

          </form>

          {view === "login" && (
            <div className="mt-8 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                Pas encore de vitrine ?{" "}
                <NavLink to="/auth/auth-register/artisan" className="text-primary font-bold hover:underline underline-offset-4">
                  Devenir Artisan
                </NavLink>
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
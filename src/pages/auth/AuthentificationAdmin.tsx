import { useState } from "react";
import { NavLink } from "react-router";
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight,
  ShieldCheck,
  Terminal
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export const AuthentificationAdmin = () => {
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
          <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 space-y-4 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">Zone Sécurisée</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
            Administration Plateforme
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Accès strictement réservé au personnel autorisé pour la gestion du système kusanika, la modération des comptes et le suivi analytique.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col items-center justify-center bg-background px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-md">
          
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-8">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-muted/50 border border-border overflow-hidden shadow-inner">
              <img 
                src="/LOGO.png" 
                alt="Mwana Mbok'Art" 
                className="w-full h-full object-cover p-2 animate-pulse"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-foreground font-heading">
                Connexion Super-Admin
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                Authentifiez-vous pour ouvrir une session administrative sécurisée.
              </p>
            </div>
          </div>

          <Alert variant="destructive" className="mb-6 bg-red-500/5 border-red-500/20 text-red-500">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            <AlertTitle className="text-xs font-bold uppercase tracking-wider">Avertissement de Sécurité</AlertTitle>
            <AlertDescription className="text-xs opacity-90">
              Toutes les connexions et actions au sein de cette interface sont journalisées. Les tentatives d'accès non autorisées seront immédiatement bloquées.
            </AlertDescription>
          </Alert>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            <div className="space-y-2">
              <Label htmlFor="admin-username">Identifiant / Matricule</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="admin-username"
                  type="text" 
                  className="pl-10 h-11 border-zinc-700/50 focus-visible:ring-red-500"
                  placeholder="ADM-2026-XXXX" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password">Clé d'accès de sécurité</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="admin-password"
                  type={showPassword ? "text" : "password"} 
                  className="pl-10 pr-10 h-11 border-zinc-700/50 focus-visible:ring-red-500"
                  placeholder="••••••••••••••••" 
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
              className="w-full h-12 text-sm font-bold bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all"
            >
              Initialiser la session <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

          </form>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <NavLink to="/#" className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              Retour au portail public
            </NavLink>
          </div>

        </div>
      </div>

    </div>
  );
};
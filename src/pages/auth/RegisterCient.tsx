import { useState } from "react";
import { NavLink } from "react-router";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShoppingBag, 
  Check, 
  Eye, 
  EyeOff,
  User,
  MapPin,
  Lock,
  Phone
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RegisterClient = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between w-full mb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            step >= i ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground"
          }`}>
            {step > i ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{i}</span>}
          </div>
          {i < 3 && (
            <div className={`w-12 sm:w-24 h-0.5 mx-2 ${step > i ? "bg-primary" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row w-full overflow-hidden">
      
      <div className="relative w-full lg:w-[40%] min-h-[40vh] lg:min-h-screen flex flex-col justify-center p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src="/about_vid1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 space-y-4 max-w-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md">
            <ShoppingBag className="w-4 h-4 text-accent-foreground" />
            <span className="text-xs font-semibold text-white">Espace Client</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Acquérez des pièces uniques d'exception.
          </h2>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Rejoignez notre communauté de passionnés d'art, soutenez les artisans locaux et sécurisez vos coups de cœur.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[60%] flex flex-col items-center bg-background px-6 py-12 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-lg">
          
          <div className="flex flex-col space-y-6 mb-10">
            <NavLink 
              to="/#" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" /> Retour
            </NavLink>
            
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Créer votre compte Client
              </h1>
              <p className="text-muted-foreground mt-2">
                Étape {step} sur 3 : {
                  step === 1 ? "Informations personnelles" : 
                  step === 2 ? "Origine & Contact" : 
                  "Sécurité du compte"
                }
              </p>
            </div>
          </div>

          {renderStepIndicator()}

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <User className="w-5 h-5" />
                  <span>Vos informations</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" placeholder="Kasanika" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" placeholder="Gradi" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Sexe</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">Homme</SelectItem>
                      <SelectItem value="F">Femme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>Où vous situez-vous ?</span>
                </div>
                <div className="space-y-2">
                  <Label>Pays de résidence</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un pays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CD">RD Congo</SelectItem>
                      <SelectItem value="CG">Congo Brazzaville</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="phone" type="tel" className="pl-10" placeholder="+243 890 000 000" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <Lock className="w-5 h-5" />
                  <span>Accès sécurisé</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input id="email" type="email" placeholder="gradi.kusanika@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"} 
                      className="pr-10" 
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
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-10"
                >
                  Précédent
                </Button>
              )}
              {step < 3 ? (
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="flex-1 h-10"
                >
                  Continuer <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  type="submit"
                  className="flex-1 h-10 shadow-lg shadow-primary/20"
                >
                  Créer mon compte
                </Button>
              )}
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Déjà membre ? <NavLink to="/auth/auth-connexion/client" className="text-primary font-semibold hover:underline underline-offset-4">Se connecter</NavLink>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
import { useState } from "react";
import { NavLink } from "react-router";
import { 
  ArrowLeft, 
  ArrowRight, 
  Paintbrush, 
  Check, 
  Upload, 
  Eye, 
  EyeOff,
  User,
  MapPin,
  Camera,
  Lock
} from "lucide-react";

export const RegisterSeller = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between w-full mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            step >= i ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground"
          }`}>
            {step > i ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">{i}</span>}
          </div>
          {i < 4 && (
            <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > i ? "bg-primary" : "bg-border"}`} />
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
            src="/6722180-uhd_2160_3840_25fps.mp4"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
            <Paintbrush className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white">Espace Artisan</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Partagez votre héritage avec le monde.
          </h2>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Mwana Mbok' Art vous offre les outils nécessaires pour transformer votre talent en une entreprise prospère.
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
                Inscription Artisan
              </h1>
              <p className="text-muted-foreground mt-2">
                Étape {step} sur 4 : {
                  step === 1 ? "Identité personnelle" : 
                  step === 2 ? "Localisation & Contact" : 
                  step === 3 ? "Votre univers artistique" : 
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
                  <span>Qui êtes-vous ?</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nom</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Kasanji" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Prénom</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Dieudonné" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium leading-none">Pseudonyme d'artiste</label>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Optionnel</span>
                  </div>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="El_Sculpto" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>Où vous situons-nous ?</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Pays</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Choisir</option>
                      <option value="CD">RD Congo</option>
                      <option value="CG">Congo Brazza</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Sexe</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Choisir</option>
                      <option value="M">Homme</option>
                      <option value="F">Femme</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Numéro WhatsApp</label>
                  <input type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="+243 890 000 000" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <Camera className="w-5 h-5" />
                  <span>Votre Vitrine</span>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl border bg-muted/20">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-border flex items-center justify-center bg-background group-hover:border-primary transition-colors cursor-pointer overflow-hidden">
                      <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Photo de profil</p>
                    <p className="text-xs text-muted-foreground">Format carré recommandé. Optionnel.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium leading-none">Biographie</label>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Optionnel</span>
                  </div>
                  <textarea rows={4} className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Décrivez votre passion artistique en quelques mots..." />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <Lock className="w-5 h-5" />
                  <span>Accès au compte</span>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Adresse e-mail</label>
                  <input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="artisan@mwanambokart.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Mot de passe</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
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
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Précédent
                </button>
              )}
              {step < 4 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Continuer <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              ) : (
                <button 
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shadow-lg shadow-primary/20"
                >
                  Finaliser l'inscription
                </button>
              )}
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Déjà inscrit ? <NavLink to="/#" className="text-primary font-semibold hover:underline underline-offset-4">Se connecter</NavLink>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
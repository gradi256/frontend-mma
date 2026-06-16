import { ShieldCheck, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Stats } from "./Stats"

export const Hero = () => {
  return (
    <section className="dark relative flex min-h-[85vh] items-center overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8">
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="HERO.mp4"
          className="h-full w-full object-cover opacity-55"
        ></video>
        {/* Dégradé */}
        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/40 to-transparent max-lg:bg-linear-to-t max-lg:from-background/95 max-lg:via-background/60"></div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 mx-auto w-full max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8">
        {/* BLOC TEXT */}
        <div className="flex flex-col justify-center sm:text-center md:mx-auto md:max-w-2xl lg:col-span-7 lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-border bg-muted/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md sm:self-center lg:self-start">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Artisanat 100 % authentique & certifié
          </div>

          {/* Titre principale */}
          <h1 className="lg:5xl mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-6xl">
            L'artisanat de chez nous,{" "}
            <span className="block font-normal text-muted-foreground sm:inline">
              À portée de main.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-muted-foreground drop-shadow-sm sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {" "}
            Mwana Mbok'Art connecte les talents artisanaux locaux avec les
            passionnés d'art et de culture. Commandez des créations uniques
            directement auprès des créateurs.
          </p>

          {/* CTA */}
          <div className="mt-8 gap-3 sm:mx-auto sm:flex sm:max-w-lg sm:justify-center lg:mx-0 lg:justify-start">
            <Button
              size={"lg"}
              className="w-full cursor-pointer gap-2 font-medium shadow-md sm:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              Découvrir le catalogue
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full cursor-pointer font-medium backdrop-blur-sm sm:w-auto"
            >
              Devenir Vendeur
            </Button>
          </div>

          {/* Statistiques */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mx-auto sm:max-w-lg lg:mx-0">
            <Stats p1="100%" p2="Fait main" />
            <Stats p1="Direct" p2="Du producteur" />
            <Stats p1="Sécurisé" p2="Livraison suivie" />
          </div>
        </div>
      </div>
    </section>
  )
}

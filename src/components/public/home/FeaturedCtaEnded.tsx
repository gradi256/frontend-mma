import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const FeaturedCtaEnded = () => {
  return (
    <section className="relative overflow-hidden border-t border-border py-16">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="hero_vid5.mp4"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-white/10 px-6 py-12 text-center text-background shadow-xl backdrop-blur-sm sm:px-16">
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Faites partie de l'aventure Mwana Mbok'Art
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-zinc-200">
            Un accès simple, sans intermédiaire et sans contrainte. Prenez les
            rênes de vos échanges dès aujourd’hui.
          </p>
          <div className="mt-8 flex justify-center gap-x-44">
            <Button
              variant={"secondary"}
              className="cursor-pointer gap-1.5 font-sans font-semibold shadow-sm"
            >
              S'abonner maintenant
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
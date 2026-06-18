import { Navigation } from "@/components/public/Navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Minus,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Trash2,
} from "lucide-react"
import { useState } from "react"

export const Catalogue = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-50/50 px-4 py-8 text-foreground transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl space-y-10">
        <Navigation />
        <div className="flex flex-col gap-6 border-b border-muted/40 pt-4 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Badge
              variant={"outline"}
              className="rounded-full border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary"
            >
              Mwana Mbok'Art Galerie
            </Badge>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Catalogue communautaire
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground">
              Parcourez et réservez des créations d'exception en direct des
              meilleurs ateliers d'art de la RDC.
            </p>
          </div>

          <div className="flex items-center gap-3 md:self-center">
            <Button
              variant={"outline"}
              size={"sm"}
              className="rounded-xl text-xs"
            >
              Se connecter
            </Button>

            <Button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative gap-2 rounded-xl px-4 text-xs font-medium shadow-xs transition-transform active:scale-95"
            >
              <ShoppingCart className="h-4 w-4" />
              Mon Panier
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                0
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher une oeuvre..."
              className="rounded-xl border-muted bg-background pl-9"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="mr-1 hidden h-4 w-4 text-muted-foreground sm:block" />
            <Button size={"sm"} className="rounded-full text-xs font-medium">
              categorie
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-muted/60 py-24 text-center text-sm text-muted-foreground">
          Aucune œuvre d'art ne correspond à vos filtres de sélection actuels.
        </div>

        {isCartOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
              onClick={() => setIsCartOpen(false)}
            />

            <div className="fixed top-0 right-0 z-50 flex h-full w-full flex-col justify-between border-l bg-background text-foreground shadow-2xl duration-300 sm:max-w-md">
              <div className="flex items-center justify-between border-b bg-zinc-50 p-6 dark:bg-zinc-900/50">
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-bold">
                    Votre sélection ()
                  </h2>
                </div>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="h-8 rounded-xl text-xs"
                  onClick={() => setIsCartOpen(false)}
                >
                  Fermer
                </Button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto p-6">
                <div className="flex h-full flex-col items-center justify-center space-y-2 text-center text-muted-foreground">
                  <ShoppingBag className="h-10 w-10 stroke-[1.5] text-muted-foreground/50" />
                  <p className="text-sm">Votre panier d'art est vide.</p>
                  <p className="max-w-50 text-xs">
                    Ajoutez des créations uniques depuis le catalogue pour
                    commander.
                  </p>
                </div>

                <div className="relative border p-4 rounded-xl hidden"> 
                  <div className="flex items-center gap-2 pt-1.5">
                    <Button
                      className="h-6 w-6 rounded-md"
                      variant={"outline"}
                      size={"icon"}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-4 text-center text-xs font-bold">
                      0
                    </span>
                    <Button
                      className="h-6 w-6 rounded-md"
                      variant={"outline"}
                      size={"icon"}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="absolute top-3 right-3 h-7 w-7 rounded-lg text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4 border-t bg-zinc-50 p-6 dark:bg-zinc-900/30">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Nombre d'articles :</span>
                    <span className="font-medium text-foreground">
                      0
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-dashed pt-2 text-base font-bold">
                    <span>Montant total :</span>
                    <span className="text-lg text-primary">
                      0 USD
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full gap-2 rounded-xl bg-emerald-600 py-5 text-xs font-medium text-white transition-all hover:bg-emerald-700 disabled:bg-zinc-300 disabled:dark:bg-zinc-800"
                >
                  <ShoppingBag className="h-4 w-4" /> Finaliser l'achat sur
                  WhatsApp
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
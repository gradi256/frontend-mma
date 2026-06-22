import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CheckCircle2, CreditCard, ShieldCheck, Smartphone, Wallet } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const planDetails = {
  name: "Abonnement Artisan Pro",
  price: "15", // $ USD / mois
  duration: "Mensuel",
  features: [
    "Publications illimitées d'œuvres",
    "Badge 'Artisan Vérifié' sur le profil",
    "Statistiques d'audience détaillées",
    "Bouton WhatsApp direct activé",
  ],
}

export const SubscriptionPayment = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("card")
    const [isLoading] = useState(false)


  return (
    <div className="transition-color min-h-screen bg-neutral-50/50 px-4 py-12 text-foreground duration-900 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* BOUTON  RETOUR */}
        <Button
          variant={"ghost"}
          size="sm"
          onClick={() => navigate(-1)}
          className="hover:-text-foreground gap-2 rounded-xl text-xs text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>

        {/* Grille principale */}
        <div className="grid gap-8 md:grid-cols-5">
          {/* section gauche pour l abonnement */}
          <div className="space-y-4 md:col-span-2">
            <Card className="overflow-hidden rounded-2xl border-primary/20 bg-primary/20 shadow-sm">
              <CardHeader className="spce-y-1">
                <Badge className="dark:text-amber w-fit border-none bg-amber-600/10 text-[10px] tracking-wider text-amber-600 uppercase">
                  Formule sélectionnée
                </Badge>
                <CardTitle className="font-serif text-xl">
                  {planDetails.name}
                </CardTitle>
                <CardDescription>{planDetails.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-1 text-3xl font-bold text-foreground">
                  {planDetails.price} ${" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    / mois
                  </span>
                </div>
                <div className="space-y-2.5 border-t border-dashed">
                  {planDetails.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{feature}</span>{" "}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-2.5 rounded-xl border bg-zinc-100/50 p-4 text-[11px] text-muted-foreground dark:bg-zinc-900/50">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500" />
              <span>
                Vos transactions sont chiffrées et sécurisées . Mwana Mbok'Art
                ne stocke aucune donnée bancaire.
              </span>
            </div>
          </div>

          {/* Collonnes des droite pour le formulaire et le mode de paiement */}
          <Card className="rounded-2xl border-muted/60 bg-background shadow-sm md:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">
                Choisir un mode de paiement
              </CardTitle>
              <CardDescription>
                Sélectionnez l'option qui vous convient le mieux.
              </CardDescription>
            </CardHeader>

            <form>
              <CardContent className="space-y-6">
                {/* choix de paiement */}
                <RadioGroup
                  defaultValue="card"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {/* option carte bancaire */}
                  <Label
                    htmlFor="card"
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/20"
                        : "border-muted/70 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold">
                        Carte bancaire
                      </span>
                    </div>
                    <RadioGroupItem
                      value="card"
                      id="card"
                      className="sr-only"
                    />
                  </Label>

                  {/* paypal */}
                  <Label
                    htmlFor="paypal"
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/2"
                        : "border-muted/70 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Wallet className="h-4 w-4 text-blue-500" />
                      <span className="text-xs font-semibold">PayPal</span>
                    </div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="sr-only"
                    />
                  </Label>

                  {/*Orange Money */}
                  <Label
                    htmlFor="orange"
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "orange"
                        ? "border-amber-500 bg-amber-500/2"
                        : "border-muted/70 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-orange-500" />
                      <span className="text-xs font-semibold">
                        Orange Money
                      </span>
                    </div>
                    <RadioGroupItem
                      value="orange"
                      id="orange"
                      className="sr-only"
                    />
                  </Label>
                  {/*M-Pesa */}
                  <Label
                    htmlFor="mpesa"
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "mpesa"
                        ? "border-red-500 bg-red-500/2"
                        : "border-muted/70 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-red-600" />
                      <span className="text-xs font-semibold">
                        M-Pesa (Vodacom)
                      </span>
                    </div>
                    <RadioGroupItem
                      value="mpesa"
                      id="mpesa"
                      className="sr-only"
                    />
                  </Label>

                  {/* Airtel Money */}
                  <Label
                    htmlFor="airtel"
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "airtel"
                        ? "border-red-400 bg-red-400/2"
                        : "border-muted/70 hover:border-muted-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-semibold">
                        Airtel Money
                      </span>
                    </div>
                    <RadioGroupItem
                      value="airtel"
                      id="airtel"
                      className="sr-only"
                    />
                  </Label>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="animate-in space-y-3 border-t pt-4 duration-200 fade-in">
                    <div className="space-y-1">
                      <Label htmlFor="card-number" className="text-xs">
                        Numéro de la carte
                      </Label>
                      <Input
                        id="card-number"
                        placeholder="4242 •••• •••• ••••"
                        className="rounded-xl bg-background text-xs"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="card-expiry" className="text-xs">
                          Date d'expiration
                        </Label>
                        <Input
                          id="card-expiry"
                          placeholder="MM/AA"
                          className="rounded-xl bg-background text-xs"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="card-cvc" className="text-xs">
                          CVC / CVC2
                        </Label>
                        <Input
                          id="card-cvc"
                          placeholder="3 chiffres"
                          className="rounded-xl bg-background text-xs"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {["orange", "mpesa", "airtel"].includes(paymentMethod) && (
                  <div className="animate-in space-y-3 border-t pt-4 duration-200 fade-in">
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-xs">
                        Numéro de téléphone Mobile Money
                      </Label>
                      <div className="relative">
                        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs font-medium text-muted-foreground">
                          +243
                        </span>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="812345678"
                          className="rounded-xl bg-background pl-12 text-xs"
                          required
                        />
                      </div>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        Une notification Push de validation vous sera envoyée
                        sur votre téléphone pour taper votre code PIN secret.
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="animate-in space-y-2 rounded-xl border border-t border-dashed bg-zinc-50 p-4 pt-4 text-center duration-200 fade-in dark:bg-zinc-900/30">
                    <p className="text-xs text-muted-foreground">
                      En cliquant sur valider, vous serez redirigé vers
                      l'interface officielle de PayPal pour vous connecter à
                      votre compte.
                    </p>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl py-5 text-xs font-semibold shadow-xs transition-all"
                >
                  {isLoading
                    ? "Traitement de la transaction..."
                    : `Payer ${planDetails.price} $ USD maintenant`}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Mail, Loader2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { authService } from "@/services/api"

// --- Schémas ---
const loginSchema = z.object({
  email: z.string().min(1, "Requis").email("Format invalide."),
  password: z.string().min(1, "Requis."),
})

const registerSchema = z.object({
  name: z.string().min(3, "Min 3 car.").max(50, "Max 50 car."),
  email: z.string().min(1, "Requis").email("Format invalide."),
  password: z.string().min(8, "Min 8 car."),
})

type LoginFormValues = z.infer<typeof loginSchema>
type RegisterFormValues = z.infer<typeof registerSchema>

export function AuthPage() {
  // Mutations React Query : remplace la logique manuelle de chargement
  const loginMutation = useMutation({ mutationFn: authService.login })
  const registerMutation = useMutation({ mutationFn: authService.register })

  const {
    register: regLogin,
    handleSubmit: subLogin,
    formState: { errors: errL },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    register: regSign,
    handleSubmit: subSign,
    formState: { errors: errR },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  return (
    <div className="relative grid min-h-[calc(100vh-4rem)] grid-cols-1 overflow-hidden lg:grid-cols-12">
      {/* CÔTÉ GAUCHE (Design préservé) */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-900 p-10 text-white lg:col-span-5 lg:flex">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity grayscale"
          src="/img/hero_vid3.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <img
          src="img/LOGO_MWANAMBOK_ART-removebg-preview.png"
          className="relative z-10 h-25 w-auto object-contain"
        />
        <blockquote className="relative z-10 space-y-2">
          <p className="font-sans text-lg text-zinc-200 italic">
            "Le travail de nos mains porte l'histoire de nos ancêtres..."
          </p>
        </blockquote>
        <div className="relative z-10 flex items-center gap-2 border-t border-zinc-800 pt-4 text-xs text-zinc-400">
          <ShieldCheck className="h-4 w-4" />{" "}
          <span>Accès Membre 100% sécurisé</span>
        </div>
      </div>

      {/* CÔTÉ DROIT (Formulaires) */}
      <div className="flex flex-col items-center justify-center bg-background px-4 py-12 lg:col-span-7">
        <div className="w-full max-w-md space-y-8">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-xl bg-muted p-1">
              <TabsTrigger value="login">Se connecter</TabsTrigger>
              <TabsTrigger value="register">Créer un compte</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form
                onSubmit={subLogin((d) => loginMutation.mutate(d))}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input {...regLogin("email")} />
                  {errL.email && (
                    <p className="text-xs text-destructive">
                      {errL.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label>Mot de passe</Label>
                  <Input type="password" {...regLogin("password")} />
                  {errL.password && (
                    <p className="text-xs text-destructive">
                      {errL.password.message}
                    </p>
                  )}
                </div>
                <Button className="w-full" disabled={loginMutation.isPending}>
                  {loginMutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Se connecter"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form
                onSubmit={subSign((d) => registerMutation.mutate(d))}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <Label>Nom ou Galerie</Label>
                  <Input {...regSign("name")} />
                  {errR.name && (
                    <p className="text-xs text-destructive">
                      {errR.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input {...regSign("email")} />
                  {errR.email && (
                    <p className="text-xs text-destructive">
                      {errR.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <Label>Mot de passe</Label>
                  <Input type="password" {...regSign("password")} />
                  {errR.password && (
                    <p className="text-xs text-destructive">
                      {errR.password.message}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full"
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Créer mon compte <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

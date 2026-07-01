import { useState } from "react"
import { Save, Globe, CreditCard, Shield, DollarSign, Sliders, User, Lock, Bell, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArtworkTypeManager } from "@/components/admin/ArtworkTypeManager"

export default function Settings() {
  const [adminName, setAdminName] = useState("Super Admin")
  const [adminEmail, setAdminEmail] = useState("gradinawej@kusanika.cd")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [siteName, setSiteName] = useState("kusanika")
  const [contactEmail, setContactEmail] = useState("admin@kusanika.cd")
  const [monthlyPrice, setMonthlyPrice] = useState(15)
  const [yearlyPrice, setYearlyPrice] = useState(120)
  const [notifyNewSeller, setNotifyNewSeller] = useState(true)
  const [notifyPayouts, setNotifyPayouts] = useState(false)
  const [sandboxMode, setSandboxMode] = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-8 px-1">
      <div className="space-y-1">
        <h2 className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl 2xl:text-3xl">
          Paramètres Configuration
        </h2>
        <p className="text-xs font-light tracking-wide text-muted-foreground md:text-sm">
          Gérez votre profil administrateur, ajustez les règles de l'application et contrôlez la sécurité.
        </p>
      </div>

      <Tabs defaultValue="account" className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="sticky top-6 rounded-xl border border-border/60 bg-card p-3 shadow-sm">
            <p className="mb-2 px-3 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
              Groupes de configuration
            </p>
            <TabsList className="flex h-auto w-full flex-col justify-start gap-1 bg-transparent p-0">
              <TabsTrigger value="account" className="flex w-full justify-start gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <User className="h-4 w-4 stroke-[1.5]" /> Gestion du Compte
              </TabsTrigger>
              <TabsTrigger value="business" className="flex w-full justify-start gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <DollarSign className="h-4 w-4 stroke-[1.5]" /> Offres & Plateforme
              </TabsTrigger>
              <TabsTrigger value="system" className="flex w-full justify-start gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                <Shield className="h-4 w-4 stroke-[1.5]" /> Sécurité & Système
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="md:col-span-3">
          {/* COMPTE */}
          <TabsContent value="account" className="mt-0 space-y-8">
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <User className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Mon Profil Administrateur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="adminName">Nom complet de l'admin</Label>
                    <Input id="adminName" type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="adminEmail">Adresse Email d'accès</Label>
                    <Input id="adminEmail" type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 pt-0">
                <Button size="sm" className="gap-2"><Save className="h-3.5 w-3.5" /> Mettre à jour le profil</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <Lock className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Sécurité des accès</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <Input id="currentPassword" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="••••••••" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                    <div className="relative">
                      <Input id="newPassword" type={showPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Minimum 8 caractères" className="pr-10" />
                      <Button type="button" variant="ghost" size="icon" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-muted-foreground/70 hover:text-foreground">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 pt-0">
                <Button size="sm" className="gap-2"><Save className="h-3.5 w-3.5" /> Changer le mot de passe</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* BUSINESS */}
          <TabsContent value="business" className="mt-0 space-y-8">
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <Globe className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Informations Générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="siteName">Nom public du site</Label>
                    <Input id="siteName" type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contactEmail">Email contact support</Label>
                    <Input id="contactEmail" type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 pt-0">
                <Button size="sm" className="gap-2"><Save className="h-3.5 w-3.5" /> Enregistrer la configuration</Button>
              </CardFooter>
            </Card>

            {/* Insertion du gestionnaire isolé */}
            <ArtworkTypeManager />

            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <Sliders className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Abonnement Vendeur Pro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="monthlyPrice">Prix Mensuel ($ USD)</Label>
                    <div className="relative">
                      <Input id="monthlyPrice" type="number" value={monthlyPrice} onChange={(e) => setMonthlyPrice(Number(e.target.value))} className="pr-8 font-semibold" />
                      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-light text-muted-foreground">/m</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="yearlyPrice">Prix Annuel ($ USD)</Label>
                    <div className="relative">
                      <Input id="yearlyPrice" type="number" value={yearlyPrice} onChange={(e) => setYearlyPrice(Number(e.target.value))} className="pr-8 font-semibold" />
                      <span className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-light text-muted-foreground">/a</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 pt-0">
                <Button size="sm" className="gap-2"><Save className="h-3.5 w-3.5" /> Mettre à jour l'offre</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* SYSTEM */}
          <TabsContent value="system" className="mt-0 space-y-8">
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <Bell className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Alertes Système & Mails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 p-3">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifyNewSeller" className="text-xs font-medium text-foreground">Nouvelle demande vendeur</Label>
                    <p className="text-[11px] font-light text-muted-foreground">Recevoir un mail d'alerte dès qu'un nouvel artiste s'inscrit.</p>
                  </div>
                  <Switch id="notifyNewSeller" checked={notifyNewSeller} onCheckedChange={setNotifyNewSeller} />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 p-3">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifyPayouts" className="text-xs font-medium text-foreground">Rapports financiers hebdomadaires</Label>
                    <p className="text-[11px] font-light text-muted-foreground">Envoyer un résumé automatique des abonnements perçus chaque dimanche.</p>
                  </div>
                  <Switch id="notifyPayouts" checked={notifyPayouts} onCheckedChange={setNotifyPayouts} />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <CreditCard className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Passerelle de Paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 p-3">
                  <div className="space-y-0.5">
                    <Label htmlFor="sandboxMode" className="text-xs font-medium text-foreground">Mode Test / Sandbox</Label>
                    <p className="text-[11px] font-light text-muted-foreground">Simuler les transactions sans toucher à du vrai argent.</p>
                  </div>
                  <Switch id="sandboxMode" checked={sandboxMode} onCheckedChange={setSandboxMode} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="apiKey" className="text-muted-foreground">Clé API Publique</Label>
                  <Input id="apiKey" type="text" placeholder="pk_test_kusanika..." disabled className="cursor-not-allowed font-mono text-muted-foreground/70" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-border/40 bg-muted/10 p-5">
                <Shield className="h-4 w-4 stroke-[1.5] text-primary" />
                <CardTitle className="text-xs font-semibold tracking-wider uppercase">Maintenance Système</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex items-center justify-between rounded-lg border border-rose-500/20 bg-rose-500/5 p-3">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenanceMode" className="text-xs font-medium text-rose-950">Mode Maintenance Général</Label>
                    <p className="text-[11px] font-light text-rose-900/70">Bloquer temporairement l'accès à la galerie pour les utilisateurs externes.</p>
                  </div>
                  <Switch id="maintenanceMode" checked={maintenanceMode} onCheckedChange={setMaintenanceMode} className="data-[state=checked]:bg-rose-600" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
import { 
  Paintbrush, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Bell,
  MessageSquare,
  UserPlus
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NotificationItem {
  id: string;
  type: string;
  message: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

interface ChartDataItem {
  name: string;
  revenus: number;
  utilisateurs: number;
}

const chartData: ChartDataItem[] = [
  { name: "Jan", revenus: 1200, utilisateurs: 140 },
  { name: "Fév", revenus: 1900, utilisateurs: 180 },
  { name: "Mar", revenus: 1500, utilisateurs: 210 },
  { name: "Avr", revenus: 2800, utilisateurs: 250 },
  { name: "Mai", revenus: 3600, utilisateurs: 290 },
  { name: "Juin", revenus: 4250, utilisateurs: 320 },
];

const stats: StatItem[] = [
  {
    title: "Total Œuvres",
    value: "1,245",
    description: "+12% ce mois",
    icon: Paintbrush,
  },
  {
    title: "Artistes Actifs",
    value: "320",
    description: "+48 cette semaine",
    icon: Users,
  },
  {
    title: "Abonnements Actifs",
    value: "89",
    description: "Rétention 94%",
    icon: CreditCard,
  },
  {
    title: "Revenus Mensuels",
    value: "4,250 $",
    description: "+18.2% vs mai",
    icon: TrendingUp,
  },
];

const notifications: NotificationItem[] = [
  {
    id: "1",
    type: "artwork",
    message: "Nouvelle œuvre 'Échos du Fleuve' soumise par Dieudonné Sana.",
    time: "10 min",
    icon: Paintbrush,
    iconColor: "text-blue-600 bg-blue-500/10",
  },
  {
    id: "2",
    type: "user",
    message: "Nouvel artiste 'Naomi Koko' inscrit sur la plateforme.",
    time: "1 h",
    icon: UserPlus,
    iconColor: "text-emerald-600 bg-emerald-500/10",
  },
  {
    id: "3",
    type: "subscription",
    message: "Bavon Luambo a renouvelé son abonnement Premium Vendeur.",
    time: "3 h",
    icon: CreditCard,
    iconColor: "text-purple-600 bg-purple-500/10",
  },
  {
    id: "4",
    type: "comment",
    message: "Nouveau commentaire en attente de modération sur 'Renaissance'.",
    time: "Hier",
    icon: MessageSquare,
    iconColor: "text-amber-600 bg-amber-500/10",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-10 max-w-400 mx-auto w-full px-1">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-bold tracking-tight text-foreground font-heading md:text-2xl 2xl:text-3xl">
          Vue d'ensemble
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">
          Indicateurs clés de performance et notifications système sur Mwana Mbok'art.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="rounded-xl border border-border bg-card p-5 2xl:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-32.5 2xl:min-h-37.5 transition-all hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                {stat.title}
              </span>
              <div className="p-2 rounded-lg bg-muted/40 text-sidebar-primary">
                <stat.icon className="h-4 w-4 stroke-[1.5]" />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl 2xl:text-3xl font-semibold tracking-tight text-foreground font-sans">
                {stat.value}
              </div>
              <p className="text-[11px] 2xl:text-xs text-muted-foreground font-light mt-1 flex items-center gap-1">
                <span className="text-emerald-600 font-medium">{stat.description.split(" ")[0]}</span>
                <span className="text-muted-foreground/70">{stat.description.substring(stat.description.indexOf(" "))}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-12 2xl:gap-8">
        <div className="rounded-xl border border-border bg-card p-5 2xl:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] lg:col-span-7 2xl:col-span-8 flex flex-col justify-between min-h-[380px] 2xl:min-h-[460px]">
          <div className="space-y-1 mb-5">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground/80">
              Performance de Croissance
            </h3>
            <p className="text-xs text-muted-foreground font-light">
              Suivi analytique en temps réel des transactions de la galerie.
            </p>
          </div>
          
          <div className="flex-1 min-h-60 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenus" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(59, 130, 246)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="rgb(59, 130, 246)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(229, 231, 235, 0.3)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#888888" />
                <YAxis axisLine={false} tickLine={false} stroke="#888888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenus" 
                  stroke="rgb(59, 130, 246)" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRevenus)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 2xl:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] lg:col-span-5 2xl:col-span-4 flex flex-col h-full min-h-95 2xl:min-h-115">
          <div className="flex items-center justify-between pb-4 border-b border-border/60">
            <div className="space-y-1">
              <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground/80">
                Flux d'activités
              </h3>
              <p className="text-xs text-muted-foreground font-light">
                Notifications récentes de la plateforme.
              </p>
            </div>
            <button className="rounded-lg p-2 text-muted-foreground hover:bg-accent/40 hover:text-accent-foreground transition-all">
              <Bell className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>

          <div className="flex-1 divide-y divide-border/40 overflow-y-auto pr-1">
            {notifications.map((item) => (
              <div key={item.id} className="flex items-start gap-3.5 py-4 first:pt-3 last:pb-0 group transition-all">
                <div className={`p-2 rounded-lg shrink-0 ${item.iconColor}`}>
                  <item.icon className="h-3.5 w-3.5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground tracking-tight leading-relaxed group-hover:text-sidebar-primary transition-colors wap-break-word">
                    {item.message}
                  </p>
                  <span className="text-[10px] text-muted-foreground/60 font-light mt-1">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
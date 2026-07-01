import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PublicLayout } from "./layouts/PublicLayout"
import { Home } from "./pages/public/Home"
import { About } from "./pages/public/About"
import { Catalogue } from "./pages/public/Catalogue"
import ArtistsDirectory from "./pages/public/ArtistsDirectory"
import { AuthLayout } from "./layouts/AuthLayout"
import { RegisterSeller } from "./pages/auth/RegistterSeller"
import { AuthentificationRegister } from "./pages/auth/AuthentificationRegister"
import { ConnexxionSeller } from "./pages/auth/ConnexxionSeller"
import { RegisterClient } from "./pages/auth/RegisterCient"
import { ConnexionClient } from "./pages/auth/ConnexionClient"
import { AuthentificationConnexion } from "./pages/auth/AuthentificationConnexion"
import { SubscriptionPayment } from "./pages/auth/SubscriptionPayment"
import { SubscriptionPlans } from "./pages/auth/SubscriptionPlans"
import { AccountReviewWaiting } from "./pages/auth/AccountReviewWaiting"
import { AuthentificationAdmin } from "./pages/auth/AuthentificationAdmin"
import { SellerDashboard } from "./pages/artisan/SellerDashboard"
import { ClientGalleryPortal } from "./pages/client/ClientGalleryPortal"
import { DashboardLayout } from "./layouts/DashboardLayout"
import Dashboard from "./pages/admin/Dashboard"
import Artworks from "./pages/admin/Artworks"
import Users from "./pages/admin/Users"
import Settings from "./pages/admin/Settings"
import Subscriptions from "./pages/admin/Subscription"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalogue /> },
      { path: "artisans", element: <ArtistsDirectory /> },
      { path: "about", element: <About /> },
      { path: "dashboard/artisan", element: <SellerDashboard /> },
      {
        path: "/gallery-portal",
        element: <ClientGalleryPortal />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/auth-register", element: <AuthentificationRegister /> },
      { path: "/auth/auth-connexion", element: <AuthentificationConnexion /> },
      { path: "/auth/auth-register/artisan", element: <RegisterSeller /> },
      {
        path: "/auth/auth-register/artisan/plans",
        element: <SubscriptionPlans />,
      },
      {
        path: "/auth/auth-register/artisan/subscription",
        element: <SubscriptionPayment />,
      },
      {
        path: "/auth/auth-register/artisan/subscription/review-waiting",
        element: <AccountReviewWaiting />,
      },
      { path: "/auth/auth-connexion/artisan", element: <ConnexxionSeller /> },
      { path: "/auth/auth-register/client", element: <RegisterClient /> },
      { path: "/auth/auth-connexion/client", element: <ConnexionClient /> },
      {
        path: "/auth/auth-connexion/admin",
        element: <AuthentificationAdmin />,
      },
    ],
  },

  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/admin/artworks", element: <Artworks /> },
      { path: "/admin/subscriptions", element: <Subscriptions /> },
      { path: "/admin/users", element: <Users /> },
      { path: "/admin/settings", element: <Settings /> },
    ],
  },
])

const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App

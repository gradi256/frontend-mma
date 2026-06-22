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
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalogue /> },
      { path: "artisans", element: <ArtistsDirectory /> },
      { path: "about", element: <About /> },
    ],
  },

  
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/auth-register", element: <AuthentificationRegister /> },
      { path: "/auth/auth-connexion", element: <AuthentificationConnexion /> },
      { path: "/auth/auth-register/artisan", element: <RegisterSeller /> },
      { path: "/auth/auth-register/artisan/plans", element: <SubscriptionPlans /> },
      { path: "/auth/auth-register/artisan/subscription", element: <SubscriptionPayment /> },      
      { path: "/auth/auth-register/artisan/subscription/review-waiting", element: <AccountReviewWaiting /> },      
      { path: "/auth/auth-connexion/artisan", element: <ConnexxionSeller /> },
      { path: "/auth/auth-register/client", element: <RegisterClient /> },
      { path: "/auth/auth-connexion/client", element: <ConnexionClient /> },
    ],
  },

  // GROUPE VENDEUR
  // {
  //   path: "/seller",
  //   element: (
  //       <SellerLayout />
  //   ),
  //   children: [{ path: "/seller", element: <SellerDashboard /> }],
  // },

  // //ROUTE ADMMIN
  // {
  //   path: "/admin",
  //   element: (
  //     <AdminLayout />
  //   ),
  //   children: [
  //     { index: true, element: <Dashboard /> },
  //     { path: "/admin/artworks", element: <Artworks /> },
  //     { path: "/admin/subscriptions", element: <Subscriptions /> },
  //     { path: "/admin/users", element: <Users /> },
  //     { path: "/admin/settings", element: <Settings /> },
  //   ],
  // },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

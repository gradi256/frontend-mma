import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PublicLayout } from "./layouts/PublicLayout"
import { Home } from "./pages/public/Home"
import { About } from "./pages/public/About"
import { Catalogue } from "./pages/public/Catalogue"
import ArtistsDirectory from "./pages/public/ArtistsDirectory"
import { AuthLayout } from "./layouts/AuthLayout"
import { AuthentificationRegister } from "./pages/auth/AuthentificationRegister"
import { RegisterSeller } from "./pages/auth/RegistterSeller"
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
      { path: "/auth/auth-register/artisan", element: <RegisterSeller /> },
      { path: "/auth/auth-register/client", element: <AuthentificationRegister /> },
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

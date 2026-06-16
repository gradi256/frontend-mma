import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { Home } from './pages/public/Home'
import { About } from './pages/public/About'
const router = createBrowserRouter([
  //GROUPE PUBLIC
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "auth", element: <Auth /> },
      // { path: "checkout", element: "" },
      // { path: "catalog", element: <Catalogue /> },
      // // { path: "authadmin", element: "" },
      // { path: "subscriptionPayment", element: <SubscriptionPayment /> },
      // { path: "artisans", element: <ArtistsDirectory /> },
      { path: "about", element: <About /> },
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
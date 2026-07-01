import { useState } from "react";
import { DashboardView } from "./DashboardView";
import { CatalogView } from "./CatalogView";
import { OrdersView } from "./OrdersView";
import { BillingView } from "./BillingView";
import { ArtisanLayout } from "@/layouts/ArtisanLayout";
import { ArtisanSettingsView } from "./ArtisanSettingsView";

export const SellerDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <ArtisanLayout activePage={activePage} setActivePage={setActivePage}>
      {activePage === "dashboard" && <DashboardView />}
      {activePage === "catalog" && <CatalogView />}
      {activePage === "orders" && <OrdersView />}
      {activePage === "billing" && <BillingView />}
      {activePage === "settings" && <ArtisanSettingsView />}
    </ArtisanLayout>
  );
};
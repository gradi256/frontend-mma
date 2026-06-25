import { useState } from "react";
import { DashboardView } from "./DashboardView";
import { CatalogView } from "./CatalogView";
import { OrdersView } from "./OrdersView";
import { MessagesView } from "./MessagesView";
import { BillingView } from "./BillingView";
import { ArtisanLayout } from "@/layouts/ArtisanLayout";

export const SellerDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <ArtisanLayout activePage={activePage} setActivePage={setActivePage}>
      {activePage === "dashboard" && <DashboardView />}
      {activePage === "catalog" && <CatalogView />}
      {activePage === "orders" && <OrdersView />}
      {activePage === "messages" && <MessagesView />}
      {activePage === "billing" && <BillingView />}
    </ArtisanLayout>
  );
};
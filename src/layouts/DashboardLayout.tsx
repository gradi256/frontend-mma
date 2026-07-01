import Sidebar from '@/components/admin/Sidebard'
import { Bell, Menu } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <div className="flex min-h-screen bg-background font-sans antialiased">
      <Sidebar isOpen={isSidebarOpen} />

      <div
        className={`flex min-h-screen flex-1 flex-col transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-16"
        }`}
      >
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-sm font-semibold tracking-tight text-foreground">
              Tableau de bord / Administration
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </button>

            <div className="h-1px my-3 w-px self-stretch bg-border" />

            <div className="flex items-center gap-3">
              <div className="flex  flex-col text-right sm:flex">
                <span className="text-xs font-semibold text-foreground">
                  Admin
                </span>
                <span className="text-[10px] text-muted-foreground">
                 gradinawej8@gmail.com
                </span>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                AM
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-background p-6 md:p-8">
          <div className="mx-auto max-w-7xl space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

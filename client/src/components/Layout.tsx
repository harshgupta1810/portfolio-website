import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background to-secondary">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background to-secondary">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 ml-64">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
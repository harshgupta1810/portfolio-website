import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { Layout } from "./components/Layout"
import { Loader2 } from "lucide-react"

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })))
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })))
const Experience = lazy(() => import("./pages/Experience").then(module => ({ default: module.Experience })))
const Skills = lazy(() => import("./pages/Skills").then(module => ({ default: module.Skills })))
const Projects = lazy(() => import("./pages/Projects").then(module => ({ default: module.Projects })))
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })))
const Privacy = lazy(() => import("./pages/Privacy").then(module => ({ default: module.Privacy })))
const Terms = lazy(() => import("./pages/Terms").then(module => ({ default: module.Terms })))

function LoadingSpinner() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            } />
            <Route path="/experience" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Experience />
              </Suspense>
            } />
            <Route path="/skills" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Skills />
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } />
            <Route path="/privacy" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Privacy />
              </Suspense>
            } />
            <Route path="/terms" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Terms />
              </Suspense>
            } />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App
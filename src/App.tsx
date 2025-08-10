import React from "react"
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion"
import { CartProvider } from "./context/CartContext"
import { Nav } from "./components/Nav"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import CartDrawer from "./components/CartDrawer"

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.28 }}
      className="min-h-dvh"
    >
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const navigate = useNavigate()
  // background location (modal route pattern)
  const backgroundLocation = (location.state as any)?.backgroundLocation

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={backgroundLocation || location} key={(backgroundLocation || location).pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/products" element={<Page><Products /></Page>} />
          <Route path="/products/:id" element={<Page><ProductDetail /></Page>} />
          {/* Fallback full-page cart */}
          <Route path="/cart" element={<Page><CartPage /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>

      {/* Drawer overlay when background exists */}
      <AnimatePresence>
        {backgroundLocation && (
          <CartDrawer onClose={() => navigate(-1)} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 300, damping: 28 }}>
      <BrowserRouter>
        <CartProvider>
          <div className="mx-auto max-w-6xl px-4 py-6">
            <Nav />
            <AnimatedRoutes />
          </div>
        </CartProvider>
      </BrowserRouter>
    </MotionConfig>
  )
}
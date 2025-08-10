import { NavLink, Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"

export function Nav() {
    const { count } = useCart()
    const location = useLocation()

    return (
        <header className="mb-6">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-lg font-semibold tracking-tight">MotionMart</Link>
                <nav className="flex items-center gap-4">
                    <NavLink to="/" end className="relative px-1 text-sm text-gray-600 hover:text-gray-900">
                        {({ isActive }) => (
                            <span className="relative inline-block pb-1">
                                Home
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gray-900"
                                    />
                                )}
                            </span>
                        )}
                    </NavLink>
                    <NavLink to="/products" className="relative px-1 text-sm text-gray-600 hover:text-gray-900">
                        {({ isActive }) => (
                            <span className="relative inline-block pb-1">
                                Products
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gray-900"
                                    />
                                )}
                            </span>
                        )}
                    </NavLink>

                    <Link
                        to="/cart"
                        state={{ backgroundLocation: location }}
                        className="relative inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm text-white"
                    >
                        <span>Cart</span>
                        <motion.span
                            key={count}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-white/90 px-1 text-[11px] font-semibold text-gray-900"
                        >
                            {count}
                        </motion.span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
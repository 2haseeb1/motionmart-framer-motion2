import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function PageShell() {
    const location = useLocation();

    return (
        <div className="min-h-dvh bg-white text-neutral-900">
            <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <Link to="/" className="font-semibold">
                        ScrollStory
                    </Link>
                    <nav className="flex gap-4 text-sm">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-black" : "text-neutral-500 hover:text-black"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/stories/acme-rebrand"
                            className={({ isActive }) =>
                                isActive ? "text-black" : "text-neutral-500 hover:text-black"
                            }
                        >
                            Demo Story
                        </NavLink>
                    </nav>
                </div>
            </header>

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mx-auto w-full max-w-6xl px-4 py-8"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
        </div>
    );
}
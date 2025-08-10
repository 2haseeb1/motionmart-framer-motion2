import { createBrowserRouter } from "react-router-dom";
import PageShell from "./routes/PageShell";
import Home from "./pages/Home";
import Story from "./pages/Story";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageShell />,
        children: [
            { index: true, element: <Home /> },
            { path: "stories/:slug", element: <Story /> },
        ],
    },
]);

export default router;
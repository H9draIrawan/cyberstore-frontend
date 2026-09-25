import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
	{
		index: true,
		element: <Navigate to={"/home"} />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/product",
		element: <Product />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div className="font-black">Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);

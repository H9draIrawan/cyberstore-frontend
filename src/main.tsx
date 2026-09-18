import { StrictMode } from "react";
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
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

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
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

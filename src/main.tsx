import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		index: true,
		element: <Navigate to={"/app"} />,
	},
	{
		path: "/app",
		element: <App />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

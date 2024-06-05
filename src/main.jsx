import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./contexts/AuthContext.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Regester from "./pages/regester/Regester.jsx";
import Login from "./pages/login/Login.jsx";
import Error from "./pages/error/Error.jsx";
import Home from "./pages/home/Home.jsx";
import PrivateRoutes from "./private_routes/PrivateRoutes.jsx";
import Details from "./pages/details/Details.jsx";
import About from "./pages/about/About.jsx";
const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement:<Error />,
		children: [
			{
				path: '',
				element:<Home />
			},
			{
				path: "/regester",
				element: <Regester />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: '/about',
				element:<About />
			},
			{
				path: '/details/:id',
				element: <PrivateRoutes >
					<Details />
				</PrivateRoutes>
			}
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<RouterProvider router={route}>
			<App />
		</RouterProvider>
	</ContextProvider>
);

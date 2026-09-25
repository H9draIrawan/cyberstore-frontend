import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Navbar() {
	const navItems = [
		{
			label: "Home",
			path: "/home",
		},
		{
			label: "Product",
			path: "/product",
		},
		{
			label: "Shop",
			path: "/shop",
		},
		{
			label: "Dashboard",
			path: "/dashboard",
		},
	];

	const isLoggedIn = false;

	return (
		<nav className="w-full border-b border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-8">
			<div className="mx-auto flex h-16 items-center gap-6">
				<NavLink to="/home" className="shrink-0">
					<img src="/src/assets/logo.png" alt="Logo" width={75} />
				</NavLink>
				<div className="flex-1/2 font-sans text-2xl">
					<ul className="flex justify-center gap-8">
						{navItems.map((item) => (
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? "font-bold" : "opacity-50 hover:opacity-100"
									}
									to={`${item.path}`}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-1 items-center justify-end gap-8">
					{isLoggedIn ? (
						<>
							<MdFavorite className="text-4xl" />
							<FaShoppingCart className="text-4xl" />
							<FaUser className="text-4xl" />
							<button
								type="button"
								className="rounded-full border border-slate-300 px-5 py-2 font-medium uppercase text-2xl text-white bg-red-500 transition hover:border-red-500 hover:bg-white hover:text-red-500"
							>
								Logout
							</button>
						</>
					) : (
						<NavLink
							to="/login"
							className="rounded-full px-5 py-2 font-medium uppercase text-2xl bg-blue-500 text-white transition border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500"
						>
							Login
						</NavLink>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

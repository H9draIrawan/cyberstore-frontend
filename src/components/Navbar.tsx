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
			label: "Dashboard",
			path: "/dashboard",
		},
	];

	return (
		<nav className="mx-auto flex items-center py-4">
			<div className="flex flex-auto justify-start ps-7">
				<img src="/src/assets/logo.png" alt="logo" width={75} />
			</div>
			<div className="flex-auto font-sans text-2xl">
				<ul className="flex justify-around ">
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
			<div className="flex flex-auto justify-end pe-7 gap-15">
				<MdFavorite className="text-4xl" />
				<FaShoppingCart className="text-4xl" />
				<FaUser className="text-4xl" />
			</div>
		</nav>
	);
}

export default Navbar;

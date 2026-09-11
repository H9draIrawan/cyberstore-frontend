import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
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
			label: "Contact",
			path: "/contact",
		},
		{
			label: "Blog",
			path: "/blog",
		},
	];

	return (
		<nav className="container flex items-center py-2">
			<div className="flex flex-1 justify-around">
				<img src="/src/assets/logo.png" alt="logo" width={75} />
			</div>
			<div className="flex flex-3">
				<form className="flex w-full items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm gap-3">
					<IoSearch className="text-4xl" />
					<input
						className="w-full bg-transparent text-lg text-gray-700 outline-none placeholder:text-gray-400"
						type="text"
						placeholder="Search"
					/>
				</form>
			</div>
			<div className="flex-3 font-sans text-xl">
				<ul className="flex justify-around">
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
			<div className="flex flex-2 justify-center gap-15">
				<MdFavorite className="text-4xl" />
				<FaShoppingCart className="text-4xl" />
				<FaUser className="text-4xl" />
			</div>
		</nav>
	);
}

export default Navbar;

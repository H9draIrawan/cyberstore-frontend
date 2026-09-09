import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
	const [activeMenu, setActiveMenu] = useState("home");

	return (
		<nav className="container mx-auto flex items-center py-2 sticky">
			<div className="flex flex-1 justify-center">
				<img src="/src/assets/images/logo.png" alt="logo" width={75} />
			</div>
			<div className="flex flex-2">
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
					<li>
						<a
							className={`${activeMenu == "home" ? "font-bold" : "opacity-50"} hover:opacity-100`}
							onClick={() => setActiveMenu("home")}
							href={"#home"}
						>
							Home
						</a>
					</li>
					<li>
						<a
							className={`${activeMenu == "about" ? "font-bold" : "opacity-50"} hover:opacity-100`}
							onClick={() => setActiveMenu("about")}
							href={"#about"}
						>
							About
						</a>
					</li>
					<li>
						<a
							className={`${activeMenu == "contact" ? "font-bold" : "opacity-50"} hover:opacity-100`}
							onClick={() => setActiveMenu("contact")}
							href={"#contact"}
						>
							Contact
						</a>
					</li>
					<li>
						<a
							className={`${activeMenu == "blog" ? "font-bold" : "opacity-50"} hover:opacity-100`}
							onClick={() => setActiveMenu("blog")}
							href={"#blog"}
						>
							Blog
						</a>
					</li>
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

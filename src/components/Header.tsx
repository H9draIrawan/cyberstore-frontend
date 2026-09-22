import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="w-full border-b border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-8">
			<div className="flex h-16 items-center gap-6">
				<NavLink to="/home" className="shrink-0">
					<img src="/src/assets/logo.png" alt="Logo" width={75} />
				</NavLink>
			</div>
		</header>
	);
}

export default Header;

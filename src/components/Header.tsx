function Header() {
	return (
		<header className="container flex items-center py-2">
			<div className="flex flex-1 justify-around">
				<img src="/src/assets/logo.png" alt="logo" width={75} />
			</div>
			<div className="flex flex-3" />
			<div className="flex flex-3" />
			<div className="flex flex-2" />
		</header>
	);
}

export default Header;

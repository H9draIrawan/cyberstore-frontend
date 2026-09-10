function HeroSection() {
	return (
		<div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden bg-blue-950 px-6 py-16 sm:px-10 lg:flex-row lg:gap-8 lg:px-16">
			<div className="z-10 flex-2 text-center lg:text-left">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
					Pro Beyond
				</p>
				<h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
					CyberStore
				</h1>
				<p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
					Created to change everything for the better. For everyone.
				</p>
				<button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-blue-950 shadow-lg transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950">
					Shop now
				</button>
			</div>
			<div className="flex flex-3">
				<img
					className="w-full object-contain drop-shadow-2xl"
					src="/src/assets/smartphone.webp"
					alt="Smartphone"
				/>
			</div>
		</div>
	);
}

export default HeroSection;

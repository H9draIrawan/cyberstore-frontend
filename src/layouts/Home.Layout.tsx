function HomeLayout() {
	return (
		<>
			<section className="mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden px-6 py-16 sm:px-10 lg:flex-row lg:gap-8 lg:px-16">
				<div className="z-10 flex-2 text-center lg:text-left">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white opacity-50">
						Pro Beyond
					</p>
					<h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
						CyberStore
					</h1>
					<p className="mt-6 max-w-md text-lg leading-8 text-white opacity-75">
						Created to change everything for the better. For everyone.
					</p>
					<button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black shadow-lg transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
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
			</section>

			<section className="grid grid-flow-col-dense grid-rows-2 auto-cols-auto">
				<div className="relative row-span-1 col-span-2 overflow-hidden">
					<img
						src="src/assets/playstation.jpg"
						alt="playstation"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex bg-linear-to-b from-black/60 to-transparent p-4">
						<span className="text-4xl font-semibold text-white">
							Playstation
						</span>
					</div>
				</div>
				<div className="relative row-span-1 col-span-1 overflow-hidden">
					<img
						src="src/assets/headphone.webp"
						alt="headphone"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex bg-linear-to-b from-black/60 to-transparent p-4">
						<span className="text-2xl font-medium text-white">Headphones</span>
					</div>
				</div>
				<div className="relative row-span-1 col-span-1 overflow-hidden">
					<img
						src="src/assets/virtual reality.jpg"
						alt="virtual reality"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex justify-end items-end bg-linear-to-t from-black/60 to-transparent p-4">
						<span className="text-2xl font-medium text-white">
							Virtual Reality
						</span>
					</div>
				</div>
				<div className="relative row-span-1 col-span-1 overflow-hidden">
					<img
						src="src/assets/laptop.webp"
						alt="laptop"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4">
						<span className="text-2xl font-medium text-white">Laptops</span>
					</div>
				</div>
				<div className="relative row-span-1 col-span-2 overflow-hidden">
					<img
						src="src/assets/xbox.jpg"
						alt="xbox"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex items-end justify-end bg-linear-to-t from-black/60 to-transparent p-4">
						<span className="text-4xl font-semibold text-white">Xbox</span>
					</div>
				</div>
				<div className="relative row-span-1 col-span-1 overflow-hidden">
					<img
						src="src/assets/e-ink.png"
						alt="e-ink"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 flex justify-end bg-linear-to-b from-black/60 to-transparent p-4">
						<span className="text-2xl font-medium text-white">E-Ink</span>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeLayout;

function Content() {
	return (
		<div className="grid grid-flow-col-dense grid-rows-2 auto-cols-auto">
			<div className="relative row-span-1 col-span-2 overflow-hidden">
				<img
					src="src/assets/playstation.jpg"
					alt="playstation"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 flex bg-linear-to-b from-black/60 to-transparent p-4">
					<span className="text-4xl font-semibold text-white">PlayStation</span>
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
		</div>
	);
}

export default Content;

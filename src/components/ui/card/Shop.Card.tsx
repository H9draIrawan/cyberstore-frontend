function ShopCard() {
	return (
		<article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl m-5">
			<div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-linear-to-br from-violet-100 via-indigo-50 to-sky-100">
				<img
					className="h-full w-full object-contain p-6"
					src="/src/assets/camera.webp"
					alt="cover"
				/>
			</div>

			<div className="space-y-4 p-5">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
						Shop collection
					</p>
					<h2 className="mt-1 text-xl font-bold text-slate-900">
						Premium essentials
					</h2>
					<p className="mt-2 text-sm leading-6 text-slate-500">
						Discover thoughtfully selected tech and accessories for your
						everyday setup.
					</p>
				</div>

				<div className="flex items-center justify-between border-t border-slate-100 pt-4">
					<div>
						<p className="text-xs text-slate-400">Starting from</p>
						<p className="text-lg font-bold text-slate-900">$49.00</p>
					</div>
					<button
						type="button"
						className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
					>
						Shop now <span aria-hidden="true">→</span>
					</button>
				</div>
			</div>
		</article>
	);
}

export default ShopCard;

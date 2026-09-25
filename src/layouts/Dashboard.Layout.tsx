function DashboardLayout() {
	return (
		<main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
			<div className="mx-auto max-w-7xl space-y-8">
				<div>
					<p className="text-sm font-medium text-indigo-600">Overview</p>
					<h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
						Dashboard
					</h1>
				</div>

				<section className="flex flex-col gap-6 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex min-w-0 items-center gap-4">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500 text-xl font-bold shadow-lg shadow-indigo-500/30 sm:h-16 sm:w-16">
							JD
						</div>
						<div className="min-w-0">
							<p className="text-sm text-slate-400">Welcome back,</p>
							<h2 className="truncate text-2xl font-bold">Jordan Doe</h2>
							<p className="truncate text-sm text-slate-300">
								Buyer &amp; Seller account
							</p>
						</div>
					</div>
					<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
						<button className="w-full rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-indigo-400 sm:w-auto">
							Shop
						</button>
						<button className="w-full rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-800 sm:w-auto">
							Edit profile
						</button>
					</div>
				</section>

				<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{[
						["Total orders", "24", "text-indigo-600"],
						["Active listings", "08", "text-emerald-600"],
						["Saved items", "16", "text-amber-600"],
					].map(([label, value, color]) => (
						<div
							className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5"
							key={label}
						>
							<p className="text-sm text-slate-500">{label}</p>
							<p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
						</div>
					))}
				</section>

				<section className="grid items-start gap-6 grid-cols-6">
					<aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm col-span-2">
						<h2 className="mb-4 text-lg font-semibold text-slate-900">
							Profile
						</h2>
						<div className="space-y-4 text-sm">
							<div>
								<p className="text-slate-500">Email</p>
								<p className="font-medium text-slate-800">jordan@example.com</p>
							</div>
							<div>
								<p className="text-slate-500">Member since</p>
								<p className="font-medium text-slate-800">January 2024</p>
							</div>
							<div>
								<p className="text-slate-500">Store status</p>
								<span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
									Active seller
								</span>
							</div>
						</div>
					</aside>
					<div className="min-w-0 col-span-4">
						<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<h2 className="mb-4 text-xl font-bold text-slate-900">
								Seller history
							</h2>
							<div className="grid gap-4 sm:grid-cols-3">
								<div className="rounded-xl bg-slate-50 p-4">
									<p className="text-sm text-slate-500">Active listings</p>
									<p className="mt-1 text-2xl font-bold text-slate-900">12</p>
								</div>
								<div className="rounded-xl bg-slate-50 p-4">
									<p className="text-sm text-slate-500">Items sold</p>
									<p className="mt-1 text-2xl font-bold text-slate-900">48</p>
								</div>
								<div className="rounded-xl bg-slate-50 p-4">
									<p className="text-sm text-slate-500">Total earnings</p>
									<p className="mt-1 text-2xl font-bold text-slate-900">
										$2,840
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default DashboardLayout;

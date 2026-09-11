import type { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className="flex min-h-screen items-center justify-center bg-black">
			<form className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white">
				{children}
			</form>
		</main>
	);
}

export default AuthLayout;

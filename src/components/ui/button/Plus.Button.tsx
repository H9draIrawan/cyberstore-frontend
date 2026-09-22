import type { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";

function PlusButton({ children }: { children: ReactNode }) {
	return (
		<button
			type="button"
			className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
		>
			<span className="flex h-5 w-5 items-center justify-center rounded-full text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
				<FaPlus className="text-xs" aria-hidden="true" />
			</span>
			{children}
		</button>
	);
}

export default PlusButton;

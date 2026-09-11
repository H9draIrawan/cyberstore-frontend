import type { ReactNode } from "react";

function SubmitButton({ children }: { children: ReactNode }) {
	return (
		<button
			className="bg-black rounded-2xl text-white uppercase text-xl py-3 font-bold"
			type="submit"
		>
			{children}
		</button>
	);
}

export default SubmitButton;

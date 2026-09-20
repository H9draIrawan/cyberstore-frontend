import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton({ children }: { children: ReactNode }) {
	const { pending } = useFormStatus();
	return (
		<button
			className="bg-black rounded-2xl text-white uppercase text-xl py-3 font-bold"
			type="submit"
			disabled={pending}
		>
			{pending ? (
				<span className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent" />
			) : (
				children
			)}
		</button>
	);
}

export default SubmitButton;

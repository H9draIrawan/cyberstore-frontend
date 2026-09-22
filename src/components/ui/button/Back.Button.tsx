import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function BackButton() {
	const navigate = useNavigate();
	return (
		<button
			aria-label="Back to app"
			className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95"
			onClick={() => navigate("/home", { replace: true })}
			type="button"
		>
			<IoMdArrowRoundBack aria-hidden="true" className="text-4xl" />
		</button>
	);
}

export default BackButton;

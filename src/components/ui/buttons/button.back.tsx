import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
	const navigate = useNavigate();
	return (
		<button
			onClick={() =>
				navigate("/app", {
					replace: true,
				})
			}
			type="button"
		>
			<IoMdArrowRoundBack className="text-4xl" />
		</button>
	);
}

export default ButtonBack;

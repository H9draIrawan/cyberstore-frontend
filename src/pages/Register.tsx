import { useNavigate } from "react-router-dom";
import BackButton from "../components/ui/button/Back.Button";
import SubmitButton from "../components/ui/button/Submit.Button";
import Header from "../components/Header";
import AuthLayout from "../layouts/Auth.Layout";

function Register() {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<AuthLayout>
				<BackButton />
				<h1 className="py-7 text-center font-bold uppercase text-4xl">
					Register
				</h1>
				<input
					className="min-h-full border-2 p-2 rounded-xl"
					type="text"
					name="username"
					placeholder="username"
				/>
				<input
					className="min-h-full border-2 p-2 rounded-xl"
					type="email"
					name="email"
					placeholder="email"
				/>
				<input
					className="min-h-full border-2 p-2 rounded-xl"
					type="password"
					name="password"
					placeholder="password"
				/>
				<label className="flex items-center gap-2 text-lg">
					<input type="checkbox" name="rememberMe" className="size-4" />
					Remember me
				</label>
				<SubmitButton>Register</SubmitButton>
				<h1 className="text-center">OR</h1>
				<hr />
				<span className={"text-lg text-center"}>
					Already have account?{" "}
					<button
						className={"font-bold"}
						type="button"
						onClick={() =>
							navigate("/login", {
								replace: true,
							})
						}
					>
						login
					</button>
				</span>
			</AuthLayout>
		</>
	);
}

export default Register;

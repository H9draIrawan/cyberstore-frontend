import Header from "../components/Header";
import BackButton from "../components/ui/button/Back.Button";
import SubmitButton from "../components/ui/button/Submit.Button";
import AuthLayout from "../layouts/Auth.Layout";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<AuthLayout>
				<BackButton />
				<h1 className="py-7 text-center font-bold uppercase text-4xl">Login</h1>
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
				<SubmitButton>Login</SubmitButton>

				<button
					className={"text-center text-lg"}
					type="button"
					onClick={() =>
						navigate("/forgot-password", {
							replace: true,
						})
					}
				>
					forgot password?
				</button>
				<h1 className="text-center">OR</h1>
				<hr />
				<span className={"text-lg text-center"}>
					Don't have account?{" "}
					<button
						className={"font-bold"}
						type="button"
						onClick={() =>
							navigate("/register", {
								replace: true,
							})
						}
					>
						register
					</button>
				</span>
			</AuthLayout>
		</>
	);
}

export default Login;

"use client";

import { useNavigate } from "react-router-dom";
import BackButton from "../components/ui/button/Back.Button";
import SubmitButton from "../components/ui/button/Submit.Button";
import Header from "../components/Header";
import AuthLayout, { type AuthAction } from "../layouts/Auth.Layout";
import { getErrorMessage, register } from "../services/Auth.Service";

const registerAction: AuthAction = async (_previousState, formData) => {
	const username = formData.get("username") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		await register(username, email, password);
		return { success: true, error: null };
	} catch (error) {
		console.log(error);
		return {
			success: false,
			error: getErrorMessage(error, "Try again"),
		};
	}
};

function Register() {
	const navigate = useNavigate();
	return (
		<>
			<Header />
			<AuthLayout action={registerAction}>
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

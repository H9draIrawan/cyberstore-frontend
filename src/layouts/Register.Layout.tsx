"use client";

import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getErrorMessage, register } from "../services/Auth.Service";
import SubmitButton from "../components/ui/button/Submit.Button";
import BackButton from "../components/ui/button/Back.Button";

type authState = {
	success: boolean;
	error: string | null;
};

type authAction = (
	_previousState: authState,
	formData: FormData,
) => authState | Promise<authState>;

const registerAction: authAction = async (_previousState, formData) => {
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

function RegisterLayout() {
	const [state, action] = useActionState(registerAction, {
		success: false,
		error: null,
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (state.success) {
			navigate("/login", { replace: true });
		}
	}, [state.success, navigate]);

	return (
		<main className="flex min-h-screen items-center justify-center bg-black">
			<form
				action={action}
				className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white"
			>
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
				{state.error && (
					<p className="text-center text-base text-red-600">{state.error}</p>
				)}
			</form>
		</main>
	);
}

export default RegisterLayout;

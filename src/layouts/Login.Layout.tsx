"use client";

import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/Auth.Service";
import { useAuth } from "../contexts/Auth.Provider";
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

const loginAction: authAction = async (_previousState, formData) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const rememberMe = formData.get("rememberMe") === "rememberMe";

	try {
		await loginUser(email, password, rememberMe);
		return { success: true, error: null };
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Internal server error";
		return { success: false, error: message };
	}
};

function LoginLayout() {
	const navigate = useNavigate();
	const { reload } = useAuth();

	const [state, action] = useActionState(loginAction, {
		success: false,
		error: null,
	});

	useEffect(() => {
		if (!state.success) {
			return;
		}

		const redirectAfterLogin = async () => {
			await reload();
			navigate("/home", { replace: true });
		};

		redirectAfterLogin();
	}, [state.success, reload, navigate]);

	return (
		<main className="flex min-h-screen items-center justify-center bg-black">
			<form
				action={action}
				className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white"
			>
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
					<input
						type="checkbox"
						name="rememberMe"
						value={"rememberMe"}
						className="size-4"
					/>
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
				{state.error && (
					<p className="text-center text-base text-red-600">{state.error}</p>
				)}
			</form>
		</main>
	);
}

export default LoginLayout;

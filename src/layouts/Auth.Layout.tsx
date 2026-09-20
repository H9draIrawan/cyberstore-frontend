"use client";

import { useActionState, useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

//type data state
export type AuthState = { success: boolean; error: string | null };
//type data action
export type AuthAction = (
	previousState: AuthState,
	formData: FormData,
) => AuthState | Promise<AuthState>;

function AuthLayout({
	action: submitAction,
	children,
}: {
	action: AuthAction;
	children: ReactNode;
}) {
	const [state, action] = useActionState(submitAction, {
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
				{children}
				{state.error && (
					<p className="text-center text-base text-red-600">{state.error}</p>
				)}
			</form>
		</main>
	);
}

export default AuthLayout;

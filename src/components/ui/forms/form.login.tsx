"use client";

import ButtonBack from "../buttons/button.back";
import ButtonSubmit from "../buttons/button.submit";
import { useNavigate } from "react-router-dom";

function FormLogin() {
	const navigate = useNavigate();
	return (
		<form className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white">
			<ButtonBack />
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
			<ButtonSubmit>Login</ButtonSubmit>
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
		</form>
	);
}

export default FormLogin;

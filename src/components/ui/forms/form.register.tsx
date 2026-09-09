"use client";

import { useNavigate } from "react-router-dom";
import ButtonBack from "../buttons/button.back";
import ButtonSubmit from "../buttons/button.submit";

function FormRegister() {
	const navigate = useNavigate();
	return (
		<form className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white">
			<ButtonBack />
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
			<ButtonSubmit>Register</ButtonSubmit>
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
		</form>
	);
}

export default FormRegister;

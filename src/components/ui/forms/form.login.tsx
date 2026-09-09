import ButtonBack from "../buttons/button.back";
import ButtonSubmit from "../buttons/button.submit";
import { NavLink } from "react-router-dom";

function FormLogin() {
	return (
		<form className="grid grid-cols-1 gap-4 text-2xl border-2 rounded-2xl p-7 bg-white">
			<ButtonBack />
			<h1 className="my-7 text-center font-bold uppercase text-4xl">Login</h1>
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
			<NavLink className={"text-center text-lg"} to={"/forgot-password"}>
				forgot password?
			</NavLink>
			<h1 className="text-center">OR</h1>
			<hr />
			<span className={"text-lg text-center"}>
				Don't have account?{" "}
				<NavLink className={"font-bold"} to={"/register"}>
					register
				</NavLink>
			</span>
		</form>
	);
}

export default FormLogin;

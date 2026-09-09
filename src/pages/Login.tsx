import FormLogin from "../components/ui/forms/form.login";

function Login() {
	return (
		<>
			<header className="bg-black ps-5">
				<img src="/src/assets/images/logo.png" alt="logo" width={75} />
			</header>
			<main className="flex min-h-screen items-center justify-center bg-black">
				<FormLogin />
			</main>
		</>
	);
}

export default Login;

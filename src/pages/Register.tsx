import FormRegister from "../components/ui/forms/form.register";

function Register() {
	return (
		<>
			<header className="bg-black ps-5">
				<img src="/src/assets/logo.png" alt="logo" width={75} />
			</header>
			<main className="flex min-h-screen items-center justify-center bg-black">
				<FormRegister />
			</main>
		</>
	);
}

export default Register;

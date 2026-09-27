import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/Auth.Service";
import { useAuth } from "../contexts/Auth.Provider";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import BackButton from "../components/ui/button/Back.Button";
import SubmitButton from "../components/ui/button/Submit.Button";

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
		<Box
			component="main"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f3f6f4",
				backgroundImage:
					"radial-gradient(ellipse at 15% 15%, rgba(0, 128, 128, 0.10), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(227, 66, 52, 0.08), transparent 38%)",
				px: 2,
				py: 5,
			}}
		>
			<Paper
				component="form"
				action={action}
				elevation={0}
				sx={{
					width: "100%",
					maxWidth: 440,
					p: { xs: 3, sm: 4.5 },
					border: "1px solid",
					borderColor: "rgba(20, 40, 35, 0.10)",
					borderRadius: 3,
					boxShadow: "0 24px 70px rgba(23, 45, 39, 0.10)",
				}}
			>
				<Stack spacing={2}>
					<BackButton />
					<Box sx={{ pt: 1, pb: 1 }}>
						<Typography
							variant="overline"
							sx={{ color: "#008080", fontWeight: 800, letterSpacing: 1.2 }}
						>
							CYBERSTORE ACCOUNT
						</Typography>
						<Typography
							variant="h4"
							component="h1"
							sx={{ mt: 0.25, fontWeight: 750, letterSpacing: 0 }}
						>
							Welcome back
						</Typography>
						<Typography color="text.secondary" sx={{ mt: 0.75 }}>
							Sign in to continue to your account.
						</Typography>
					</Box>
					<TextField
						label="Email"
						type="email"
						name="email"
						autoComplete="email"
						required
						fullWidth
					/>
					<TextField
						label="Password"
						type="password"
						name="password"
						autoComplete="current-password"
						required
						fullWidth
					/>
					<FormControlLabel
						control={<Checkbox name="rememberMe" value="rememberMe" />}
						label="Remember me"
					/>
					<SubmitButton>Login</SubmitButton>

					<Button
						variant="text"
						type="button"
						onClick={() =>
							navigate("/forgot-password", {
								replace: true,
							})
						}
					>
						Forgot password?
					</Button>
					<Divider>OR</Divider>
					<Typography align="center">
						Don't have an account?{" "}
						<Button
							variant="text"
							type="button"
							onClick={() =>
								navigate("/register", {
									replace: true,
								})
							}
							sx={{ fontWeight: 700 }}
						>
							Register
						</Button>
					</Typography>
					{state.error && (
						<Typography color="error" align="center">
							{state.error}
						</Typography>
					)}
				</Stack>
			</Paper>
		</Box>
	);
}

export default LoginLayout;

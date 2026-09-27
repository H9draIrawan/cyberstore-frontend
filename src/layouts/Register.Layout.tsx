"use client";

import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getErrorMessage, registerUser } from "../services/Auth.Service";
import SubmitButton from "../components/ui/button/Submit.Button";
import BackButton from "../components/ui/button/Back.Button";
import {
	Alert,
	Box,
	Button,
	Divider,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

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
		await registerUser(username, email, password);
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
							Create your account
						</Typography>
						<Typography color="text.secondary" sx={{ mt: 0.75 }}>
							Join Cyberstore to start shopping.
						</Typography>
					</Box>
					<TextField
						label="Username"
						type="text"
						name="username"
						autoComplete="username"
						required
						fullWidth
					/>
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
						autoComplete="new-password"
						required
						fullWidth
					/>
					<SubmitButton>Register</SubmitButton>
					<Divider>OR</Divider>
					<Typography color="text.secondary" align="center">
						Already have an account?{" "}
						<Button
							variant="text"
							type="button"
							sx={{ fontWeight: 700 }}
							onClick={() => navigate("/login", { replace: true })}
						>
							Log in
						</Button>
					</Typography>
					{state.error && <Alert severity="error">{state.error}</Alert>}
				</Stack>
			</Paper>
		</Box>
	);
}

export default RegisterLayout;

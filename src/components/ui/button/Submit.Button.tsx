import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function SubmitButton({ children }: { children: ReactNode }) {
	const { pending } = useFormStatus();
	return (
		<Button
			variant="contained"
			type="submit"
			disabled={pending}
			aria-busy={pending}
			sx={{ borderRadius: 2, py: 1.25, fontWeight: 700, display: "flex" }}
		>
			{pending ? (
				<CircularProgress color="inherit" size={22} aria-label="Submitting" />
			) : (
				children
			)}
		</Button>
	);
}

export default SubmitButton;

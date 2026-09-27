import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
	const navigate = useNavigate();
	return (
		<IconButton
			aria-label="Back to home"
			color="inherit"
			size="small"
			onClick={() => navigate("/home", { replace: true })}
			sx={{
				alignSelf: "flex-start",
				p: 1,
			}}
		>
			<ArrowBackIcon fontSize="large" />
		</IconButton>
	);
}

export default BackButton;

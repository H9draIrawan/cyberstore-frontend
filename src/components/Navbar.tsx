import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/Auth.Provider";
function Navbar() {
	const navItems = [
		{
			label: "Home",
			path: "/home",
		},
		{
			label: "Product",
			path: "/product",
		},
		{
			label: "Shop",
			path: "/shop",
		},
		{
			label: "Dashboard",
			path: "/dashboard",
		},
	];

	const { user, logout } = useAuth();

	return (
		<AppBar position="static" color="default" elevation={2}>
			<Toolbar sx={{py : 1}}>
				<NavLink to="/home" style={{ display: "flex", flexShrink: 0 }}>
					<img src="/src/assets/logo.png" alt="Logo" width={75} />
				</NavLink>
				<Box
					component="ul"
					sx={{
						display: "flex",
						flex: 1,
						justifyContent: "center",
						gap: { xs: 1, sm: 4 },
						listStyle: "none",
						m: 0,
						p: 0,
					}}
				>
					{navItems.map(
						(item) =>
							user && (
								<Box component="li" key={item.path}>
									<NavLink
										style={({ isActive }) => ({
											color: isActive ? "inherit" : "#64748b",
											fontWeight: isActive ? 700 : 400,
											textDecoration: "none",
										})}
										to={`${item.path}`}
									>
										<Typography component="span" variant="h6">
											{item.label}
										</Typography>
									</NavLink>
								</Box>
							),
					)}
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						gap: { xs: 0.5, sm: 2 },
					}}
				>
					{user ? (
						<>
							<IconButton color="primary">
								<FavoriteIcon />
							</IconButton>
							<IconButton color="primary">
								<ShoppingCartIcon />
							</IconButton>
							<Avatar sx={{ bgcolor: "primary.main" }}>
								<PersonIcon />
							</Avatar>
							<Typography
								sx={{ display: { xs: "none", md: "block" }, fontWeight: 600 }}
							>
								{user.username}
							</Typography>
							<Button variant="contained" color="error" onClick={logout}>
								Logout
							</Button>
						</>
					) : (
						<Button
							component={NavLink}
							to="/login"
							variant="contained"
							sx={{ fontWeight: 700 }}
						>
							Login
						</Button>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;

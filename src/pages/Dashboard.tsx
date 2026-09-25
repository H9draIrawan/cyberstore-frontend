import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DashboardLayout from "../layouts/Dashboard.Layout";

function Dashboard() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<DashboardLayout />
			</main>
			<Footer />
		</>
	);
}

export default Dashboard;

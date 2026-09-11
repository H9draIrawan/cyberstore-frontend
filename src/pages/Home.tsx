import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeLayout from "../layouts/Home.Layout";

function Home() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<HomeLayout />
			</main>
			<Footer />
		</>
	);
}

export default Home;

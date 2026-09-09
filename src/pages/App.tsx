import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<HeroSection />
				<Content />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;

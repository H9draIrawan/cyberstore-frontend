import Navbar from "../components/Navbar";
import HomeLayout from "../layouts/Home.Layout";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<HomeLayout />
			</main>
		</>
	);
}

export default App;

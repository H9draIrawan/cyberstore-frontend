import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopLayout from "../layouts/Shop.Layout";

function Shop() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<ShopLayout />
			</main>
			<Footer />
		</>
	);
}

export default Shop;

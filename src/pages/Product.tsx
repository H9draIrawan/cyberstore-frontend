import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductLayout from "../layouts/Product.Layout";

function Product() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<ProductLayout />
			</main>
			<Footer />
		</>
	);
}

export default Product;

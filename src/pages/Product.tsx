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
		</>
	);
}

export default Product;

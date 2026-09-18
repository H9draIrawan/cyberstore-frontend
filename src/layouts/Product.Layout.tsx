import Sidebar from "../components/Sidebar";
import PaginationButton from "../components/ui/button/Pagination.Button";
import ProductCard from "../components/ui/card/Product.Card";

function ProductLayout() {
	return (
		<div className="flex">
			<section className="flex-auto">
				<Sidebar />
			</section>
			<section className="flex-auto flex flex-col my-5">
				<div className="grid grid-cols-3 grid-rows-3 gap-4">
					<ProductCard />
				</div>
				<PaginationButton />
			</section>
		</div>
	);
}

export default ProductLayout;

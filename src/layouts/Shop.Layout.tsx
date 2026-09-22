import PaginationButton from "../components/ui/button/Pagination.Button";
import ShopCard from "../components/ui/card/Shop.Card";
import SearchInput from "../components/ui/input/Search.Input";
import PlusButton from "../components/ui/button/Plus.Button";

function ShopLayout() {
	return (
		<div className="flex flex-col w-full h-fit">
			<section className="w-1/4 px-7">
				<form action="" className="space-y-4">
					<SearchInput />
					<div className="flex flex-wrap gap-2">
						<PlusButton>Smartphone</PlusButton>
					</div>
				</form>
			</section>
			<section className="flex-auto flex flex-col my-5">
				<div className="grid grid-cols-3 grid-rows-3 gap-4">
					<ShopCard />
				</div>
				<PaginationButton />
			</section>
		</div>
	);
}

export default ShopLayout;

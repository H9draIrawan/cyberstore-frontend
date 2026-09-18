import SubmitButton from "../button/Submit.Button";

function ProductCard() {
	return (
		<div className="m-3 flex w-full max-w-sm flex-col overflow-hidden rounded-lg bg-gray-300 shadow-sm">
			<div className="aspect-square w-full overflow-hidden p-5">
				<img
					className="h-full w-full object-cover"
					src="/src/assets/camera.webp"
					alt="Apple AirPods"
				/>
			</div>
			<div className="flex flex-col gap-2 p-4 text-center">
				<div className="text-xl">Apple</div>
				<div className="text-3xl font-black">$110</div>
				<SubmitButton>Buy Now</SubmitButton>
			</div>
		</div>
	);
}

export default ProductCard;

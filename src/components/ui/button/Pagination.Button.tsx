import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PaginationButton() {
	return (
		<div className="w-full flex items-center justify-center gap-3 shrink-0">
			<button className="bg-white w-fit h-fit rounded-full text-4xl p-2 cursor-pointer">
				<IoIosArrowBack />
			</button>
			<span className="text-3xl text-black bg-transparent font-bold p-2 px-6 rounded-full">
				2
			</span>
			<span className="text-3xl text-white bg-black font-bold p-2 px-6 rounded-full">
				3
			</span>
			<span className="text-3xl text-black bg-transparent font-bold p-2 px-6 rounded-full">
				4
			</span>
			<button className="bg-white w-fit h-fit rounded-full text-4xl p-2 cursor-pointer">
				<IoIosArrowForward />
			</button>
		</div>
	);
}

export default PaginationButton;

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PaginationButton() {
	return (
		<div className="w-full flex items-center justify-center gap-1.5 sm:gap-3 shrink-0">
			<button
				aria-label="Previous page"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-2xl text-black shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:h-12 sm:w-12 sm:text-3xl cursor-pointer"
			>
				<IoIosArrowBack />
			</button>
			<button className="flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-xl font-bold text-black transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:h-12 sm:min-w-12 sm:px-4 sm:text-2xl">
				2
			</button>
			<button
				aria-current="page"
				className="flex h-10 min-w-10 items-center justify-center rounded-full bg-black px-3 text-xl font-bold text-white shadow-md sm:h-12 sm:min-w-12 sm:px-4 sm:text-2xl"
			>
				3
			</button>
			<button className="flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-xl font-bold text-black transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:h-12 sm:min-w-12 sm:px-4 sm:text-2xl">
				4
			</button>
			<button
				aria-label="Next page"
				className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-2xl text-black shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:h-12 sm:w-12 sm:text-3xl cursor-pointer"
			>
				<IoIosArrowForward />
			</button>
		</div>
	);
}

export default PaginationButton;

import { IoSearch } from "react-icons/io5";

function SearchInput() {
	return (
		<div className="flex gap-3 w-full items-center rounded-full bg-white mt-5 px-5 py-2">
			<IoSearch className="text-4xl" />
			<input
				className="bg-transparent text-lg text-gray-700 placeholder:text-gray-400 outline-none border-none"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
}

export default SearchInput;

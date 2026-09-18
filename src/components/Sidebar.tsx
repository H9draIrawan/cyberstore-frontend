import { useState } from "react";
import SearchInput from "./ui/input/Search.Input";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import CheckboxInput from "./ui/input/Checkbox.Input";

function Sidebar() {
	const [category, setCategory] = useState([
		{
			label: "Smartphone",
			active: false,
			brand: ["Apple", "Samsung", "Xiaomi"],
		},
		{
			label: "Laptop",
			active: false,
			brand: ["Asus", "Acer", "Lenovo"],
		},
		{
			label: "Gaming",
			active: false,
			brand: ["Playstation", "Xbox", "Nintendo"],
		},
	]);

	const toggleCategory = (index: number) => {
		setCategory((categories) =>
			categories.map((item, itemIndex) =>
				itemIndex === index ? { ...item, active: !item.active } : item,
			),
		);
	};

	return (
		<section className="w-fit">
			<form>
				<SearchInput />
				<div className="w-full bg-white m-5 rounded-2xl">
					{category.map((item, index) => (
						<div className="w-full h-fit px-5 py-3 mx-3">
							<div className="flex gap-3 py-3">
								{item.active ? (
									<IoIosArrowDown
										className="text-3xl"
										onClick={() => toggleCategory(index)}
									/>
								) : (
									<IoIosArrowForward
										className="text-3xl"
										onClick={() => toggleCategory(index)}
									/>
								)}

								<label className="font-bold text-xl">{item.label}</label>
							</div>
							<hr className="opacity-25" />
							{item.active && (
								<div className="flex flex-col gap-0" key={index}>
									{item.brand.map((name) => (
										<CheckboxInput name={name} />
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</form>
		</section>
	);
}

export default Sidebar;

function CheckboxInput({ name }: { name: string }) {
	return (
		<label className="pt-3 text-xl">
			<input
				className="mr-4 h-5 w-5 accent-black transition-transform hover:scale-110 focus:ring-2"
				type="checkbox"
				name="brand"
				value={name}
			/>
			{name}
		</label>
	);
}

export default CheckboxInput;

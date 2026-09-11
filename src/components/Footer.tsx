import { FaTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<footer className="container grid min-h-96 py-10 grid-cols-3 gap-12 items-center ps-20">
			<div className="flex flex-col gap-11">
				<h1 className="text-2xl font-extrabold">Cyber</h1>
				<p className="mt-6 max-w-md leading-relaxed">
					We are a residential design firm located in Portland. Our
					boutique-studio offers more than
				</p>
				<div className="mt-8 flex items-center justify-start gap-5 text-2xl">
					<FaTwitter className="transition-transform hover:-translate-y-0.5" />
					<FaFacebook className="transition-transform hover:-translate-y-0.5" />
					<FaTiktok className="transition-transform hover:-translate-y-0.5" />
					<FaInstagram className="transition-transform hover:-translate-y-0.5" />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="mb-2 font-bold">Services</h1>
				<p>Bonus Program</p>
				<p>Gift Cards</p>
				<p>Credit and payment</p>
				<p>Service contacts</p>
				<p>Non-cash account</p>
				<p>Payment</p>
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="mb-2 font-bold">Assistance to the buyer</h1>
				<p>Find an order</p>
				<p>Term of delivery</p>
				<p>Exchange and return of goods</p>
				<p>Guarantee</p>
				<p>Frequently asked questions</p>
				<p>Terms of use the site</p>
			</div>
		</footer>
	);
}

export default Footer;

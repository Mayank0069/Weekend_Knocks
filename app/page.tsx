import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="flex flex-col justify-center items-center h-screen">
				<h1>Welcome to Weekend Knocks</h1>
			</div>
			<Footer />
		</>
	);
}

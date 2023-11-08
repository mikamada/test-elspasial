import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Passion from "@/components/Passion";
import Footer from "@/components/Footer";


const page = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<News />
			<Passion />
			<Footer />
		</main>
	);
};

export default page;

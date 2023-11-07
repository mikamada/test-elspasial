import React from "react";
import Image from "next/image";
import Container from "../Container";

const Hero = () => {
	return (
		<Container classnames={"bg-color-dark-blue"}>
			<div className="flex lg:flex-row flex-col justify-between items-center">
				<div className="text-color-primary flex flex-col gap-6 ">
					<h1 className="font-bold lg:text-6xl md:text-4xl text-3xl pr-1">
						Generate <span className="text-color-orange">New </span> <br />{" "}
						Digital Cooperation
					</h1>
					{/* <h1 className="font-bold md:text-7xl text-5xl">
						
					</h1> */}
					<p className="md:text-2xl text-xl">
						We design and build solutions by connecting ideas and technologhy to
						solve problems and get new ideas to business lifecycle.
					</p>
					<button className="w-[180px] h-12 bg-color-orange text-color-primary font-medium rounded-full">
						Get Started
					</button>
				</div>
				<Image
					src={"/images/hero.png"}
					width={700}
					height={100}
					// className="hidden lg:flex"
				/>
			</div>
		</Container>
	);
};

export default Hero;

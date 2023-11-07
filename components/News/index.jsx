import React from "react";
import CardNews from "./CardNews";
import Container from "../Container";

const News = () => {
	return (
		<section className="w-full h-fit md:px-[120px] px-6 py-[50px]">
			<div className="flex flex-col justify-center items-center mb-8">
				<h2 className="lg:text-6xl md:text-4xl text-3xl text-[#090227] font-bold text-center">
					Latest News
				</h2>
				<div className="w-[119px] h-1 bg-[#E78448] rounded-full"></div>
			</div>
			<p className="text-lg text-[#A1A1A1] text-center">
				At elKopra we are committed to providing top-notcto cater to all your
				needs. Our team of dedicated professionals is passionate about
				delivering exceptional solutions that exceed expectations.
			</p>
			<div className="w-full h-fit flex lg:flex-row flex-col gap-5 justify-between items-center mt-6">
				<CardNews />
				<CardNews />
				<CardNews />
			</div>
		</section>
	);
};

export default News;

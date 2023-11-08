"use client"
import React, { useState, useEffect } from "react";
import CardNews from "./CardNews";

const News = () => {
	const [articles, setArticles] = useState([]);

	const fetchArticles = async () => {
		const response = await fetch(process.env.NEXT_PUBLIC_API);
		const news = await response.json();
		setArticles(news);
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	console.log({ articles });

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
			<div className="w-full md:min-h-[486px] h-fit grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 grid-cols-1 mt-6">
				{articles.articles?.map((item, idx) => (
					<CardNews key={idx} title={item?.title} image={item?.urlToImage} description={item?.description} />
				))}
			</div>
		</section>
	);
};

export default News;

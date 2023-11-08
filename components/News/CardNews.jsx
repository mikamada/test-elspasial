"use client";
import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";

const CardNews = ({ title, description, image }) => {

	useEffect(() => {
		Aos.init()
	},[])
	return (
		<div className="lg:w-[345px] w-full lg:h-[486px] h-fit border border-color-dark-blue hover:border-color-orange shadow-lg lg:rounded-2xl rounded-none pb-11 overflow-hidden mb-3" data-aos="fade-up">
			<img src={image} alt="" className="w-full lg:h-[207px] hover:scale-105 transition-all" />
			<div className="mt-6 px-[10px] flex flex-col gap-4">
				<h3 className="text-[#3D3D3D] text-2xl font-bold line-clamp-3">{title}</h3>
				<p className="text-[#ADADAD] font-medium text-xs">{description}</p>
				<Link href={""} className="text-md text-[#A3A0AE] font-bold bottom-0">Learn More...</Link>
			</div>
		</div>
	);
}; 

export default CardNews;

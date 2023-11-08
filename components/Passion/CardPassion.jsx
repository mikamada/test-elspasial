"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardPassion = ({ title, count, icon }) => {
	useEffect(() => {
		Aos.init();
	});
	return (
		<div className="text-color-primary flex flex-col justify-start items-center gap-6" data-aos="fade-up">
			<Image src={icon} width={60} height={60} alt="icon" />
			<span className="md:text-6xl text-2xl font-bold">{count}</span>
			<p className="md:text-2xl text-xl font-medium text-center">{title}</p>
		</div>
	);
};

export default CardPassion;

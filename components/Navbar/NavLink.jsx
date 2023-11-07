import React from "react";
import Link from "next/link";
const NavLink = () => {
	return (
		<ul className="text-color-primary font-bold lg:flex gap-10 items-center hidden">
			<Link href={"/"} className="text-color-primary">
				About Us
			</Link>
			<Link href={"/"} className="text-[#D6D6D6]">
				Product
			</Link>
			<Link href={"/"} className="text-[#D6D6D6]">
				Project
			</Link>
			<Link href={"/"} className="text-[#D6D6D6]">
				Career
			</Link>
			<button className="w-40 h-12 flex justify-center items-center border border-color-primary rounded-full">
				Contact Us
			</button>
		</ul>
	);
};

export default NavLink;

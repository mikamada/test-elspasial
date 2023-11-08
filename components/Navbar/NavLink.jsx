import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenu = () => {
	// State to track whether the dropdown menu is open or closed
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="relative">
			<button className="text-[#D6D6D6] flex justify-between items-center gap-2" onClick={toggleDropdown}>
				Product <IoIosArrowDown scale={20} />
			</button>
			{isDropdownOpen && (
				<div className="absolute w-[150px] h-fit top-8 right-0 bg-color-primary rounded-lg p-2 text-[#090227] flex flex-col px-3 py-3">
					{/* Add your dropdown content here */}
					<Link href={"/product/feature1"}>product 1</Link>
					<Link href={"/product/feature2"}>product 2</Link>
					<Link href={"/product/feature3"}>product 3</Link>
				</div>
			)}
		</div>
	);
};

const NavLink = () => {
	return (
		<ul className="text-color-primary font-bold lg:flex gap-10 items-center hidden">
			<Link href={"/"} className="text-color-primary">
				About Us
			</Link>
			<DropdownMenu />
			<Link href={"/"} className="text-[#D6D6D6]">
				Project
			</Link>
			<Link href={"/"} className="text-[#D6D6D6]">
				Career
			</Link>
			<button className="w-40 h-12 flex justify-center items-center border border-color-primary rounded-full hover:bg-color-orange transition-all hover:border-color-orange">
				Contact Us
			</button>
		</ul>
	);
};

export default NavLink;

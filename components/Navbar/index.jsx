"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import NavLink from "./NavLink";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const DropdownMenu = () => {
		// State to track whether the dropdown menu is open or closed
		const [isDropdownOpen, setIsDropdownOpen] = useState(false);

		const toggleDropdown = () => {
			setIsDropdownOpen(!isDropdownOpen);
		};

		return (
			<div className="relative">
				<button
					className="text-[#D6D6D6] flex justify-between items-center px-3 py-2 gap-2"
					onClick={toggleDropdown}>
					Product <IoIosArrowDown scale={20} />
				</button>
				{isDropdownOpen && (
					<div className="absolute w-[250px] h-fit top-9 right- bg-color-primary rounded-lg p-2 text-[#090227] flex flex-col px-3 py-3">
						{/* Add your dropdown content here */}
						<Link href={"/product/feature1"}>product 1</Link>
						<Link href={"/product/feature2"}>product 2</Link>
						<Link href={"/product/feature3"}>product 3</Link>
					</div>
				)}
			</div>
		);
	};

	return (
		<nav className="bg-color-dark-blue flex justify-between items-center py-[30px] lg:px-[120px] md:px-14 px-6">
			<Link href={"/"} className="z-20">
				<Image src="/images/logo.png" width={130} height={37} alt="logo" />
			</Link>
			<NavLink />

			{/* Hamburger */}
			<div onClick={handleClick} className="lg:hidden block z-20">
				{!nav ? (
					<RxHamburgerMenu size={30} color="white" />
				) : (
					<FaTimes size={30} color="white" />
				)}
			</div>

			<ul
				className={
					!nav
						? "hidden"
						: "absolute text-2xl top-0 left-0 w-full h-full bg-color-dark-blue flex flex-col justify-center items-start gap-4 z-10 px-6 bottom-0 transition-all"
				}>
				<Link
					href={"/"}
					className="text-color-primary w-full bg-color-orange px-3 py-2 rounded-md">
					About Us
				</Link>
				<DropdownMenu />
				<Link href={"/"} className="text-[#D6D6D6] px-3 py-2">
					Project
				</Link>
				<Link href={"/"} className="text-[#D6D6D6] px-3 py-2">
					Career
				</Link>
				<button className="w-full h-12 text-2xl flex justify-center text-color-primary items-center bg-color-orange rounded-full shadow-xl mt-5 ">
					Contact Us
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;

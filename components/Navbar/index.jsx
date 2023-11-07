"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<nav className="bg-color-dark-blue flex justify-between items-center py-[30px] lg:px-[120px] md:px-14 px-6">
			<Link href={"/"}>
				<Image src="/images/logo.png" width={130} height={37} alt="logo" />
			</Link>
			<div>
				<NavLink />

				{/* Hamburger */}
				<div onClick={handleClick}  className="lg:hidden block">
					{!nav ? (
						<RxHamburgerMenu size={30} color="white" />
					) : (
						<FaTimes size={30} />
					)}
				</div>

				<ul
					className={
						!nav
							? "hidden"
							: "absolute top-0 left-0 w-full h-screen bg-[#0a1927] flex flex-col justify-center items-center"
					}>
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
			</div>
		</nav>
	);
};

export default Navbar;

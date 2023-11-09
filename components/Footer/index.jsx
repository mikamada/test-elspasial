import React from "react";
import Image from "next/image";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const index = () => {
	const href = ["About Us", "Career", "Contact Us"];
	return (
		<footer className="w-full lg:h-[440px] md:h-full h-full bg-color-light-blue py-[60px] md:px-[120px] sm:px-14 px-6 text-color-primary flex lg:flex-row flex-col gap-4 bottom-0">
			<div className="lg:w-1/2 w-full">
				<Link href={"/"}>
					<Image src={"/images/logo.png"} width={172} height={49} />
				</Link>
				<div className="flex flex-col gap-4 mt-9">
					<div className="flex flex-row items-start gap-[10px]">
						<Image src={"/icons/ic-location.png"} width={20} height={20} />
						<p className="text-md md:w-72 w-full ">
							Jl. Terusan Jakarta No.76, Antapani Tengah, Bandung, Jawa Barat,
							40291
						</p>
					</div>
					<div className="flex flex-row items-start gap-[10px]">
						<Image src={"/icons/ic-call.png"} width={20} height={20} />
						<p className="text-md md:w-72 w-full ">
							Jl. Terusan Jakarta No.76, Antapani Tengah, Bandung, Jawa Barat,
							40291
						</p>
					</div>
					<div className="flex flex-row items-start gap-[10px]">
						<Image src={"/icons/ic-mail.png"} width={20} height={20} />
						<p className="text-md md:w-72 w-full ">elkopra@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="flex md:flex-row flex-col md:gap-[90px] gap-5 mt-3">
				{/* <FooterLink title={"Company"} link={""} /> */}
				<div>
					<h2 className="font-bold text-[22px] mb-6">Company</h2>
					<div className="flex flex-col gap-2">
						<Link href={"/"} className="font-normal">
							About Us
						</Link>
						<Link href={"#"} className="font-normal">Career</Link>
						<Link href={"#"} className="font-normal">Contact Us</Link>
					</div>
				</div>
				<div>
					<h2 className="font-bold text-[22px] mb-6">Product</h2>
					<div className="flex flex-col gap-2">
						<Link href={"#"} className="font-normal">elKopra</Link>
						<Link href={"#"} className="font-normal">elRaga</Link>
						<Link href={"#"} className="font-normal">elResto</Link>
					</div>
				</div>
				<div>
					<h2 className="font-bold text-[22px] mb-6">Find Us</h2>
					<ul className="flex justify-start items-center gap-5">
						<li>
							<a href="">
								<BsLinkedin size={24} />
							</a>
						</li>
						<li>
							<a href="">
								<AiFillInstagram size={25} />
							</a>
						</li>
						<li>
							<a href="">
								<ImFacebook2 size={24} />
							</a>
						</li>
						<li>
							<a href="">
								<BsYoutube size={24} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default index;

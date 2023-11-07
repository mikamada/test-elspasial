import React from "react";
import Container from "../Container";
import CardPassion from "./CardPassion";

const index = () => {
	return (
		<Container classnames={"bg-color-dark-blue"}>
			<div className="flex flex-col justify-center items-center mb-8 text-color-primary">
				<p>Lorem ipsum dolot amet lorem ipsum</p>
				<h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-center">
					Our <span className="text-color-orange">Passion</span> What We Do.
				</h2>
				<div className="w-[119px] h-1 bg-[#E78448] rounded-full"></div>
			</div>
			<div className="flex items-center justify-between w-full md:px-10 px-0 mt-20">
				<CardPassion
					icon={"/icons/icon-feedback.png"}
					title={"Possitive Feedback"}
					count={"98%"}
				/>
				<CardPassion
					icon={"/icons/icon-people.png"}
					title={"Enthusiastic Fulltime Employee"}
					count={"120"}
				/>
				<CardPassion
					icon={"/icons/icon-project.png"}
					title={"Project Completed"}
					count={"20"}
				/>
			</div>
			<div className="w-full h-fit bg-color-light-blue rounded-2xl lg:py-[70px] md:scroll-py-14 py-12 lg:px-[53px] md:px-4 px-4 text-color-primary flex justify-between lg:mt-[200px] md:mt-[100px] mt-8 relative">
				<div className="flex flex-col gap-4">
					<h2 className="md:text-[40px] text-3xl font-bold">Subscribe news letter</h2>
					<p className="text-lg md:w-[70%] w-full">
						Using a combination of technology, process and talents we focus on
						our users needs and help to accelerate their business at any scale.
						We deliver consistent{" "}
					</p>
					<div className="relative md:w-fit w-full">
						<input
							type="email"
							className="h-12 md:w-[552px] w-full md:rounded-full rounded-lg px-6 text-[#A1A1A1] outline-none"
							placeholder="Input email"
						/>
						<button className="md:w-[180px] w-full h-12 bg-color-orange text-color-primary font-medium md:rounded-full rounded-lg md:absolute end-0 md:mt-0 mt-2">
							Send Email
						</button>
					</div>
					<p className="text-xs">
						This site is protected by reCAPTCHA and the Google{" "}
						<a href="" className="underline">
							Privacy Policy
						</a>
						and{" "}
						<a href="" className="underline">
							Terms of Service apply
						</a>
						.
					</p>
				</div>
				<img
					src={"/images/photo2.png"}
					className="w-[700px] h-[570px] absolute -right-16 bottom-0 lg:block hidden"
				/>
			</div>
		</Container>
	);
};

export default index;

import React from "react";

const CardNews = () => {
	return (
		<div className="lg:w-[345px] w-full lg:h-[486px] h-fit border border-color-dark-blue lg:rounded-2xl rounded-none pb-11">
			<img src="/images/photo3.png" alt="" className="w-full lg:h-[207px]" />
			<div></div>
			<div className="mt-6 px-[10px] flex flex-col gap-4">
				<h3 className="text-[#3D3D3D] text-2xl font-bold">Title</h3>
				<p className="text-[#ADADAD] font-medium text-xs">
					Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet
					Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet
					Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet
					Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet{" "}
				</p>
				<p className="text-md text-[#A3A0AE] font-bold">Learn More...</p>
			</div>
		</div>
	);
};

export default CardNews;

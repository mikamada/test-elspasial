import Image from "next/image";

const CardPassion = ({ title, count, icon }) => {
	return (
		<div className="text-color-primary flex flex-col justify-start items-center gap-6">
			<Image src={icon} width={60} height={60} alt="icon" />
			<span className="md:text-6xl text-2xl font-bold">{count}</span>
			<p className="md:text-2xl text-xl font-medium text-center">{title}</p>
		</div>
	);
};

export default CardPassion;

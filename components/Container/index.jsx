const Container = ({ children, classnames }) => {
	return (
		<section
			className={`w-full h-fit py-[30px] lg:px-[120px] md:px-14 px-6 ${classnames}`}>
			{children}
		</section>
	);
};

export default Container;

import React from "react";
import backgroundImage from "../img/backgroundImage.png";

const Header = () => {
	return (
		<>
			<div style={headerStyle}>
				<div style={headerText}>
					Watch <br /> Something <br /> Incredible.
				</div>
			</div>
		</>
	);
};

export default Header;

const headerStyle = {
	width: "100%",
	height: 548,
	// backgroundColor: "red",
	display: "flex",
	alignItems: "center",
	backgroundImage: `url(${backgroundImage})`,
};

const headerText = {
	width: 490,
	height: 282,
	fontSize: 72,
	fontWeight: 700,
	color: "white",
	marginLeft: 77,
	marginRight: 873,
	marginBottom: 159,
	margintop: 109,
	marginBottom: 159,
};

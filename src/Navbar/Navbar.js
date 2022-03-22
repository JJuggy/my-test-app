import React from "react";
import styles from "./mystyle.module.css";
const Navbar = () => {
	return (
		<div style={navbarStyle}>
			<div className={styles.logoContainer} style={logoStyle}>
				{" "}
				<div
					style={{
						width: 156.7,
						height: 32.94,
						display: "flex",
						alignItems: "center",
					}}
				>
					MyTestApp
				</div>
			</div>
		</div>
	);
};

export default Navbar;

export const navbarStyle = {
	width: "100%",
	height: 138,
	backgroundColor: "#292929",
	display: "flex",
	alignItems: "center",
};
export const logoStyle = {
	width: 193,
	height: 60,
	textAlign: "center",
	justifyContent: "center",
	marginLeft: 77,
	display: "flex",
	marginRight: 1170,
	borderColor: "white",
	borderWidth: 2,
	fontSize: 30,
	alignItems: "center",
};

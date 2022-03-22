import React from "react";
import styles from "../../src/Navbar/mystyle.module.css";

const Movie = ({movieTitle}) => {
	return (
    
		<div
			className={styles.scrolled}
			style={{
				width: 300,
				height: 300,
				borderRadius: 12,
				backgroundColor: "black",
				marginRight: 13,
				backgroundImage: `url(${movieTitle.Poster})`,
				display: "inline-block",
				color: "white",
				textAlign: "center",
				
			}}
		>
			<div
				style={{
                    display:"flex",
                    justifyContent:"center",
					marginTop:120
				}}
			>
				{movieTitle.Title}
			</div>
		</div>
	);
};

export default Movie;

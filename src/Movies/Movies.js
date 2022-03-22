import React, {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "../../src/Navbar/mystyle.module.css";

const Movies = ({movie}) => {
	const [category, setCategory] = useState([]);

	// console.log("these are the category", category)
	useEffect(() => {
		setCategory(movie[0]);
		console.log(category)
	}, []);
	return (
		<>
			<div
				style={{
					marginBottom: 15,
					marginLeft: 50,
					fontSize:25
				}}
			>
				{category.Type}
			</div>
			<div
				className={styles.scroller}
				style={{
					marginLeft: 50,
					marginBottom: 97,
				}}
			>
				{movie.map(movie => (
					<Movie movieTitle={movie} />
				))}
			</div>
		</>
	);
};

export default Movies;

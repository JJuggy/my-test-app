import React, {useState, useEffect} from "react";
import Movies from "../Movies/Movies";
import axios from "axios";

const Main = () => {
	const [keyword, setKeyword] = useState("marvel");
	const [movies, setMovies] = useState([]);

	const keywordChange = event => {
		setKeyword(event.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://www.omdbapi.com/?apikey=efdeb3d7&s=${keyword}`;
			await axios
				.get(url)
				.then(response => setMovies([response.data.Search]));
		};
		let timer = setTimeout(() => {
			if (keyword) fetchData();
		}, 1500);

		return () => clearTimeout(timer);
	}, [keyword]);

	return (
		<div
			style={{
				width: "100%",
				height: 1013,
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					paddingTop: 40,
					flexDirection: "column",
					alignItems: "center",
					marginBottom: 97,
				}}
			>
				<label
					style={{
						alignSelf: "start",
						marginLeft: 55,
						marginBottom: 7,
					}}
					htmlFor=""
				>
					{" "}
					Search{" "}
				</label>
				<input
					value={keyword}
					onChange={keywordChange}
					style={{
						width: "90%",
						padding: 12,
					}}
					type="text"
				/>
			</div>

			{movies.map(
				movie => ( (<Movies movie={movie} />))
			)}
		</div>
	);
};

export default Main;

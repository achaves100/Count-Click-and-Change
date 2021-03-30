import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState("Fernando");

	useEffect(() => {
		console.log("count: ", count);
		console.log("inputValue: ", inputValue);
	});

	const handleClick = () => {
		setCount(count + 1);
	};
	const handleChange = e => {
		setInputValue(e.target.value);
	};

	return (
		<div className="text-center mt-5">
			<h1>You clicked {count} times!</h1>
			<h1>Hello {inputValue} from React State!</h1>
			<button className="btn btn-primary" onClick={handleClick}>
				{" "}
				Click Here
			</button>
			<input onChange={event => handleChange(event)} />
		</div>
	);
}

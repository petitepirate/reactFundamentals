import React, { useState } from "react";
import "./EightBall.css";

const EightBall = (props) => {
	const [msg, setMsg] = useState("Magic Eight Ball");
	const [color, setColor] = useState("black");

	const handleClick = () => {
		let idx = randomIDX();
		setMsg(props.answers[idx].msg);
		let c = props.answers[idx].color;
		setColor(c);
		colorCount[c] += 1;
	};
	const randomIDX = () => Math.floor(Math.random() * props.answers.length);

	const resetGame = () => {
		setMsg("Magic Eight Ball");
		setColor("black");
		setColorCount({ green: 0, goldenrod: 0, red: 0 });
	};

	const [colorCount, setColorCount] = useState({ green: 0, goldenrod: 0, red: 0 });

	return (
		<>
            <div><h1> Think of a question then click below for the answer </h1> </div>
			<div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
				<h1 className="EightBall-msg">{msg}</h1>
			</div>
			<button onClick={resetGame}>Reset</button>
			{colorCount.green > 0 ? <p>Green balls: {colorCount.green}</p> : null}
			{colorCount.goldenrod > 0 ? <p>Goldenrod balls: {colorCount.goldenrod}</p> : null}
			{colorCount.red > 0 ? <p>Red balls: {colorCount.red}</p> : null}
		</>
	);
};

export default EightBall;

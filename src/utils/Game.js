import React from "react";
// import styles from "../index.css";
import Board from "./Board.js";
import Status from "./Status.js";
import RestartButton from "./RestartButton.js";
import EnterPlayers from "./EnterPlayers.js";

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [p1Turn, setP1Turn] = React.useState(true);

	const calculateWinner = (squares) => {
		const winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < winningCombos.length; i++) {
			const [a, b, c] = winningCombos[i];

			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[b] === squares[c]
			) {
				return squares[a];
			}
		}
		return false;
	};

	const isBoardFull = (squares) => {
		if (!squares.includes(null)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<main>
			<EnterPlayers />
			<Status
				squares={squares}
				p1Turn={p1Turn}
				calculateWinner={calculateWinner}
				isBoardFull={isBoardFull}
			/>
			<Board
				squares={squares}
				setSquares={setSquares}
				p1Turn={p1Turn}
				setP1Turn={setP1Turn}
				calculateWinner={calculateWinner}
				isBoardFull={isBoardFull}
			/>
			<RestartButton setSquares={setSquares} setP1Turn={setP1Turn} />
		</main>
	);
};

export default Game;
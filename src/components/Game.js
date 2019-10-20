import React from "react";
// import styles from "../index.css";
import Board from "./Board.js";
import Status from "./Status.js";
import RestartButton from "./RestartButton.js";
import EnterPlayers from "./EnterPlayers.js";
import GitHubImage from "./GitHubImage.js";

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [p1Turn, setP1Turn] = React.useState(true);
	const [winner, setWinner] = React.useState(null);
	const [boardFull, setBoardFull] = React.useState(false);

	const [player1Username, setPlayer1Username] = React.useState();
	const [player2Username, setPlayer2Username] = React.useState();
	const [player1GitHubImageURL, setPlayer1GitHubImageURL] = React.useState(
		null
	);
	const [player2GitHubImageURL, setPlayer2GitHubImageURL] = React.useState(
		null
	);

	return (
		<main>
			<EnterPlayers
				player1Username={player1Username}
				setPlayer1Username={setPlayer1Username}
				player2Username={player2Username}
				setPlayer2Username={setPlayer2Username}
				player1GitHubImageURL={player1GitHubImageURL}
				setPlayer1GitHubImageURL={setPlayer1GitHubImageURL}
				player2GitHubImageURL={player2GitHubImageURL}
				setPlayer2GitHubImageURL={setPlayer2GitHubImageURL}
			/>
			{player1Username && player2Username ? (
				<GitHubImage
					player1Username={player1Username}
					player2Username={player2Username}
					player1GitHubImageURL={player1GitHubImageURL}
					setPlayer1GitHubImageURL={setPlayer1GitHubImageURL}
					player2GitHubImageURL={player2GitHubImageURL}
					setPlayer2GitHubImageURL={setPlayer2GitHubImageURL}
				/>
			) : null}
			{player1Username && player2Username ? (
				<Status
					squares={squares}
					p1Turn={p1Turn}
					winner={winner}
					setWinner={setWinner}
					boardFull={boardFull}
					setBoardFull={setBoardFull}
					player1Username={player1Username}
					player2Username={player2Username}
				/>
			) : null}
			<Board
				squares={squares}
				setSquares={setSquares}
				p1Turn={p1Turn}
				setP1Turn={setP1Turn}
				winner={winner}
				setWinner={setWinner}
				boardFull={boardFull}
				setBoardFull={setBoardFull}
			/>
			<RestartButton
				setSquares={setSquares}
				setP1Turn={setP1Turn}
				setWinner={setWinner}
				setBoardFull={setBoardFull}
			/>
		</main>
	);
};

export default Game;

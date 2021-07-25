import { useState } from 'react';

// Square Button
function Square({ value, onClick }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
}

// Restart Button
function Restart({ onClick }) {
    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
}

// Calculate Winner
function calculateWinner(squares) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

// Board Full
function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
}

// Main Function
export default function TicTacToe(){
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);
    const nextSymbol = isXNext ? "X" : "O";
    const winner = calculateWinner(squares);

    // Rendering Squares
    function renderSquare(i) {
        return (
          <Square
            value={squares[i]}
            onClick={() => {
              if (squares[i] != null || winner != null) {
                return;
              }
              const nextSquares = squares.slice();
              nextSquares[i] = nextSymbol;
              setSquares(nextSquares);
              setIsXNext(!isXNext);
            }}
          />
        );
    }

    // Game Info
    function getGameStatus() {
        if (winner) {
          return winner + " Won";
        } else if (isBoardFull(squares)) {
          return "Draw!";
        } else {
          return nextSymbol +  "'s Turn" ;
        }
    }

    // Rendering Restart Button 
    function renderRestartButton() {
        return (
          <Restart
            onClick={() => {
              setSquares(Array(9).fill(null));
              setIsXNext(true);
            }}
          />
        );
    }

    return(
        <div className="container">
            <p style={{fontSize:36, margin:10}}>Tic Tac Toe</p>
            <div className="game">
                <div>
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <div className="game-status">{getGameStatus()}</div>
                <div className="restart-button">{renderRestartButton()}</div>
            </div>
        </div>
    );
}
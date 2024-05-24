import { useState, useEffect } from "react";
import './tic.css';
import Modal from "./modal";

function Button({value, onButtonClick}) {
    return (
        <button className="square" onClick={onButtonClick}> {value} </button>
    )
}

function winner(value) {
    const possible = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i=0; i<possible.length; i++)
    {
        const [a, b, c] = possible[i];
        if(value[a] && value[a] === value[b] && value[a] === value[c])
        return value[possible[i][0]]
    }
    return null;
}

function Tictactoe({ isX, value, onPlay }) {
    // const [value, setValue] = useState(Array(9).fill(null));
    // const [isX, setisX] = useState(true);
    const [modal, setModal] = useState(false);

    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setModal(false);
    };
 
    function handleClick(i) {
        if(winner(value) || value[i]) return;

        const nextSquares = value.slice();
        if(isX)
        {
            nextSquares[i] = 'X';
        }
        else
        {
            nextSquares[i] = 'O';
        }
        // setisX(!isX);
        // setValue(nextSquares);
        onPlay(nextSquares);

    }
    let win;
    useEffect(() => {
        win = winner(value);
        if (win) {
          setModal(true);
        }
      }, [value]);

      let status = winner(value) ? `Winner: ${winner(value)}` : `Next player: ${isX ? "X" : "O"}`;

    //const win = winner(value);
    // let status;
    // if (win) {
    //     status = 'Winner: ' + win;
    //     setModal(true);
    // } else {
    //     status = 'Next player: ' + (isX ? 'X' : 'O');
    // }    

    return (
        <div className="tictactoe">
            <div className="main">{status}</div>
            <div className="square-container">
                <Button value={value[0]} onButtonClick = {() => handleClick(0)}/>
                <Button value={value[1]} onButtonClick = {() => handleClick(1)}/>
                <Button value={value[2]} onButtonClick = {() => handleClick(2)}/>
                <Button value={value[3]} onButtonClick = {() => handleClick(3)}/>
                <Button value={value[4]} onButtonClick = {() => handleClick(4)}/>
                <Button value={value[5]} onButtonClick = {() => handleClick(5)}/>
                <Button value={value[6]} onButtonClick = {() => handleClick(6)}/>
                <Button value={value[7]} onButtonClick = {() => handleClick(7)}/>
                <Button value={value[8]} onButtonClick = {() => handleClick(8)}/>
            </div>
            {modal &&  <Modal win={winner(value)} isOpen={modal} onClose={()=>handleClose}/>}
        </div>
    )
}
 
export default function Board() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move)
    {
        setCurrentMove(move);
    }

    const moves = history.map((value, move) => {
        let description;
        if (move > 0) {
          description = 'To the move' + move;
        } else {
          description = 'Start Over';
        }
        return (
          <li>
            <button className="history" onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

      return (
        <div className="game"> 
            <div>
                <Tictactoe isX={xIsNext} value={currentSquares} onPlay={handlePlay}/>
            </div>
            <div >
                <ol className="historyMoves">
                    {moves}
                </ol>
            </div>
        </div>
      )
}
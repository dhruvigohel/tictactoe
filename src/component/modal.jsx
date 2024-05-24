import React from "react";
import './modal.css' 

const Modal = ({ isOpen, onClose, win, setCurrentMove, isDraw}) => {


    if (!isOpen || !isDraw) return null;
    if(isOpen)
    {
        return (
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(204, 255, 229, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <div
                    style={{
                        background: "white",
                        height: 150,
                        width: 240,
                        margin: "auto",
                        padding: "2%",
                        border: "2px solid #000",
                        borderRadius: "10px",
                        boxShadow: "2px solid black",
                    }}
                >
                    <h1>
                    Winner is {win}
                    </h1>
                    <form onSubmit={()=>setCurrentMove}>
                        <button className="closebutton" onClick={onClose}>
                            Play again!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    else if(isDraw)
    {
        return (
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(204, 255, 229, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        background: "white",
                        height: 150,
                        width: 240,
                        margin: "auto",
                        padding: "2%",
                        border: "2px solid #000",
                        borderRadius: "10px",
                        boxShadow: "2px solid black",
                    }}
                >
                    <h1>
                    Drawwwww!!!!!
                    </h1>
                    <form onSubmit={()=>setCurrentMove}>
                        <button className="closebutton" onClick={onClose}>
                            Play again!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    
};
 
export default Modal;
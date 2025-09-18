import React from "react";
import '../styles/Piece.css';

const Piece = ({ piece }) => {

    //unicode chess piece symbols
    const pieceSymbols = {
        white: {
            king: '♔',
            queen: '♕',
            rook: '♖',
            bishop: '♗',
            knight: '♘',
            pawn: '♙'
        },

        black: {
            king: '♚',
            queen: '♛',
            rook: '♜',
            bishop: '♝',
            knight: '♞',
            pawn: '♟'
        }
    };

    const symbol = pieceSymbols[piece.color][piece.type];

    return (
        <div className={`piece ${piece.color}`}>
            {symbol}
        </div>
    );

};

export default Piece;
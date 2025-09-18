import React from "react";
import Piece from './Piece';
import '../styles/Square.css';

const Square = ({ piece, isLight, isSelected, isHighlighted, onClick }) => {

    const getSquareClasses = () => {
        let classes = ['squre'];

        if (isLight) classes.push('light');
        else classes.push('dark');

        if (isSelected) classes.push('selected');
        else classes.push('highlighted');

        return classes.join(' ');
    };

    return (
        <div
            className={getSquareClasses()}
            onClick={onClick}
        >
            {piece && <Piece piece={piece} />}
        </div>
    )

}

export default Square;
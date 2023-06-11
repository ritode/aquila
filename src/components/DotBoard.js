import "./DotBoard.css";
import { useEffect, useState } from "react";
export default function DotBoard({ w, h }) {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });
  const [running, setRunning] = useState(false);

  const handleDivClick = (event) => {
    const xPos = event.clientX - 380; // X position of the click event relative to the viewport
    const yPos = event.clientY - 140; // Y position of the click event relative to the viewport

    console.log("Clicked at:", xPos, yPos);

    if (!running) {
      setStartPosition({ x: xPos, y: yPos });
      setRunning(true);
    } else {
      setEndPosition({ x: xPos, y: yPos });
      setRunning(false);
    }
  };
  useEffect(() => {
    console.log(startPosition, endPosition);
  }, [startPosition, endPosition]);

  function Grid({ rows, columns, handleDivClick }) {
    const gridItems = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const key = `${i}-${j}`;
        const gridItem = <div className="grid-item" key={key}></div>;
        gridItems.push(gridItem);
      }
    }

    return (
      <div className="grid-container" onClick={handleDivClick}>
        {gridItems}
      </div>
    );
  }
  return (
    <div className="dot-board">
      <Grid rows={w} columns={h} handleDivClick={handleDivClick} />
      <svg className="line">
        <line
          x1={startPosition.x}
          y1={startPosition.y}
          x2={endPosition.x}
          y2={endPosition.y}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

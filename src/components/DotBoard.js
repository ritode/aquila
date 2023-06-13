import "./DotBoard.css";
import { useEffect, useState } from "react";
export default function DotBoard({ w, h }) {
  const [lines, setLines] = useState([]);
  const [startPosition, setStartPosition] = useState({ x: null, y: null });
  const [endPosition, setEndPosition] = useState({ x: null, y: null });
  const [running, setRunning] = useState(false);

  const [connected, setConnected] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    if (running) setEndPosition({ x: clientX - 380, y: clientY - 140 });
  };

  const handleDivClick = (event) => {
    const xPos = event.clientX - 380; // X position of the click event relative to the viewport
    const yPos = event.clientY - 140; // Y position of the click event relative to the viewport

    console.log("Clicked at:", xPos, yPos);

    if (!running) {
      setStartPosition({ x: xPos, y: yPos });
      setEndPosition({ x: xPos, y: yPos });
      setRunning(true);
    } else {
      setEndPosition({ x: xPos, y: yPos });
      setLines((prevLines) => [
        ...prevLines,
        { id: Date.now(), start: startPosition, end: endPosition },
      ]);
      setRunning(false);
    }
  };
  // useEffect(() => {
  //   if (startPosition && endPosition) {
  //     setLines((prevLines) => [
  //       ...prevLines,
  //       { id: Date.now(), start: startPosition, end: endPosition },
  //     ]);
  //   }
  // }, [startPosition, endPosition]);

  function Grid({ rows, columns, handleDivClick, handleMouseMove }) {
    const gridItems = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const key = `${i}-${j}`;
        const gridItem = <div className="grid-item" key={key}></div>;
        gridItems.push(gridItem);
      }
    }

    return (
      <div
        className="grid-container"
        onClick={handleDivClick}
        onMouseMove={handleMouseMove}
      >
        {gridItems}
      </div>
    );
  }
  return (
    <div className="dot-board">
      <Grid
        rows={w}
        columns={h}
        handleDivClick={handleDivClick}
        handleMouseMove={handleMouseMove}
      />
      {running && (
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
      )}
      <svg className="line">
        {lines.map((line) => (
          <line
            key={line.id}
            x1={line.start.x}
            y1={line.start.y}
            x2={line.end.x}
            y2={line.end.y}
            stroke="black"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

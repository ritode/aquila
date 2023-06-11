import "./DotBoard.css"
export default function DotBoard({w,h}){
    
    function Grid({ rows, columns }) {
        const gridItems = [];
      
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < columns; j++) {
            const key = `${i}-${j}`;
            const gridItem = <div className="grid-item" key={key}></div>;
            gridItems.push(gridItem);
          }
        }
      
        return <div className="grid-container">{gridItems}</div>;
      }
    return(
        <div className="dot-board">
            <Grid rows={w} columns={h} />
            <svg id="line"></svg>
        </div>
    )
}
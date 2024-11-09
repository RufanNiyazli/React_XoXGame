import React, { useState, useEffect } from "react";
import Block from "./Block";
import "./Board.css";

function Board() {
  const [blocks, setBlocks] = useState([
    { id: "0", content: "" },
    { id: "1", content: "" },
    { id: "2", content: "" },
    { id: "3", content: "" },
    { id: "4", content: "" },
    { id: "5", content: "" },
    { id: "6", content: "" },
    { id: "7", content: "" },
    { id: "8", content: "" }
  ]);

  const winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [blockContent, setBlockContent] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [result, setResult] = useState(null);

  const checkContent = (ID) => {
    if (result) return; // Eğer oyun kazanıldıysa, işlem yapma

    if (blocks[ID].content === "") {
      setBlocks(
        blocks.map((block) =>
          block.id == ID ? { ...block, content: player ? "x" : "o" } : block
        )
      );
      setBlockContent((prevContent) => {
        const newContent = [...prevContent];
        newContent[ID] = player ? "x" : "o";
        return newContent;
      });
      setPlayer(!player);
    }
  };

  useEffect(() => {
    const checkWin = () => {
      winPosition.forEach((position) => {
        if (
          blockContent[position[0]] === blockContent[position[1]] &&
          blockContent[position[1]] === blockContent[position[2]] &&
          blockContent[position[0]] !== ""
        ) {
          setResult(blockContent[position[0]]);
        }
      });
    };
    
    checkWin();
  }, [blockContent]); // blockContent güncellendiğinde checkWin çalışır

  return (
    <div className="container">
      {blocks.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          content={block.content}
          checkContent={checkContent}
        />
      ))}
      {result && <div className="result">Winner is: {result}</div>}
      <button onClick={() => window.location.reload()}>Restart Game</button>

    </div>
  );
}

export default Board;

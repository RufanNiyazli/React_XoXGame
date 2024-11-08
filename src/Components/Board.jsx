import React, { useState } from "react";
import Block from "./Block";
import './Board.css'
function Board() {
  const [blocks, setBlocks] = useState([
    {
      id: "0",
      content: ""
    },
    {
      id: "1",
      content: ""
    },
    {
      id: "2",
      content: ""
    },
    {
      id: "3",
      content: ""
    },
    {
      id: "4",
      content: ""
    },
    {
      id: "5",
      content: ""
    },
    {
      id: "6",
      content: ""
    },
    {
      id: "7",
      content: ""
    },
    {
      id: "8",
      content: ""
    }
  ]);

  const [player, setPlayer] = useState(true);

  const checkContent = (ID) => {
    if(blocks[ID].content==''){
      setBlocks(blocks.map(block=>(
        block.id==ID ?{...block,content:player?'x':'o'}:block
      )))
    }
    setPlayer(!player)
  };
  
  return (
    <div className="container">
    {
  blocks.map(block => (
    <Block key={block.id} id={block.id} content={block.content} checkContent={checkContent}  />
  ))
}

    </div>
  );
}

export default Board;

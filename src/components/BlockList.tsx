import React from "react";
import CheckboxBlock from "./CheckboxBlock";
import { Block } from "../interfaces";

interface BlockListProps {
  blocks: Block[];
  allCompleted: boolean;
}

const BlockList: React.FC<BlockListProps> = ({ blocks, allCompleted }) => {
  return (
    <div>
      {blocks.map((block) => (
        <CheckboxBlock key={block.id} block={block} />
      ))}
      {allCompleted && <p>¡Lo lograste!</p>}
    </div>
  );
};

export default BlockList;
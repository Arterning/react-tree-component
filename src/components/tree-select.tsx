import React, { useState } from "react";
import { TreeNode } from "../type";
import { TreeItem } from "./tree-item";

interface TreeSelectProps {
  data: TreeNode[];
  level?: number;
}

const TreeSelect: React.FC<TreeSelectProps> = ({ data, level = 0 }) => {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const onCheck = (nodeId: number) => {
    if (selectedNodes.includes(nodeId)) {
      setSelectedNodes(selectedNodes.filter((id) => id !== nodeId));
    } else {
      setSelectedNodes([...selectedNodes, nodeId]);
    }
  };

  const onExpand = (nodeId: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [nodeId]: !prevExpanded[nodeId],
    }));
  };

  return (
    <div>
      {data.map((node) => (
        <div key={node.id}>
          <TreeItem
            id={node.id}
            name={node.name}
            level={level}
            isLeaft={node.children ? false : true}
            onCheck={() => onCheck(node.id)}
            onExpand={() => onExpand(node.id)}
            checked={selectedNodes.includes(node.id)}
            expanded={expanded[node.id]}
          />
          {node.children && (
            <div>
              {expanded[node.id] && <TreeSelect data={node.children} level={level + 1}/>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TreeSelect;

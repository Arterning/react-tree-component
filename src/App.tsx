import "./App.css";
import { TreeNode } from "./type";
import TreeSelect from "./components/tree-select";

const data: TreeNode[] = [
  {
    id: 2,
    name: "北京",
    children: [
      {
        id: 3,
        name: "朝阳区",
        children: [
          { id: 34, name: "朝阳A区" },
          {
            id: 35,
            name: "朝阳B区",
          },
        ],
      },
      { id: 4, name: "海淀区" },
    ],
  },
  {
    id: 5,
    name: "上海",
    children: [
      { id: 6, name: "浦东新区" },
      { id: 7, name: "黄浦区" },
    ],
  },
  {
    id: 8,
    name: "广东",
    children: [
      { id: 9, name: "广州" },
      { id: 10, name: "深圳" },
    ],
  },
  {
    id: 11,
    name: "四川",
    children: [
      { id: 12, name: "成都" },
      { id: 13, name: "绵阳" },
    ],
  },
];

function App() {
  return (
    <>
      <TreeSelect data={data} />
    </>
  );
}

export default App;

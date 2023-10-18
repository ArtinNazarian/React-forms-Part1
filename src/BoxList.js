import React, { useState } from "react";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const add = (box) => {
    setBoxes((boxes) => [...boxes, box]);
  };

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((b) => b.id != id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      remove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;

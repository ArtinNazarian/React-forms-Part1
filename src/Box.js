import React from "react";

function Box({
  id,
  remove,
  width = 10,
  height = 10,
  backgroundColor = "green",
}) {
  const removeBox = () => remove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove Box</button>
    </div>
  );
}

export default Box;

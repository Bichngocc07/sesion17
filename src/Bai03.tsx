import { useState } from "react";

export default function ChangeColor() {
  // state lưu màu
  const [color, setColor] = useState("black");

  // hàm đổi màu
  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}

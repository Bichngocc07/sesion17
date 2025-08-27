import { useState } from "react";

const CounText = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h3>Nhập dữ liệu:</h3>
      <textarea
        style={{ width: "100%", height: "100px", padding: "10px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập vào đây..."
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
};

export default CounText;

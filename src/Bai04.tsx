import { useState } from "react";

export default function Toggle() {
  // State kiểm soát hiển thị
  const [show, setShow] = useState(false);

  // Hàm đổi trạng thái
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleToggle}>
        {show ? "Ẩn" : "Hiện"}
      </button>

      {show && <h2>Tiêu đề văn bản</h2>}
    </div>
  );
}

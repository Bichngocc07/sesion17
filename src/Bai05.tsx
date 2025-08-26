import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={value}
        onChange={handleChange}
      />
      <h2>{value}</h2>
    </div>
  );
}

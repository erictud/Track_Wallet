import { useState } from "react";

import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function PasswordInput({ value, setValue, id, label }) {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="input-container">
      <input
        type={passwordShown ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        className="relative"
        id={id}
      />
      <div
        className="w-5 h-5 absolute left-[93%] bottom-[30%] cursor-pointer"
        onClick={() => setPasswordShown((prev) => !prev)}
      >
        {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

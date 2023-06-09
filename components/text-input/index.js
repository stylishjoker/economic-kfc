import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function TextInput({
  value,
  callback,
  name,
  type = "text",
  disabled = false,
  error,
}) {
  const [show, setShow] = useState(false);
  const handleOnChange = (text) => {
    callback(text.target.value);
  };
  const HiddenPassword = () => {
    return !show ? (
      <FaRegEye
        onClick={() => setShow(!show)}
        className="cursor-pointer absolute top-3 right-0"
      />
    ) : (
      <FaRegEyeSlash
        onClick={() => setShow(!show)}
        className="cursor-pointer absolute top-3 right-0"
      />
    );
  };
  return (
    <div className="fromGroup font-sans bg-white">
      <input
        value={value}
        onChange={handleOnChange}
        type={show ? "text" : type}
        required
        disabled={disabled}
      />
      <span className={`${disabled && "translate-y-[-20px] text-[10px]"}`}>
        {name}
      </span>
      {type === "password" && <HiddenPassword />}
      {error && (
        <p className="absolute bottom-[-20px] text-red-400 text-xs">{error}</p>
      )}
    </div>
  );
}

import { useState } from "react";

export default function InputField({
  type,
  label,
  state,
  handleChange,
  defaultValue,
  id,
}) {
  // const [value, setValue] = useState(0);
  return (
    <>
      <label htmlFor={label}>{`${label}: `}</label>

      {state === true ? (
        <input
          type={type}
          id={id}
          onChange={handleChange}
          defaultValue={defaultValue}
        />
      ) : (
        <>{/* <p>{value}</p> */}</>
      )}
    </>
  );
}

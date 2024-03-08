import "./Button.css";

export default function Button({ onClick, buttonText }) {
  return (
    <button onClick={onClick} className="btn-6">
      {buttonText}
    </button>
  );
}

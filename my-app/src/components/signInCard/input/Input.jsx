import "./Input.css";

export default function Input({ inputLogo, inputPlaceholder, inputPurpose, value, onChange}) {
  return (
    <>
      <label className="input-purpose" htmlFor={inputPurpose}>
        <img src={inputLogo} alt={inputPurpose} width="20px" height="20px" />
        <p>{inputPurpose}</p>
      </label>
      <input
        type="text"
        className="input"
        placeholder={inputPlaceholder}
        name={inputPurpose}
        id={inputPurpose}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export default function Input({ value, setValue, type, label, id }) {
  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

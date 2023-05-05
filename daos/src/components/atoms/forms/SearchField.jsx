import styles from "./FormFields.module.css";

export default function SearchField({
  type,
  max,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.fieldgroup}>
      <label htmlFor={type}>
        <h3>{type.replace("-", " ")}</h3>
      </label>
      <input
        name={type}
        id={type}
        type="search"
        maxLength={max}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

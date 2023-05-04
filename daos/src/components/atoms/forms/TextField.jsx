import styles from "./FormFields.module.css";

export default function TextField({
  name,
  placeholder,
  id,
  value,
  onChange,
  onBlur,
  errorName,
  errorSurname,
  errorTitle,
  nameAvailable,
  ensambleNameError,
  ensambleEmailError,
  ensambleCapacityError,
  postCityError,
  postLocationError,
  ensambleCityError,
  ensambleLocationError,
}) {
  return (
    <div className={styles.fieldgroup}>
      <label htmlFor={name}>
        <h2>{name !== "city" && name.replace("-", " ")}</h2>
      </label>
      {id === "ensamble-email" && (
        <p>
          Type in the email address of your ensamble OR leave the field empty if
          you wish to be contacted via your profile email.
        </p>
      )}
      <input
        name={name}
        id={name}
        type="text"
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {errorName && <p>{errorName}</p>}
      {errorSurname && <p>{errorSurname}</p>}
      {errorTitle && <p>{errorTitle}</p>}
      {ensambleNameError && <p>{ensambleNameError}</p>}
      {nameAvailable && nameAvailable === "Name unavailable" && (
        <p>This ensamble already exists!</p>
      )}
      {ensambleEmailError && <p>{ensambleEmailError}</p>}
      {ensambleCapacityError && <p>{ensambleCapacityError}</p>}
      {postCityError && <p>{postCityError}</p>}
      {postLocationError && <p>{postLocationError}</p>}
      {ensambleLocationError && <p>{ensambleLocationError}</p>}
      {ensambleCityError && <p>{ensambleCityError}</p>}
    </div>
  );
}

import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import Button from "./Button"

function initialState() {
  return { user: "", password: "" };
}

function Login() {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div className={styles.userLogin}>
      <h1 className={styles.userLogin__title}>Acessar o Sistema</h1>
      <form>
        <div className={styles.userLogin__formControl}>
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className={styles.userLogin__formControl}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
      <Button
          type="submit"
          theme="contained-green"
          className={styles.userLogin__submitButton}
          rounded
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
export default Login;

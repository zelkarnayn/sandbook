import React, { useContext, useState } from "react";
import styles from "./Auth.module.css";
import { Context } from "../../../main";
import {observer} from "mobx-react-lite";

const Singup: React.FC = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  return (
    <div className={styles.singin}>
      <h2>Регистрация</h2>
      <input
        type="text"
        className={styles.auth_input}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Введите имя"
        value={firstName}
      />
      <input
        type="text"
        className={styles.auth_input}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Введите фамилию"
        value={lastName}
      />
      <input
        type="text"
        className={styles.auth_input}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите email"
        value={email}
      />
      <input
        type="password"
        className={styles.auth_input}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль"
        value={password}
      />
      <button onClick={()=> store.registration(email, password, firstName, lastName)}>Зарегистрироваться</button>
    </div>
  );
};

export default observer(Singup);

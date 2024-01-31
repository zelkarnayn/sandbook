import React, { useContext, useState } from "react";
import styles from "./Auth.module.css";
import { Context } from "../../../main";
import {observer} from 'mobx-react-lite'

const Singin: React.FC = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <div className={styles.singin}>
      <h2>Войти</h2>
      <input
        type="text"
        className={styles.auth_input}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите email"
      />
      <input
        type="password"
        className={styles.auth_input}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль"
      />
      <button onClick={()=> store.login(email, password)}>Войти</button>
    </div>
  );
};

export default observer(Singin);

import { useState } from "react";
import Singin from "./Singin";
import Singup from "./Singup";
import styles from './Auth.module.css'

const Auth = () => {
    const [mode, setMode] = useState(true)
    return (
        <div className={styles.main}>
            {mode ? <Singin /> : <Singup/>}
            <div>{mode ? <p><a onClick={()=> setMode(!mode)}>Войти</a>, если уже ты зарегистрирован</p> : <p><a onClick={()=> setMode(!mode)}>Создать аккаунт</a>, если еще не зарегистрирован</p>}</div>
        </div>
    );
};

export default Auth;
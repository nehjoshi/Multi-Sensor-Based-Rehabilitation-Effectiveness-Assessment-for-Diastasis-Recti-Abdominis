import React, {useState} from 'react';
import Layout from "../../components/Layout";
import styles from "../../sass/Login.module.scss";
import {TextField, Button} from "@mui/material";
import { SignIn } from './handler';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Submit = () => {
        SignIn(email, password)
        .then((res) => {
            sessionStorage.setItem("token", res.data.token);
            navigate("/start");
        })
    }

    return (
        <Layout center={true}>
            <div className={styles.box}>
                <h1>Sign-In Here</h1>
                <hr className={styles.divider}/>
                <TextField onChange={e => setEmail(e.target.value)} label="Email" autocomplete="off" variant="standard" fullWidth={true} className={styles.input}/>
                <TextField onChange={e => setPassword(e.target.value)} label="Password" autocomplete="off" variant="standard" fullWidth={true} className={styles.input}/>
                <Button onClick={Submit} variant="contained" fullWidth={true} className={styles.button}>Sign-In</Button>
            </div>
        </Layout>
    )
}
export default Login;
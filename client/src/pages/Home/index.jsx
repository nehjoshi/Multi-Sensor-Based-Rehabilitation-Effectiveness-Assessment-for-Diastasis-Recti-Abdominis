import Layout from "../../components/Layout";
import React from 'react';
import styles from "../../sass/Home.module.scss";
import { Button } from "@mui/material";
import MainImg from "../../images/main.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigator = useNavigate();
    return (
        <Layout center={true}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <h1>Redefining <span>Modern</span> Exercise Monitoring.</h1>
                    <p>How effectively are you performing your exercises? Are you doing them correctly? Are you doing them at all?
                     <br />
                     Introducting <span>Trainer.io</span>, a revolutionary new way to monitor your exercises in real-time.
                    </p>
                    <Button onClick={() => navigator('/login')} variant="contained" size="large" className={styles.button}>Try now</Button>
                </div>
                <div className={styles.right}>
                    <img src={MainImg} className={styles.mainImage} />
                </div>
            </div>
        </Layout>
    )
}
import Layout from "../../components/Layout";
import React from 'react';
import styles from "../../sass/Home.module.scss";
import { Button } from "@mui/material";
import MainImg from "../../images/main.png";

export default function Home() {
    return (
        <Layout center={true}>
            <div className={styles.box}>
                <div className={styles.left}>
                    <h1>Redefining <span>Modern</span> Exercise Monitoring.</h1>
                    <p>The future of exercise monitoring is here, with our new <span>highly
                        trained</span> machine learning model. Easy-to-use, easy-to-incorporate. Try it now.
                    </p>
                    <Button variant="contained" size="large" className={styles.button}>Try now</Button>
                </div>
                <div className={styles.right}>
                    <img src={MainImg} className={styles.mainImage} />
                </div>
            </div>
        </Layout>
    )
}
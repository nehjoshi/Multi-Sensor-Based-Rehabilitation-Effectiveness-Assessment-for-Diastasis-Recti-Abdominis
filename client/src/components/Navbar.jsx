import React from 'react';
import styles from "../sass/Global.module.scss";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className={styles.navWrapper}>
            <h3 onClick={() => navigate("/")}><span>Trainer.io:</span> Real-time Assessment of Rehabilitation Exercises</h3>
        </nav>
    )

}
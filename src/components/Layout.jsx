import styles from "../sass/Global.module.scss";
import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, center }) {
    return (
        <main className={center ? styles.centerWrapper : styles.wrapper}>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
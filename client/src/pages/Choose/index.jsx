import { Button } from "@mui/material";
import Layout from "../../components/Layout";
import styles from "../../sass/Main.module.scss";
import CurlUp from ".././../images/cu.jpg"
import SitUp from ".././../images/su.jpg"
import { useNavigate } from "react-router-dom";
const Choose = () => {
    const navigate = useNavigate();
    return (
        <Layout center={true}>
            <div className={styles.box}>
                <h1><center>Choose Your Exercise</center></h1>
                <div className={styles.miniBox}>
                    <div style={{ width: "40%", display: "flex", flexDirection:"column", alignItems: "center" }}>
                        <img src={CurlUp} alt="CurlUp" className={styles.image} />
                        <Button onClick={() => navigate('/begin/curlup')} variant="contained" fullWidth={true} className={styles.button}>Curl-Ups</Button>
                    </div>
                    <div style={{ width: "40%", display: "flex", flexDirection:"column", alignItems: "center" }}>
                        <img src={SitUp} alt="SitUp" className={styles.image} />
                        <Button onClick={() => navigate('/begin/situp')} variant="contained" color="warning" fullWidth={true} className={styles.button}>Sit-Ups</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Choose;
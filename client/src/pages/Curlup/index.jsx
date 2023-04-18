import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Main.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import { SubmitCurlup } from './handler';
const Curlup = () => {
    const [sensorValues, setSensorValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [sensor, setSensor] = useState(false);
    const LoadSampleValues = () => {
        setSensorValues({
            sen1: 3.52173913,
            sen2: 2.510869565,
            sen3: 10.9673913,
            sen4: 1.414721724,
        })
    }
    const TestEfficacy = async () => {
        setLoading(true);
        SubmitCurlup(sensorValues.sen1, sensorValues.sen2, sensorValues.sen3, sensorValues.sen4)
            .then(res => {
                setMessage(res.data.result === 1 ? "Curl-up is being done correctly!" : "Curl-up is being done incorrectly! ");
                setLoading(false);
                console.log(res.data);
            })
        }
    return (
        <Layout center={true}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Real-time Curl-Up Analysis</h1>
                    <p className={styles.text}>Please connect your EMG and IMU sensors, or for a test, <span onClick={LoadSampleValues} className={styles.sampleSpan}>load sample values here</span></p>
                    {!sensor && <p className={styles.text} style={{fontSize: '1.1rem'}}>❌ No sensor connected! <span className={styles.sampleSpan}>Click to refresh</span></p>}
                    {sensor &&<p className={styles.text} style={{fontSize: '1.1rem'}}>✅ Sensors Connected! <span className={styles.sampleSpan}>Click to refresh</span></p>}
                </div>
                <div className={styles.miniBox}>
                    <div className={styles.inputWrapper}>
                        <TextField disabled={sensor} autoComplete={true} value={sensorValues.sen1} onChange={e => setSensorValues({ ...sensorValues, sen1: e.target.value })} label="EMG_ACCEL_LN_X" variant="outlined" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <TextField disabled={sensor} value={sensorValues.sen2} onChange={e => setSensorValues({ ...sensorValues, sen2: e.target.value })} label="EMG_ACCEL_LN_Y" variant="outlined" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <TextField disabled={sensor} value={sensorValues.sen3} onChange={e => setSensorValues({ ...sensorValues, sen3: e.target.value })} label="IMU_ACCEL_LN_X" variant="outlined" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <TextField disabled={sensor} value={sensorValues.sen4} onChange={e => setSensorValues({ ...sensorValues, sen4: e.target.value })} label="IMU_ACCEL_LN_Y" variant="outlined" />
                    </div>
                </div>
                <div className={styles.row}>
                        <Button onClick={TestEfficacy} disabled={loading} color='warning'  variant='contained' size='large' className={styles.button}>TEST Efficacy</Button>
                    </div>
                <div className={styles.content}>
                    <div className={styles.row}>
                        {loading && <CircularProgress />}
                        {!loading && <p className={styles.result}>{message}</p>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Curlup;
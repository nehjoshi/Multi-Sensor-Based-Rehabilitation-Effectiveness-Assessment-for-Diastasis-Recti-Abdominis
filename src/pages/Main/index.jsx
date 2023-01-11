import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Main.module.scss";
import CircularProgress from '@mui/material/CircularProgress';

export default function Main() {
    const [sensorValues, setSensorValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const Submit = () => {
        setLoading(true);
        axios({
            url: `http://74d7-35-199-53-174.ngrok.io/post_data?sen1=${sensorValues.sen1}&sen2=${sensorValues.sen2}&sen3=${sensorValues.sen3}&sen4=${sensorValues.sen4}&sen5=${sensorValues.sen5}&sen6=${sensorValues.sen6}&sen7=${sensorValues.sen7}&sen8=${sensorValues.sen8}&sen9=${sensorValues.sen9}&sen10=${sensorValues.sen10}&sen11=${sensorValues.sen11}&sen12=${sensorValues.sen12}&sen13=${sensorValues.sen13}&sen14=${sensorValues.sen14}&sen15=${sensorValues.sen15}&sen16=${sensorValues.sen16}&sen17=${sensorValues.sen17}&sen18=${sensorValues.sen18}&sen19=${sensorValues.sen19}&sen20=${sensorValues.sen20}&sen21=${sensorValues.sen21}&sen22=${sensorValues.sen22}&sen23=${sensorValues.sen23}&sen24=${sensorValues.sen24}&sen25=${sensorValues.sen25}&sen26=${sensorValues.sen26}&sen27=${sensorValues.sen27}&sen28=${sensorValues.sen28}&sen29=${sensorValues.sen29}&sen30=${sensorValues.sen30}&sen31=${sensorValues.sen31}&sen32=${sensorValues.sen32}`,
            method: "GET",
        })
            .then(res => {
                console.log(res);
                if (res.data.result === 1) {
                    setMessage("This exercise is being done correctly.");
                }
                else {
                    setMessage("This exercise is NOT being done correctly.");
                }
                setLoading(false);
            })
            .catch(err => {
                console.log("An unknown error occurred");
                setLoading(false);
            })
    }

    const LoadSampleValues = () => {
        setSensorValues({
            sen1: 3.52173913,
            sen2: 2.510869565,
            sen3: 10.9673913,
            sen4: 1.414721724,
            sen5: 0.687013764,
            sen6: 9.577498504,
            sen7: 4130.40293,
            sen8: 1709.157509,
            sen9: -0.523873672,
            sen10: 0.687322257,
            sen11: -2.582547523,
            sen12: -0.365817091,
            sen13: 0.191904048,
            sen14: -0.124437781,
            sen15: 101.0968276,
            sen16: -0.372213976,
            sen17: 0.754091937,
            sen18: -0.175445087,
            sen19: -0.023407384,
            sen20: -0.039987274,
            sen21: -0.064872471,
            sen22: -0.910536543,
            sen23: -0.653137817,
            sen24: -0.293084973,
            sen25: -0.252970673,
            sen26: 0.101136809,
            sen27: 0.049784644,
            sen28: 0.134172441,
            sen29: 0.027437342,
            sen30: 0.941206832,
            sen31: 0.965802526,
            sen32: 34.17034305
        })
    }

    return (
        <Layout center={true}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Getting Started</h1>
                    <p className={styles.text}>To get started, enter the 32 Shimmer sensor values, or <span onClick={LoadSampleValues} className={styles.sampleSpan}>load sample values here</span></p>
                </div>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField autoComplete={true} value={sensorValues.sen1} onChange={e => setSensorValues({ ...sensorValues, sen1: e.target.value })} label="Shimmer_B566_Accel_LN_X_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen2} onChange={e => setSensorValues({ ...sensorValues, sen2: e.target.value })} label="Shimmer_B566_Accel_LN_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen3} onChange={e => setSensorValues({ ...sensorValues, sen3: e.target.value })} label="Shimmer_B566_Accel_LN_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen4} onChange={e => setSensorValues({ ...sensorValues, sen4: e.target.value })} label="Shimmer_B566_Accel_WR_X_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen5} onChange={e => setSensorValues({ ...sensorValues, sen5: e.target.value })} label="Shimmer_B566_Accel_WR_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen6} onChange={e => setSensorValues({ ...sensorValues, sen6: e.target.value })} label="Shimmer_B566_Accel_WR_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen7} onChange={e => setSensorValues({ ...sensorValues, sen7: e.target.value })} label="Shimmer_B566_Battery_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen8} onChange={e => setSensorValues({ ...sensorValues, sen8: e.target.value })} label="Shimmer_B566_Ext_Exp_A7_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen9} onChange={e => setSensorValues({ ...sensorValues, sen9: e.target.value })} label="Shimmer_B566_Gyro_X_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen10} onChange={e => setSensorValues({ ...sensorValues, sen10: e.target.value })} label="Shimmer_B566_Gyro_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen11} onChange={e => setSensorValues({ ...sensorValues, sen11: e.target.value })} label="Shimmer_B566_Gyro_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen12} onChange={e => setSensorValues({ ...sensorValues, sen12: e.target.value })} label="Shimmer_B566_Mag_X_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen13} onChange={e => setSensorValues({ ...sensorValues, sen13: e.target.value })} label="Shimmer_B566_Mag_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen14} onChange={e => setSensorValues({ ...sensorValues, sen14: e.target.value })} label="Shimmer_B566_Mag_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen15} onChange={e => setSensorValues({ ...sensorValues, sen15: e.target.value })} label="Shimmer_B566_Pressure_BMP280_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen16} onChange={e => setSensorValues({ ...sensorValues, sen16: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_W_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen17} onChange={e => setSensorValues({ ...sensorValues, sen17: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_W_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen18} onChange={e => setSensorValues({ ...sensorValues, sen18: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_X_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen19} onChange={e => setSensorValues({ ...sensorValues, sen19: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_X_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen20} onChange={e => setSensorValues({ ...sensorValues, sen20: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_Y_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen21} onChange={e => setSensorValues({ ...sensorValues, sen21: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_Y_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen22} onChange={e => setSensorValues({ ...sensorValues, sen22: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_Z_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen23} onChange={e => setSensorValues({ ...sensorValues, sen23: e.target.value })} label="Shimmer_B566_Quat_Madge_6DOF_Z_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen24} onChange={e => setSensorValues({ ...sensorValues, sen24: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_W_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen25} onChange={e => setSensorValues({ ...sensorValues, sen25: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_W_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen26} onChange={e => setSensorValues({ ...sensorValues, sen26: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_X_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen27} onChange={e => setSensorValues({ ...sensorValues, sen27: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_X_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen28} onChange={e => setSensorValues({ ...sensorValues, sen28: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_Y_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen29} onChange={e => setSensorValues({ ...sensorValues, sen29: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_Y_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen30} onChange={e => setSensorValues({ ...sensorValues, sen30: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_Z_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen31} onChange={e => setSensorValues({ ...sensorValues, sen31: e.target.value })} label="Shimmer_B566_Quat_Madge_9DOF_Z_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField value={sensorValues.sen32} onChange={e => setSensorValues({ ...sensorValues, sen32: e.target.value })} label="Shimmer_B566_Temperature_BMP280_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <Button disabled={loading} onClick={Submit} variant='contained' color='primary' className={styles.button}>Test Efficacy</Button>
                    </div>
                    <div className={styles.row}>
                        {loading && <CircularProgress  /> }
                        {!loading && <p className={styles.result}>The exercise is being done correctly.</p>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
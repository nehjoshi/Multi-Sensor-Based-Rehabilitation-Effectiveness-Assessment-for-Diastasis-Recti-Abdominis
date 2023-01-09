import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import styles from "../../sass/Main.module.scss";

export default function Main() {
    const [sensorValues, setSensorValues] = useState({});
    const Submit = () => {
        axios({
            url: `http://dd46-34-125-5-32.ngrok.io/post_data?sen1=${sensorValues.sen1}&sen2=877`,
            method: "GET",
        })
            .then(res => {
                console.log(res);
            })
    }
    return (
        <Layout center={true}>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Getting Started</h1>
                    <p className={styles.text}>To get started, enter the 32 Shimmer sensor values and click RUN</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField onChange={e => setSensorValues({...sensorValues, sen1: e.target.value})} label="Shimmer_B566_Accel_LN_X_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Accel_LN_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Accel_LN_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Accel_WR_X_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Accel_WR_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Accel_WR_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Battery_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Ext_Exp_A7_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Gyro_X_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Gyro_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Gyro_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Mag_X_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Mag_Y_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Mag_Z_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Pressure_BMP280_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_W_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_W_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_X_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_X_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_Y_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_Y_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_Z_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_6DOF_Z_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_W_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_W_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_X_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_X_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_Y_LN_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_Y_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_Z_LN_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Quat_Madge_9DOF_Z_WR_CAL" variant="outlined" />
                        </div>
                        <div className={styles.inputWrapper}>
                            <TextField label="Shimmer_B566_Temperature_BMP280_CAL" variant="outlined" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <Button onClick={Submit} variant='contained' color='primary' className={styles.button}>Test Efficacy</Button>
                        </div>
                </div>
            </div>
        </Layout>
    )
}
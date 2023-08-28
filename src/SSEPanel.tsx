import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import styles from './style.module.scss';

const baseURL = "http://localhost:8080/sse/";
const testStartSSEUrl = "test/start";
const testCloseSSEUrl = "test/stop";

const startSSEUrl = "stream";
const closeSSEUrl = "stream";
const listSSEUrl = "connection";

const config = {
  headers: {
    'X-Mdm-Id': 12300000,
    'Cookie': 'token=eyJ0eXAiOiJKV1QiLCJraWQiOiIxMC43NC4xNzguMTcyL3YxL29hdXRoMi90b2tlbiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxODYxNTE5OCIsImF1ZCI6IjEiLCJpc3MiOiIxMC43NC4xNzguMTcyL3YxL29hdXRoMi90b2tlbiIsIm5iZiI6MTY5MTU2NjAxNywiaWF0IjoxNjkxNTY2MDE3LCJleHAiOjE2OTE1NzMyMTcsImF6cCI6IjEiLCJzcF9uYW1lIjoiYXV0aCIsImRvbWFpbiI6Im1hc3RlciIsImFjdCI6eyJvcGVyYXRpb25fdHlwZSI6IiIsInNlc3Npb25faWQiOiIwZTUzNzY5Yy1iZWY3LTRhMjItOTI1Ni1kZWQ2MDNiOWExNDUifSwiYWNyIjoibXNhPWV5SllMVlZ6WlhJdFUyVnpjMmx2YmkxSlJDSTZJakJsTlRNM05qbGpMV0psWmpjdE5HRXlNaTA1TWpVMkxXUmxaRFl3TTJJNVlURTBOU0lzSW5KdmRYUmxUbUZ0WlNJNkludGNJbUpzYjJOclhDSTZYQ0kyWENKOUlpd2ljMmhoY21ST1lXMWxJam9pY3pZaUxDSllMVkpQVlZSRkxVNUJUVVVpT2lKN1hDSmliRzlqYTF3aU9sd2lObHdpZlNJc0lsZ3RVMGhCVWtRdFRrRk5SU0k2SW5NMklpd2lXQzFFWldKMVp5STZJbVpoYkhObElpd2lXQzFKYm1sMGFXRjBiM0l0U0c5emRDSTZJakV3TGpjMExqRTNPQzR4TnpJaUxDSllMVU5vWVc1dVpXd2lPaUpXVkVKZlVGSlBJaXdpV0MxUWJHRjBabTl5YlNJNkluZGxZaUlzSWxndFRHOW5hVzR0VFc5a1pTSTZiblZzYkN3aVdDMVdaWEp6YVc5dUlqcHVkV3hzZlE9PSIsIm1zYV9zZXNzaW9uX2lkIjoiMGU1Mzc2OWMtYmVmNy00YTIyLTkyNTYtZGVkNjAzYjlhMTQ1IiwiY3R4aSI6IjYzNTY2Njg0LWI3MDUtNDAwNy1iYmQ3LTBmODAzYjQ2OTUxMiJ9.aP1-H8eX3C8VSxexgSHAsoUD3AZ9VBLgO0CHL5J26DCt4nCjRUDf5wTPsRVYaYvNPlqHcr-rLt_W9l3VbYJ6ftt5nQ-BltoHYbsLUezhZc0ZrLN43SMAFzgtLpQIp2eXRUZG2yP5m90byc9qeqLzjZnwoJwkA-eq3NQ8G91eQP36r_GJi-_G4EjE87U3-33skmVlCte2Lg4vFJwMOzkkzpdfPV2iSNfQpfuKZPiJIcmT8spC89Bz4apI8hAs9bJC1rqAFlEJ7-Jz2eA9DbWaSugCnm_UYAm8NXrTgvLx7HdWfdGOSPimg84tFaGcBlYYHhFdVrQGdM8k4cWrWmSOOo8ro8wwcsEKacTGrAL2Umin0gBS1-3qeZX5H59GZRLRwxzRSy0fF3szoNd4oF7YOzTgJTRtx2BITv0wj6g-LeGGND6qCkZntX56_kkfUtK3Up5A0ACep4GJFf0mowcH4u-Gx50qxVgywj8qEFM5vHn-vScBUIWooxORuvF0H_61DU0UjuROg7bzPyNbeZG9M_y7YFA3gGxQtm--WUOuqVKrtWtIoKBePJ-4WLJmRUtx5_d3NJl7Jl4p9VrWxQCCznL2010a6UksZ099VUfE4EMbQlhX1zrkHlENdbp9yPw7r0Q_p5wU7fuHZLa5an4byKjiT0tRhPzgRALqUVmLut0;',
  },
};

export const SSEPanel: FC = () => {
  const [message, setMessage] = useState<any>("Loading");

  const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL,
  });

  axios.defaults.withCredentials = true

  const SSETestConnect = async () => {
    const res = await axiosInstance.post(testStartSSEUrl);
    console.log('Response:', res.data);
  };

  const SSETestCloseConnect = async () => {
    const res = await axiosInstance.post(testCloseSSEUrl);
    console.log('Response:', res.data);
  };

  const SSEConnect = async () => {
    console.log('headers', config);
    const res = await  axiosInstance.get(startSSEUrl, config);
    console.log('Response:', res.data);
  };

  const SSEClose = async () => {
    const res = await  axiosInstance.delete(closeSSEUrl);
    console.log('Response:', res.data);
  };

  const SSEConnectionsList = async () => {
    const res = await  axiosInstance.get(listSSEUrl);
    console.log('Response:', res.data);
  };

  const closeAllConnections = () => {
    console.log('Close all sse connects');
    SSETestCloseConnect();
    SSEClose();
  };

  return (
    <div className={styles.app}>
      <div>Respionse: {message}</div>
      <div className={styles.btnGroup}>
        <button onClick={SSETestConnect}>Create test Connect</button>
        <button onClick={SSETestCloseConnect}>Delete test Connect</button>
        <button onClick={SSEConnect}>Create Connect</button>
        <button onClick={SSEClose}>Delete Connect</button>
        <button onClick={SSEConnectionsList}>List Connections</button>
      </div>
    </div>
  );
};

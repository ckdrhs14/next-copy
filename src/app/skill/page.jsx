"use client";
import { useEffect, useState } from 'react'
import styles from "../../assets/scss/section/module/ct.module.scss";

import Tab from '../components/skillTab';

const url = "img/portfolio/";


export default function List(props) {


  const [topcis, setTopics] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:9999/topics')
        .then((resp)=>{
          return resp.json();
      })
        .then(result=>{
          setTopics(result);
      });

      
      document.querySelector('header').style.top = '0'

    });

    
  
    return (
        <>
          <div className={styles.container}>

            <div className={`${styles.sVisualWrap} ${styles.skill}`}>
              <h3>SKILL PORTFOLIO</h3>
            </div>

            <div className={styles.contentWrap}>
              
              <Tab />

            </div>
          </div>
        </>
    )
}


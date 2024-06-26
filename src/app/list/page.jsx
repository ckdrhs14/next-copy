"use client";
import { useEffect, useState } from 'react'
import styles from "../../assets/scss/section/module/ct.module.scss";

import Tab from '../components/Tab';

const url = "img/portfolio/";


export default function List(props) {


  const [topics, setTopics] = useState([]);

    useEffect(()=> {
      

      
      document.querySelector('header').style.top = '0'

    });

    
  
    return (
        <>
          <div className={styles.container}>

            <div className={`${styles.sVisualWrap} ${styles.work}`}>
              <h3>WORK PORTFOLIO</h3>
            </div>

            <div className={styles.contentWrap}>
              
              <Tab />

            </div>
          </div>
        </>
    )
}


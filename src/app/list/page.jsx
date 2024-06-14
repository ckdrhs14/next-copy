"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from "../../assets/scss/section/module/ct.module.scss";

import { workData } from "../../constants/workData";
import Tab from '../components/Tab';

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

            <div className={`${styles.sVisualWrap} ${styles.work}`}>
              <h3>WORK PORTFOLIO</h3>
            </div>


            <div className={styles.contentWrap}>
              
              <Tab />
              
              <ul className={`${styles.pjList} ${styles.col3}`}>
                {workData.map((slide) => (
                <li className={styles.pc_shop} key={slide.id}>
                  <Link href={`/list/${slide.id}`}>
                    <div className={styles.imgArea}>
                        <img src={url + 'web_' + slide.type + '_' + slide.number + '.jpg'} />
                    </div>
                    <div className={styles.txtArea}>
                        <h3 className={styles.title}>{slide.korTitle}<span>({slide.engTitle})</span></h3>
                        <p><b>사업기간</b> : {slide.date}</p>
                        <p><b>발주처</b> : {slide.client}</p>
                        <div className={styles.color}>
                            <p><b>color</b></p>
                            <div>
                                <p>Main <span style={{backgroundColor:slide.mainColor}}></span>({slide.mainColor})</p>
                                <p>Sub <span style={{backgroundColor:slide.subColor,}}></span>({slide.subColor})</p>
                            </div>
                        </div>
                    </div>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>



          <div className="contentWrap">
              <div>
                  <h2>Link to 'potato' Page</h2>
                  <Link href="/list/1">
                      Move to '/list/1'
                  </Link>
                  <ul>
                    {topcis.map((topic) => {
                      return (
                        <li key={topic.id}><Link href={`/list/${topic.id}`}>{topic.title}</Link></li>
                      )
                    })}
                  </ul>
              </div>
          </div>
        </>
    )
}


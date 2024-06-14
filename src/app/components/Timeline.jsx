import React, { useRef } from 'react';
import styles from "../../assets/scss/section/module/tl.module.scss";
import stylesCommon from "../../assets/scss/section/module/cm.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { timelineData } from "../../constants/timelineData";



const Timeline = () => {
    const main = useRef();

    useGSAP(
        () => {
        const actions = gsap.utils.toArray('.innerWrap');
        actions.forEach((action) => {
            gsap.set(action, { opacity: 0, y: 50,});
            gsap.to(action, {
                scrollTrigger: {
                    trigger: action,
                    start: 'top bottom',
                    end: '50% 50%',
                    scrub: 0.1,
                },
                y: 0,
                opacity: 1,
                duration: 10,
                stagger: 10,
                ease: 'expo'
            });
        });
        },
        { scope: main }
    );

    return (
        <div className={`${stylesCommon.section} ${styles.section5}`} ref={main}>
            <div className={`${stylesCommon.innerWrap} ${styles.innerWrap} innerWrap`}>
                <h3 className={`${stylesCommon.title} ${styles.title}`}>
                    <p>TimeLine</p>
                    <p>TimeLine</p>
                </h3>
                <div className={stylesCommon.box}>
                    <div className={styles.inner}>
                        <ul>
                            {timelineData.map((timeline) => (
                            <li key={timeline.id}>
                                <div className={styles.row}>
                                    <p className={`${styles.tit}`}>{timeline.company}</p>
                                    <p className={styles.group}>{timeline.department} <b>{timeline.rank}</b></p>
                                    <p className={styles.date}><b>{timeline.date}</b></p>
                                    <p className={styles.con}>{timeline.text}</p>
                                </div>
                                <div className={styles.detail}>
                                    <p>{timeline.description}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../../assets/scss/section/module/mb.module.scss";
import stylesCommon from "../../assets/scss/section/module/cm.module.scss";


const MainBanner = () => {
    const moonRef = useRef();
    const subTxtRef = useRef();
    const mainTxtRef = useRef();

    useLayoutEffect(() => {

        gsap.to(moonRef.current, {
            y: -100,
            delay: 0,
            duration: 1.3,
            opacity: 1,
        });

        gsap.to(mainTxtRef.current, {
            opacity: 1,
            y: -30,
            delay: 3,
            duration: 0.5,
        });

        gsap.to(subTxtRef.current, {
            opacity: 1,
            y: -30,
            delay: 4,
            duration: 0.5,
        });
    });
    

    return (
        <div className={`${stylesCommon.section} ${styles.section1}`}>
            <div className={styles.videoBg}>
                <video muted autoPlay loop>
                    <source src="/img/testVideo5.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.videoBg2}>
                <video muted autoPlay loop>
                    <source src="/img/testVideo4.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.objectArea} ref={moonRef} >
                <img src="/img/main/planet_04.png" alt="" id="moon" />
            </div>

            <div className={styles.slogan}>
                <p className={styles.maintxt} ref={mainTxtRef}>LEE.c.g Portfolio</p>
                <p className={styles.subtxt} ref={subTxtRef}>NICE TO MEET YOU 🖐</p>
            </div>
        </div>
    )
}

export default MainBanner
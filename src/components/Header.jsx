import React, { useState, useEffect } from "react";
import styles from "@/assets/scss/section/module/hd.module.scss";



const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }
    
    const closeMenu = () => {
        setActive(!isActive);
    }

    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 34);
    });
    }, []);      

    return (
        <>
            <div className={isActive ? `${styles.overlay} ${styles["is-open"]}` : `${styles.overlay}`}>
            {/* <div className={`${styles.overlay} ${isActive ? 'is-open': ''}`}> */}
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="./page/work_portfolio.html">WORK PORTFOLIO</a></li>
                    <li><a href="./page/skill_portfolio.html">SKILL PORTFOLIO</a></li>
                    <li><a href="./page/introduce.html">INTRODUCE</a></li>
                </ul>
                <a href="#none" className={styles.closeBtn} style={{opacity:'1'}} onClick={closeMenu}>창 닫기</a>
            </div>

            
            
            <header className={scroll ? `${styles.header} ${styles.on}` : `${styles.header}`} style={{top:'-80px'}}>
            {/* <header className="header" style={{top:'-0'}}> */}
                <div className={styles.logo}>
                    <a href="/">LEE.c.g</a>
                </div>
                
                <div className={isActive ? `${styles.menu} ${styles["is-active"]}` : `${styles.menu}`} onClick={() => {
                    toggleClass();
                }}>
                    <div className={styles.path}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
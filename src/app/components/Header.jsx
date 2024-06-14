"use client";

import React, { useState, useEffect } from "react";
import styles from "../../assets/scss/section/module/hd.module.scss";
import Link from 'next/link'



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
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/list/[id]" as="/list/1">WORK PORTFOLIO</Link></li>
                    <li><Link href="/list">SKILL PORTFOLIO</Link></li>
                    <li><Link href="./page/introduce.html">INTRODUCE</Link></li>
                </ul>
                <a href="#none" className={styles.closeBtn} style={{opacity:'1'}} onClick={closeMenu}>창 닫기</a>
            </div>

            
            
            <header className={scroll ? `${styles.header} ${styles.on}` : `${styles.header}`}>
            {/* <header className="header" style={{top:'-0'}}> */}
                <div className={styles.logo}>
                    <Link href="/">LEE.c.g</Link>
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
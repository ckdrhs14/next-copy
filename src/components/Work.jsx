import React, { useRef } from 'react';
import styles from "@/assets/scss/section/module/wk.module.scss";
import stylesCommon from "@/assets/scss/section/module/cm.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';


import { workData } from "../constants/workData";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const url = "img/portfolio/";

const Work = () => {
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
        <div className={`${stylesCommon.section} ${styles.section3}`} ref={main}>
            <div className={`${stylesCommon.innerWrap} ${styles.innerWrap} innerWrap`}>
                <h3 className={`${stylesCommon.title} ${styles.title}`}>
                    <p>Work PortFolio</p>
                    <p>Work PortFolio</p>
                </h3>

                <div className={`swiper-container ${styles.workSwiper}`}>
                <Swiper
                    loop={true} // 슬라이드 루프
                    spaceBetween={30} // 슬라이스 사이 간격
                    slidesPerView={3} // 보여질 슬라이스 수
                >
                    {workData.map((slide) => (
                    <SwiperSlide key={slide.id}>         
                        <div className="swiper-slide">
                            <a href="page/list/idfmall.html" target="_blank" title="새창열림">
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
                            </a>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>

                <div className={`${stylesCommon.btnGroup} ${stylesCommon.center} ${styles.btnGroup}`}>
                    <a href="page/introduce.html" className={stylesCommon.btn}>전체보기</a>
                </div>
            </div>
        </div>
    )
}

export default Work
import React, { useRef } from 'react';
import styles from "../../assets/scss/section/module/sk.module.scss";
import stylesCommon from "../../assets/scss/section/module/cm.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from "swiper/modules";
import Link from 'next/link'


import { skillData } from "../../constants/skillData";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const url = "img/skill/";
const urlIco = "img/icon/";

const Skill = () => {
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

    const skillList = skillData.filter((data) => {
        return data.role === 'js';
    });

    return (
        <div className={`${stylesCommon.section} ${styles.section4}`} ref={main}>
            <div className={`${stylesCommon.innerWrap} ${styles.innerWrap} innerWrap`}>
                <h3 className={`${stylesCommon.title} ${styles.title}`}>
                    <p>Skill PortFolio</p>
                    <p>Skill PortFolio</p>
                </h3>

                <Swiper className={styles.skillSwiper}
                    loop={true} // 슬라이드 루프
                    spaceBetween={30} // 슬라이스 사이 간격
                    slidesPerView={3} // 보여질 슬라이스 수
                    pagination={{
                        type: "progressbar",
                    }}
                    modules={[Pagination]}
                >
                    {skillList.map((slide) => (
                    <SwiperSlide key={slide.id}>         
                        <div className="swiper-slide">
                            <Link href="page/list/idfmall.html" target="_blank" title="새창열림">
                                <div className={styles.imgArea}>
                                    <img src={url + 'skill_' + slide.number + '.jpg'} />
                                </div>
                                <div className={styles.txtArea}>
                                    <h3 className={styles.title}>{slide.korTitle}<span>({slide.engTitle})</span></h3>
                                    <p><b>설명</b> : {slide.description}</p>
                                    <div className={`${styles.row} ${styles.f_start}`}>
										<p><b>사용기술</b></p>
										<div>
											<div><img src={urlIco + 'ico_' + slide.type + '.png'} /> {slide.type}</div>
											<div><img src={urlIco + 'ico_' + slide.type2 + '.png'} /> {slide.type2}</div>
										</div>
									</div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <div className={`${stylesCommon.btnGroup} ${stylesCommon.center} ${styles.btnGroup}`}>
                    <Link href="page/introduce.html" className={stylesCommon.btn}>전체보기</Link>
                </div>
            </div>
        </div>
    )
}

export default Skill
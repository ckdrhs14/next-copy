import React, { useRef } from 'react';
import styles from "../../assets/scss/section/module/wk.module.scss";
import stylesCommon from "../../assets/scss/section/module/cm.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from "swiper/modules";
import Link from 'next/link'

import { workData } from "../../constants/workData";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const url = "img/portfolio/";

const Work = () => {
    const main = useRef();

    useGSAP(
        () => {
        const actions = gsap.utils.toArray('.innerWrap')
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

    const seongNam = workData.filter((data) => {
        return data.korTitle.includes('성남시');
    });

    const shopList = workData.filter((data) => {
        return data.type === "shop";
    });

    const sumList = shopList.concat(seongNam)

    return (
        <div className={`${stylesCommon.section} ${styles.section3}`} ref={main}>
            <div className={`${stylesCommon.innerWrap} ${styles.innerWrap} innerWrap`}>
                <h3 className={`${stylesCommon.title} ${styles.title}`}>
                    <p>Work PortFolio</p>
                    <p>Work PortFolio</p>
                </h3>

                <Swiper className={styles.workSwiper}
                    loop={true} // 슬라이드 루프
                    spaceBetween={20} // 슬라이스 사이 간격
                    slidesPerView={1.5} // 보여질 슬라이스 수
                    pagination={{
                        type: "progressbar",
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                      480:{
                        slidesPerView:1.5,
                        spaceBetween:20
                        },
                      768:{
                        slidesPerView:2.5,
                        spaceBetween:20
                        },
                      1024:{
                         slidesPerView:3,
                         spaceBetween:30
                        }
                    }}
                >
                    {sumList.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="swiper-slide">
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
                                            { slide.mainColor === '#000' ?
                                                <p>Main <span style={{backgroundColor:slide.mainColor, border:"1px solid #fff"}}></span>({slide.mainColor})</p>
                                                : <p>Main <span style={{backgroundColor:slide.mainColor}}></span>({slide.mainColor})</p>
                                            }
                                            <p>Sub <span style={{backgroundColor:slide.subColor}}></span>({slide.subColor})</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <div className={`${stylesCommon.btnGroup} ${stylesCommon.center} ${styles.btnGroup}`}>
                    <Link href="/list" className={stylesCommon.btn}>전체보기</Link>
                </div>
            </div>
        </div>
    )
}

export default Work
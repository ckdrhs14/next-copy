"use client";
import { useEffect } from 'react'
import styles from "../../assets/scss/section/module/ct.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const url = "img/portfolio/";


export default function List(props) {


    useEffect(()=> {
      
      document.querySelector('header').style.top = '0'

    });

    
  
    return (
        <>
          <div className={styles.container}>

            <div className={`${styles.sVisualWrap} ${styles.introduce}`}>
              <h3>INTRODUCE</h3>
            </div>

            <div className={styles.contentWrap}>
                <div className="introWrap">
                    <div className="introbox">
                        <div className="me">
                        </div>
                    </div>

                    <div className="introtext">
                        <h3 className="title">ONLY THOSE WHO WILL RISK GOING TOO FAR CAN POSSIBLY FIND OUT HOW FAR ONE CAN GO.</h3>
                        <p>백문이 불여일견이라 경험 해본 사람은 훨씬 더 높은 안목을 가집니다.<br className="mobileHide3" />
                        위험을 감수하는 사람은 더 높은 경험을 쌓습니다.<br />
                        저의 도전적이고 호기심 많은 성향은 저에게 경험을 주었고 제 인생에 많은 도움을 주었던 것 같습니다.<br />
                        사람을 대할 때 임기응변이 늘었고 정답은 없지만 무엇이 나은 방향인지 제시해줍니다.<br />
                        만나는 모든 사람들에게 감사하며 항상 노력하여 좋은 경험으로 기억 될 수 있도록 가꾸겠습니다.</p>
                    </div>
                </div>
                <div className="skillList">
                    <h3 className="title bounce">
                        <span>L</span>
                        <span>I</span>
                        <span>C</span>
                        <span>E</span>
                        <span>N</span>
                        <span>S</span>
                        <span>E</span>
                    </h3>
                    <Swiper className={styles.workSwiper}
                        loop={true} // 슬라이드 루프
                        spaceBetween={10} // 슬라이스 사이 간격
                        slidesPerView={5} // 보여질 슬라이스 수
                        breakpoints={{
                            480:{
                              slidesPerView:1.5             
                              },
                            768:{
                            slidesPerView:2.5             
                            },
                            1024:{
                            slidesPerView:5
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="box dsh">
                                <div className="topArea">
                                    <p>국가기술자격증</p>
                                    <p className="tit">워드프로세서</p>
                                    <p>대한상공회의소</p>
                                </div>
                                <div className="bottomArea">
                                    <p><span>이름</span>이창곤</p>
                                    <p><span>직무</span>사무</p>
                                    <p><span>합격</span>2017.08.18</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box dsh">
                                <div className="topArea">
                                    <p>국가기술자격증</p>
                                    <p className="tit">컴퓨터활용능력 2급</p>
                                    <p>대한상공회의소</p>
                                </div>
                                <div className="bottomArea">
                                    <p><span>이름</span>이창곤</p>
                                    <p><span>직무</span>사무</p>
                                    <p><span>합격</span>2017.12.15</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box hrdk">
                                <div className="topArea">
                                    <p>국가기술자격증</p>
                                    <p className="tit">웹디자인기능사</p>
                                    <p>한국산업인력공단</p>
                                </div>
                                <div className="bottomArea">
                                    <p><span>이름</span>이창곤</p>
                                    <p><span>직무</span>디자인</p>
                                    <p><span>합격</span>2018.06.15</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box hrdk">
                                <div className="topArea">
                                    <p>국가기술자격증</p>
                                    <p className="tit">양식조리기능사</p>
                                    <p>한국산업인력공단</p>
                                </div>
                                <div className="bottomArea">
                                    <p><span>이름</span>이창곤</p>
                                    <p><span>직무</span>조리</p>
                                    <p><span>합격</span>2011.06.03</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box kpc">
                                <div className="topArea">
                                    <p>국가기술자격증</p>
                                    <p className="tit">GTQ 1급</p>
                                    <p>한국생산성본부</p>
                                </div>
                                <div className="bottomArea">
                                    <p><span>이름</span>이창곤</p>
                                    <p><span>직무</span>정보통신</p>
                                    <p><span>합격</span>2017.12.15</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <div className="contactArea">
                    <p className="title bounce">
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>A</span>
                        <span>C</span>
                        <span>T</span>
                    </p>

                    <div className="btnGroup center">
                        <a href="https://github.com/ckdrhs14" target="_blank" title="새창열림" className="btn"><img src="img/button/ico_github.png" />GITHUB</a>
                        <a href="mailto:ckdrhs50@gmail.com" className="btn"><img src="img/button/ico_mail.png" />MAIL</a>
                        <a href="tel:01045095164" className="btn"><img src="img/button/ico_tel.png" />TEL</a>
                    </div>
                </div>
                
            </div>
          </div>
        </>
    )
}


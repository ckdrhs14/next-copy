import React, { useRef } from 'react';
import styles from "@/assets/scss/section/module/itd.module.scss";
import stylesCommon from "@/assets/scss/section/module/cm.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Introduce = () => {
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
        <div className={`${stylesCommon.section} ${styles.section2}`} ref={main}>
            <canvas id="myCanvas" width="100%" height="100%"></canvas>
            <div>
                <div className={`${stylesCommon.innerWrap} ${styles.innerWrap} innerWrap`}>
                    <div className={`${stylesCommon.box} ${styles.box}`}>
                        <div className={styles.imgArea}>
                            <img src="/img/main/introPhoto.jpg" />
                        </div>
                        <div className={styles.txtArea}>
                            <h3 className={styles.title}><strong className={styles.highlight}>: POSITIVE</strong> DEVELOPER</h3>
                            <p className={styles.txt}>안녕하세요, 웹퍼블리셔 및 프론트엔드 개발자 이창곤 입니다.<br className="mobileHide4" />
                            남들과 다른 생각을 가지고 코딩에 임하는 것에 즐거움을 느끼고,<br className="mobileHide4" />
                            긍정적인 마인드로 코딩 및 사회생활에 임하고 있습니다.
                            <br /><br />
                            쇼핑몰, 공공기관, 도서관사업소, 홈페이지 구축 및 리뉴얼을 주로 진행하였고<br className="mobileHide3" />
                            웹접근성&웹호환성 인증 및 유지보수, 기타 디자인작업도 함께 진행하였습니다.
                            <br /><br />
                            업무를 진행할 때 디자인이 바쁘면 간단한 리디자인은 직접 진행하기도 하고,
                            <br className="mobileHide3" />JSP나 DB테이블명도 일이 많아 보이면 간단하게 수정하며 서로 도와가며 일하는 걸 좋아합니다.
                            <br /><br />
                            코딩은 계산적이지만 대인관계는 허물없이 지내는 <span className={styles.highlight}>긍정적인 자세</span>로 항상 임하고 있습니다.</p>
                        </div>
                    </div>
                    <div className={`${stylesCommon.btnGroup} ${styles.btnGroup}`}>
                        <a href="page/introduce.html" className={stylesCommon.btn}>소개 더보기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
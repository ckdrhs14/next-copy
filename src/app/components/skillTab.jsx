import { useState, useEffect } from "react";
import Link from 'next/link'
import { skillData } from "../../constants/skillData";
import styles from "../../assets/scss/section/module/ct.module.scss";

const url = "img/skill/";
const urlIco = "img/icon/";

export default function Tab(props) {

  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');

  useEffect(()=>{
    setTimeout(()=>{ setFade('fadeEnd') }, 200)
    return ()=>{
      setFade('')
    }
  }, [tab])
  
  const tabClickHandler=(index)=>{
    setTab(index);
  };

  return (
    <>
    <div className="containers">

      <div className={styles.tab} variant="tabs" defaultactivekey="link0">
          <div eventKey="link0" onClick={()=> {setTab(0); tabClickHandler(0);}} className={tab === 0 ? `${styles.on}` : ""}><span>구현예제</span></div>
          <div eventKey="link1" onClick={()=> {setTab(1); tabClickHandler(1);}} className={tab === 1 ? `${styles.on}` : ""}><span>디자인</span></div>
          <div eventKey="link2" onClick={()=> {setTab(2); tabClickHandler(2);}} className={tab === 2 ? `${styles.on}` : ""}><span>기타</span></div>
      </div>
      
      <div className={`fadeStart ${fade}`}>
        <TabContent tab={tab}/>
      </div>
    
    </div> 
    </>
  )
}


function TabContent(props){

  const jsList = skillData.filter((data) => {
    return data.role === "js";
  });

  const designList = skillData.filter((data) => {
    return data.role === "design";
  });

  const etcList = skillData.filter((data) => {
    return data.role === "etc";
  });

  if (props.tab === 0) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {jsList.map((slide) => (
        <li key={slide.id}>
            <Link href={`https://glittery-cajeta-a9c59c.netlify.app/page/myweb/${slide.urlEng}/`} target="_blank" title="새창열림">
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
        </li>
        ))}
      </ul>
    )
  } else if (props.tab === 1) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {designList.map((slide) => (
        <li key={slide.id}>
            <div className={styles.imgArea}>
                <img src={url + 'design_' + slide.number + '.jpg'} />
            </div>
            <div className={styles.txtArea}>
                <h3 className={styles.title}>{slide.korTitle}<span>({slide.engTitle})</span></h3>
                <div className={`${styles.row} ${styles.f_start}`}>
                    <p><b>사용기술</b></p>
                    <div>
                        <div><img src={urlIco + 'ico_' + slide.type2 + '.png'} /> {slide.type}</div>
                    </div>
                </div>
            </div>
        </li>
        ))}
      </ul>
    )
  } else if (props.tab === 2) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {etcList.map((slide) => (
        <li key={slide.id}>
            <div className={styles.imgArea}>
                <img src={url + 'etc_' + slide.number + '.jpg'} />
            </div>
            <div className={styles.txtArea}>
                <h3 className={styles.title}>{slide.korTitle}</h3>
                <div className={`${styles.row} ${styles.f_start}`}>
                    <p><b>내용</b></p>
                    <div>
                        <div>{slide.description}</div>
                    </div>
                </div>
            </div>
        </li>
        ))}
      </ul>
    )
  }
}


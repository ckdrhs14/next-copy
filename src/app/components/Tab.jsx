import { useState, useEffect } from "react";
import Link from 'next/link'
import { workData } from "../../constants/workData";
import styles from "../../assets/scss/section/module/ct.module.scss";

const url = "img/portfolio/";

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
          <div eventKey="link0" onClick={()=> {setTab(0); tabClickHandler(0);}} className={tab === 0 ? `${styles.on}` : ""}><span>쇼핑몰</span></div>
          <div eventKey="link1" onClick={()=> {setTab(1); tabClickHandler(1);}} className={tab === 1 ? `${styles.on}` : ""}><span>도서관 및 공공기관</span></div>
          <div eventKey="link2" onClick={()=> {setTab(2); tabClickHandler(2);}} className={tab === 2 ? `${styles.on}` : ""}><span>개인작업물</span></div>
      </div>
      
      <div className={`fadeStart ${fade}`}>
        <TabContent tab={tab}/>
      </div>
    
    </div> 
    </>
  )
}


function TabContent(props){

  const shopList = workData.filter((data) => {
    return data.type === "shop";
  });

  const libList = workData.filter((data) => {
    return data.type === "lib";
  });

  const etcList = workData.filter((data) => {
    return data.type === "etc";
  });

  if (props.tab === 0) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {shopList.map((slide) => (
        <li key={slide.id}>
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
        </li>
        ))}
      </ul>
    )
  } else if (props.tab === 1) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {libList.map((slide) => (
        <li key={slide.id}>
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
                        <p>Main <span style={{backgroundColor:slide.mainColor}}></span>({slide.mainColor})</p>
                        <p>Sub <span style={{backgroundColor:slide.subColor,}}></span>({slide.subColor})</p>
                    </div>
                </div>
            </div>
          </Link>
        </li>
        ))}
      </ul>
    )
  } else if (props.tab === 2) {
    return (
      <ul className={`${styles.pjList} ${styles.col3}`}>
      {etcList.map((slide) => (
        <li key={slide.id}>
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
                        <p>Main <span style={{backgroundColor:slide.mainColor}}></span>({slide.mainColor})</p>
                        <p>Sub <span style={{backgroundColor:slide.subColor,}}></span>({slide.subColor})</p>
                    </div>
                </div>
            </div>
          </Link>
        </li>
        ))}
      </ul>
    )
  }
}


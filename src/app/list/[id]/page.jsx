"use client";
import Link from 'next/link'
import { workData } from "../../../constants/workData";
import { useParams } from 'next/navigation';
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function List(props) {
  


  const {id} = useParams();

  const newWorkData = workData.find((item)=>{
    return item.id == id
  })


  let data = newWorkData.overview;

  const url = "/img/detail/";

  useEffect(()=> {

    document.querySelector('header').style.top = '0'

  });


  return (
      <>
      <div className="container listWrap">
          <div className="contentWrap">
            <div className="list">
              <div className="titleWrap">
                <h3 className="title">{newWorkData.korTitle}<span>({newWorkData.engTitle})</span></h3>
              </div>
              <Swiper className="listSwiper"
                  loop={true} // 슬라이드 루프
                  slidesPerView={1} // 보여질 슬라이스 수
                  pagination={{
                      type: "progressbar",
                  }}
                  modules={[Pagination]}
              >
                  <SwiperSlide>         
                    <div className="imgArea">
                      <img src={url + newWorkData.type + '_' + newWorkData.number + '_01.png'}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imgArea">
                      <img src={url + newWorkData.type + '_' + newWorkData.number + '_02.png'}/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="imgArea">
                      <img src={url + newWorkData.type + '_' + newWorkData.number + '_03.png'}/>
                    </div>
                  </SwiperSlide>
              </Swiper>

              <ul className="infoArea">
                <li>
                  <div>
                    <h3 className="title">OverView</h3>
                    <p>
                      {
                        data.split('\n').map(line => {
                          return (<>{line}<br className='mobileHide3'/></>)
                        })
                      }
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="title">Detail Info</h3>
                    <p><span>사업기간</span>{newWorkData.date}</p>
                    <p><span>발주처</span>{newWorkData.client}</p>
                    <p><span>작업인원</span>{newWorkData.team}</p>
                    <p><span>URL</span><Link href={`${newWorkData.link}`} target="_blank" title="새창열림">{newWorkData.link}</Link></p>
                  </div>
                </li>
              </ul>
              <div className="btnGroup center">
                <Link href="/list" className="btn">목록으로</Link>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
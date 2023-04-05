import { useEffect, useState } from 'react';
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';


const Sub02_05 = ({ SubHeaderData }) => {

    const { kakao } = window;

    const [m_ks, setM_ks] = useState(false);
    const [loc_list, setLoc_list] = useState([
        new kakao.maps.LatLng(37.11329826525148, 127.61384241769963),
        new kakao.maps.LatLng(37.47548428822684, 126.88193063897485)
    ])

    useEffect(() => {
        var container = document.getElementById('map'); // 지도 담기
        var options = {
            center: loc_list[on],
            level: 3
        };
        var map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다 
        var markerPosition = loc_list[on];

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [m_ks]);




    const [on, setOn] = useState(0);
    const LOCATION_TAP = (idx) => {
        setOn(idx);
        setM_ks(!m_ks)
    }


    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_05 sec'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>위치안내</h2>
                    </div>
                    <ul className="location_nav">
                        <li
                            className={on === 0 ? "on" : ""}
                            onClick={() => LOCATION_TAP(0)}
                        >
                            <span>공장</span>
                        </li>
                        <li
                            className={on === 1 ? "on" : ""}
                            onClick={() => LOCATION_TAP(1)}
                        >
                            <span>서울사무소</span>
                        </li>
                    </ul>
                    {on === 0 && (
                        <div className="Factory">
                            <div id='map' style={{ width: '1200px', height: '500px' }}></div>
                            <div className="location_text">
                                <strong>KS벽지 공장</strong>
                                <span>경기 이천시 장호원읍 서동대로 8798-50</span>
                                <span>T. 031-642-6111 F. 031-642-6115</span>
                            </div>
                        </div>
                    )}
                    {on === 1 && (
                        <div className="Seoul_office">
                            <div id='map' style={{ width: '1200px', height: '500px' }}></div>
                            <div className="location_text">
                                <strong>  KS벽지 서울사무소</strong>
                                <span>서울특별시 금천구 디지털로 130 남성프라자 913호</span>
                                <span>T. 02-852-1239 F. 02-869-7789</span>
                            </div>
                        </div>
                    )}

                </div>
            </section>

        </>
    )
}

export default Sub02_05;
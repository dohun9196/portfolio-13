import { useState } from 'react';
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_05 = ({ SubHeaderData, KAKAO_Map }) => {

    const [on, setOn] = useState(0)
    const LOCATION_TAP = (idx) => {
        setOn(idx);
    }
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_05 sec50'>
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
                            카카오 api 아직 안넣음
                            <div className="location_text">
                                <strong>KS벽지 공장</strong>
                                <span>경기 이천시 장호원읍 서동대로 8798-50</span>
                                <span>T. 031-642-6111 F. 031-642-6115</span>
                            </div>
                        </div>
                    )}
                    {on === 1 && (
                        <div className="Seoul_office">
                            카카오 api 아직 안넣음
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
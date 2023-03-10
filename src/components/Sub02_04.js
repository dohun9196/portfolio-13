import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_04 = ({ SubHeaderData }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_04 sec50'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>채용정보</h2>
                    </div>
                    <div className="sp_content_text">
                        <strong>현재 채용정보가 없습니다.</strong>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sub02_04;
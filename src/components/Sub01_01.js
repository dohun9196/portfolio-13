import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub01_01 = ({ SubHeaderData, KSW }) => {

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage01_01 sec'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>{KSW[0].MainTitle}</h2>
                    </div>
                    <div className="ksw_">
                        {
                            KSW[0].SubContent.map((it, idx) => {
                                return (
                                    <Link to={it.Lik} key={idx} target='_blink'>
                                        <div className='sp_content_text sp01'>
                                            <strong>{it.Title}</strong>
                                            <figure>
                                                <img src={process.env.PUBLIC_URL + it.Src[0].Img0} alt="" />
                                            </figure>
                                            <p>{it.Desc}</p>
                                        </div>
                                        <figure className='sp_content_fig sp01'>
                                            <img src={process.env.PUBLIC_URL + it.Src[1].Img1} alt="" />
                                        </figure>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sub01_01;
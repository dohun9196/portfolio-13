<<<<<<< HEAD
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

=======
import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub01_01 = ({ SubHeaderData, KSW }) => {
    console.log('배열', KSW);
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage01_01 sec50'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>{KSW[0].MainTitle}</h2>
                    </div>
                    <div className="ksw_">
                        {
                            KSW[0].SubContent.map((it, idx) => {
                                return (
                                    <Link to={it.Lik} key={idx}>
                                        <div className='sp_content_text sp01'>
                                            <strong>{it.Title}</strong>
                                            <img src={process.env.PUBLIC_URL + it.Src[0].Img0} alt="" />
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

>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b
export default Sub01_01;
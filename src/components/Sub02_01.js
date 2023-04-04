import { useState } from 'react';
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_01 = ({ SubHeaderData, Brand, BrandSub, History }) => {
    const [on, setOn] = useState(0)
    const LIClick = (idx) => {
        setOn(idx);

    }

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_01 sec50'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>KS Company</h2>
                    </div>
                    <ul className="company_nav">
                        <li
                            className={on === 0 ? "on" : ""}
                            onClick={() => LIClick(0)}
                        >
                            <span>{Brand[0].MainTitle}</span>
                        </li>
                        <li
                            className={on === 1 ? "on" : ""}
                            onClick={() => LIClick(1)}
                        >
                            <span>{History[0].MainTitle}</span>
                        </li>
                    </ul>
                </div>

                {on === 0 && (
                    <div class="brand_wrap">
                        <div className="sp_content_text sp02_01">
                            <div className="inner">
                                {
                                    Brand[0].SubContent.map((it, idx) => {
                                        return (
                                            <div className='brand_text'>
                                                <span>{it.Title}</span>
                                                <strong>{it.SubTitle}</strong>
                                                <p>  {`${it.Desc.substring(0, 50)}`}
                                                    <br />
                                                    {`${it.Desc.substring(50)}`}</p>
                                                <figure>
                                                    <img src={it.Img} alt="" />
                                                </figure>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='sp_content_bg sp02_01'>

                        </div>
                        <div className="corporation">
                            <div className="inner">
                                <div className="sp_tit">
                                    <h2>{BrandSub[0].MainTitle}</h2>
                                </div>
                                <div className='corporation_flex'>
                                    {
                                        BrandSub[0].SubContent.map((it, idx) => {
                                            return (
                                                <div className="corporat_box">
                                                    <div class="left">
                                                        <span>{it.Title}</span>
                                                        <p>  {`${it.Desc.substring(0, 23)}`}
                                                            <br />
                                                            {`${it.Desc.substring(23)}`}</p>
                                                    </div>
                                                    <figure>
                                                        <img src={it.Img} alt="" />
                                                    </figure>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {on === 1 && (
                    <div class="history_wrap">
                        연혁넣음
                    </div>
                )}
            </section>
        </>
    )
}

export default Sub02_01;
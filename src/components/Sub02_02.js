import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_02 = ({ SubHeaderData, CEO }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_02 sec50'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>{CEO[0].MainTitle}</h2>
                    </div>
                    <div className="sp_content_text sp02_02">
                        {
                            CEO[0].SubContent.map((it, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <div className="left">
                                            <span>{it.Title}</span>
                                            <p>{it.Desc01}</p>
                                            <p>{it.Desc02}</p>
                                            <p>{it.Desc03}</p>
                                            <figure>
                                                <img src={process.env.PUBLIC_URL + it.Sig} alt="" />
                                            </figure>
                                            <em>{it.Group}</em>
                                        </div>
                                        <div className="right">
                                            <img src={process.env.PUBLIC_URL + it.Img} alt="" />
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sub02_02;
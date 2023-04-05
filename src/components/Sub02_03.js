import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_03 = ({ SubHeaderData, LOGO }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_03 sec'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>{LOGO[0].MainTitle}</h2>
                    </div>
                    <div className="sp_content_text sp02_03">
                        {
                            LOGO[0].SubContent.map((it, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <div className="logo_flex">
                                            <strong>{it.Title}</strong>
                                            <figure>
                                                <img src={process.env.PUBLIC_URL + it.Img} alt="" />
                                            </figure>
                                            <div className="download">
                                                <Link><i className="xi-download" />{it.JPGE}</Link>
                                                <Link><i className="xi-download" />{it.AI}</Link>
                                            </div>
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

export default Sub02_03;
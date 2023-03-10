import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const SubHeader = ({ SubHeaderData }) => {

    const { pathname } = useLocation();
    const { subId } = useParams();

    const FilterData = SubHeaderData.filter(
        (item) => item.Lik === pathname


    );
    const Background = FilterData.length > 0 ? `url(${FilterData[0].Src.Img})` : '';

    return (
        <>
            <div className="sub_header" style={{ backgroundImage: Background }}>
                <div className="inner">
                    {FilterData.map((it, idx) => (
                        <div className="sp_top_tit" key={idx}>
                            <strong>{it.Title}</strong>
                            <span>{it.Desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SubHeader;
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub02_02 = ({ SubHeaderData, Brand, BrandSub, History }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />

        </>
    )
}

export default Sub02_02;
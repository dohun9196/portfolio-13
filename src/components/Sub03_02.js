<<<<<<< HEAD
import { useState } from 'react';
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Section = styled.section`
background: #f9f9f9;
`

const SpNav = styled.div`
margin: 0 0 50px 0;
`
const Ul = styled.ul`
    display: flex;
    gap: 60px;
    justify-content: center;
`
const Li = styled.li`
    position: relative;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin: 0 0 30px 0;
    letter-spacing: 1.5px;
    cursor: pointer;

    &:after{
        content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 1px;
    background: #ddd;
    }

    &.on:after{
        background: #602a19;
    }
`
const ProInfo = styled.div`
display: flex;
gap: 30px;
justify-content:space-between;
`
const TextArea = styled.div`
flex:1;
`
const SearchArea = styled.div`
width: 50%;
flex:1;
background: #fff;
box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
padding:50px;
`
const Title = styled.span`
display:block;
font-size:30px;
margin:0 0 30px 0;
`
const Desc = styled.p`
font-size:15px;
font-weight:300;
line-height:1.3;
margin:5px 0;
`
const TextUl = styled.ul`
margin-top:40px;
`
const TextLi = styled.li`
font-size:17px;
color:#666;
margin:10px 0;
`
const TextLiLast = styled.li`
font-size:13px;
line-height:1.3;
color:#666;
margin:50px 0 0 0;
`
const ColTitle = styled.span`
display:block;
font-size:20px;
margin:0 0 15px 0;
`
const ColBox = styled.div`
`
const StyTitle = styled.div`
display:block;
font-size:20px;
margin:0 0 15px 0;
`
const ColUL = styled.ul`
display:flex;
gap: 10px;
justify-content:flex-start;
margin:0 0 50px 0;
`
const ColList = styled.li`

width:25px;
height:25px;

font-size:0;

border-radius:50%;
border:1px solid #ddd;

&.click{
content: "";

border:2px solid #602a19;

}
`
const StyUL = styled.ul`
display:flex;
gap: 10px;
justify-content:flex-start;
flex-wrap:wrap;
margin:0 0 50px 0;
`
const StyList = styled.li`
font-size:15px;
font-weight:300;
padding:10px 20px;
border-radius:20px;
border:1px solid #ddd;

&.stycli{
    background: #602a19;
    color:#fff;
}
`




const Sub03_02 = ({ SubHeaderData, BrandNAV01, BrandContent01 }) => {
    const [on, setOn] = useState(0);
    const PRODUCT_TAP = (idx) => {
        setOn(idx);
    }
    const [click, setClick] = useState(false);
    const COL_CLICK = (idx) => {
        setClick(idx)
    }
    const [stycli, setStycli] = useState(false);
    const STY_CLICK = (idx) => {
        setStycli(idx)
    }

    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <Section className='SubPage03_02 sec'>
                <div className="inner">
                    <div className="sp_tit pro01">
                        <h2>{BrandNAV01[0].MainTitle}</h2>
                    </div>
                    <SpNav>
                        <Ul>
                            {
                                BrandNAV01[0].NavTitle.map((it, idx) => {
                                    return (
                                        <Li key={idx}
                                            className={on === idx ? "on" : ""}
                                            onClick={() => PRODUCT_TAP(idx)}>
                                            {it.Title}
                                        </Li>
                                    )
                                })
                            }
                        </Ul>
                    </SpNav>


                    <ProInfo>

                        <TextArea>
                            <Title>{BrandContent01[on].MainTitle}</Title>
                            <Desc>{BrandContent01[on].Desc01}</Desc>
                            <Desc>{BrandContent01[on].Desc02}</Desc>
                            <TextUl>
                                {
                                    BrandContent01[on].List?.map((itm, idx) => {
                                        return (
                                            <TextLi key={idx}>
                                                {itm.List_Itm}
                                            </TextLi>
                                        )
                                    })
                                }
                                <TextLiLast>{BrandContent01[on].Alter}</TextLiLast>
                            </TextUl>
                        </TextArea>

                        <SearchArea>
                            <ColTitle>{BrandContent01[3].ColorTitle}</ColTitle>
                            <ColUL>
                                {
                                    BrandContent01[3].Color?.map((col, idx) => {
                                        return (
                                            <ColList key={idx}
                                                style={{ backgroundColor: col.BG }}
                                                className={click === idx ? "click" : ""}
                                                onClick={() => COL_CLICK(idx)}>
                                                컬러
                                            </ColList>
                                        )
                                    })
                                }
                            </ColUL>
                            <ColBox>
                                <StyTitle>{BrandContent01[4].StyleTitle}</StyTitle>
                                <StyUL>
                                    {
                                        BrandContent01[4].Style?.map((sty, idx) => {
                                            return (
                                                <StyList key={idx}
                                                    className={stycli === idx ? "stycli" : ""}
                                                    onClick={() => STY_CLICK(idx)}>
                                                    {sty.Name}
                                                </StyList>
                                            )
                                        })
                                    }
                                </StyUL>
                            </ColBox>
                        </SearchArea>

                    </ProInfo>
                </div>
            </Section>
        </>
    )
}

export default Sub03_02;
=======
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub03_02 = ({ SubHeaderData, KSW }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />

        </>
    )
}

export default Sub03_02;
>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b

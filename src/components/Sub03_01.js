<<<<<<< HEAD
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H2 = styled.h2`
text-align:left;
`
const Product_box = styled.div`
display:flex;
gap:30px;
justify-content: space-between;
`
const Product_box02 = styled.div`
display:flex;
gap:30px;
justify-content: flex-start;
`
const P_itm = styled.div`
width:33%;
`

const Figure = styled.figure`
border: 1px solid #ddd;
overflow: hidden;
margin: 0 0 20px 0;
`
const P_img = styled.img`
transition:0.5s;
&:hover {
    transform: scale(1.1);
  }
`
const Span = styled.span`
    display: block;
    text-align:center;
    font-size: 17px;
`
const Sub03_01 = ({ SubHeaderData, Product }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage03_01-01 sec'>
                <div className="inner">
                    <div className="sp_tit pro01">
                        <H2>{Product[0].MainTitle}</H2>
                    </div>
                    <Product_box>
                        {
                            Product[0].Src.map((it, idx) => {
                                return (
                                    <P_itm key={idx}>
                                        <Link to="/Sub03_02">
                                            <Figure>
                                                <P_img src={it.Img} alt="" />
                                            </Figure>
                                        </Link>
                                        <div className="pro_name">
                                            <Span>{it.Name}</Span>
                                        </div>
                                    </P_itm>
                                )
                            })
                        }
                    </Product_box>
                </div>
            </section >
            <section className='SubPage03_01-02 sec'>
                <div className="inner">
                    <div className="sp_tit pro01">
                        <H2>{Product[1].MainTitle}</H2>
                    </div>
                    <Product_box02>
                        {
                            Product[1].Src.map((it, idx) => {
                                return (
                                    <P_itm key={idx}>
                                        <Link to="/Sub03_03">
                                            <Figure>
                                                <P_img src={it.Img} alt="" />
                                            </Figure>
                                        </Link>
                                        <div className="pro_name">
                                            <Span>{it.Name}</Span>
                                        </div>
                                    </P_itm>
                                )
                            })
                        }
                    </Product_box02>
                </div>
            </section >
        </>
    )
}

=======
import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
const Sub03_01 = ({ SubHeaderData, KSW }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />

        </>
    )
}

>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b
export default Sub03_01;
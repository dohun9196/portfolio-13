import React from 'react';
import SubHeader from "./SubHeader";
import SubNav from './SubNav';
import styled from 'styled-components';

const Table = styled.table`
width: 100%;
border-top: 1px solid #333;
border-bottom: 1px solid #ddd;
text-align: center;
`
const Th = styled.th`
font-size:18px;
font-weight:500;
padding:20px 0;
background: #f9f9f9;
`
const Td = styled.td`
padding:20px 0;

`

const Sub02_04 = ({ SubHeaderData }) => {
    return (
        <>
            <SubHeader SubHeaderData={SubHeaderData} />
            <SubNav SubHeaderData={SubHeaderData} />
            <section className='SubPage02_04 sec'>
                <div className="inner">
                    <div className="sp_tit">
                        <h2>채용정보</h2>
                    </div>

                    <Table>
                        <thead>
                            <tr>
                                <Th scope='col'>번호</Th>
                                <Th scope='col'>제목</Th>
                                <Th scope='col'>채용기간</Th>
                                <Th scope='col'>상태</Th>
                                <Th scope='col'>조회</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td colSpan='5'>등록된 게시글이 없습니다.</Td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </section>
        </>
    )
}

export default Sub02_04;
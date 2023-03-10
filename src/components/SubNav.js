import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const SubNav = ({ SubHeaderData }) => {
    const { pathname } = useLocation();
    const { subId } = useParams();

    const [on, setOn] = useState('');

    // 클릭한 페이지의 주소 값에 따라 필터링한 데이터를 가져온다.
    // SubHeaderData 배열에서 Filter 속성값에 link 문자열에서 _ 를 기준으로 잘라낸 첫번째 문자열과 일치하거나 비슷한 문자열이 있는 요소들만 모아서 새로운 배열로 만들어 반환
    const filterLink = (link) => {
        const Filter_DATA = SubHeaderData.filter((item) => item.Filter.includes(link.split('_')[0]));
        console.log('필터값:', Filter_DATA);
        return Filter_DATA;
    };

    // 현재 페이지의 주소를 가져와서, 첫 번째 / 로 시작하는 문자열을 추출
    // window.location.pathname는 ex) https://dohun9196.github.io/link/Sub01_01 경우 /link/Sub01_01의 값이다.
    // split('/')을 쓰면 ['','link','Sub01_01']이 반환된다, split('/')[1]을 쓰면 link가 반환한다, 
    // 배포시 Sub01_01 값을 반환해야하기에, split('/')[] 값을 수정해야함

    const SubPage = window.location.pathname.split('/')[1];

    // Filtering 변수에 클릭한 페이지의 주소 값과 일치하는 데이터 저장
    const Filtering = filterLink(SubPage);

    const handleItemClick = (idx) => {
        setOn(idx);
    };

    return (
        <div className="sub_nav">
            <div className="inner">
                <ul className="sub_nav_list">
                    {Filtering.map((it, idx) => {
                        // 주소와 배열의 Lik값이 일치하면 .on 붙이기
                        const Lik_on = pathname === it.Lik ? 'on' : '';
                        console.log(it.Lik)

                        return (
                            // <li><Link to={it[10].Lik}>{it[10].Title}</Link></li>
                            <li key={idx} className={Lik_on}>
                                {/* 클릭하면 li에 .on 붙이기 */}
                                <Link to={it.Lik} onClick={() => handleItemClick(it.idx)}>
                                    {it.NavTitle}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

// 배열의 중복 요소를 제거
// function filterUnique(arr) {
//     return arr.filter((item, index) => arr.findIndex((i) => i.id === item.id) === index);
// }

export default SubNav;

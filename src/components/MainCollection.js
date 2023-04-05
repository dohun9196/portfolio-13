import { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
// import { Collection } from '../data/Data';

const MainCollection = () => {
    const [on, setOn] = useState({ main: 0, sub: 0 });
    const [conIdx, setConIdx] = useState(0);

    const handleTabClick = (m_idx, s_idx) => {
        setOn({ main: m_idx, sub: s_idx });
        setConIdx(s_idx);
    };

    const Collection = [
        {
            MainTitle: '실크 & 합지 브랜드', key: 'TheView', Submenu: [
                { NavTitle: 'The View', key: 'TheView' },
                { NavTitle: 'E Room', key: 'ERoom' },
                { NavTitle: 'Refractory', key: 'Refractory' },
                { NavTitle: 'VELUCE', key: 'VELUCE' },
                { NavTitle: 'The Home', key: 'TheHome' },
            ]
        }
    ];

    const Coll_Content = [
        {
            Title: '더뷰 The View',
            SubTitle: '"벽지, 그 이상의 공간을 보다"',
            Desc01: '더뷰는 스타일리시한 컬러와 패턴 디자인으로 트렌디함을 갖춘 고급 실크벽지 컬렉션입니다.',
            Desc02: '내 공간을 특별하게 만드는 한 끗 차이.더뷰가 수놓은 감각적인 디자인으로 내가 가장 좋아하는 공간을 만들어보세요.',
            Src: [
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView01.jpg', Name: '3009-24' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView02.jpg', Name: '3031-2' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_TheView03.jpg', Name: '3035-7' },
            ],
        },

        {
            Title: '이룸 E Room',
            SubTitle: '"나만의 공간을 이루다"',
            Desc01: '이룸은 다양한 소재감과 세련된 컬러를 활용해, 풍성한 디자인과 고급스러운 컬러의 프리미엄 실크 벽지 컬렉션입니다.',
            Desc02: '국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.',
            Src: [
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom01.jpg', Name: '2109-2' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom02.jpg', Name: '2097-1' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_ERoom03.jpg', Name: '2107-5' },
            ],
        },

        {
            Title: '방염 Refractory',
            SubTitle: '"안전을 가장 먼저 생각한 친환경 방염벽지"',
            Desc01: '방염 벽지는 뛰어난 안정성은 물론, 친환경 품질인증으로 건강까지 세심하게 배려한 실크 벽지 컬렉션입니다.',
            Desc02: '국가 안전기준 제품으로 인증된 친환경 방염 벽지. 기능을 겸비한 트랜디한 컬러의 제품으로 당신에게 안전하고 아름다운 공간을 선사합니다.',
            Src: [
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory01.jpg', Name: '9003-1' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory02.jpg', Name: '9000-2' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Silk_Refractory03.jpg', Name: '9013-2' },
            ],
        },

        {
            Title: '벨루체 VELUCE',
            SubTitle: '"나만의 라이프 스타일이 담긴 공간"',
            Desc01: '벨루체는 깔끔한 컬러와 모던한 디자인, 풍부한 텍스쳐감까지 겸비한 친환경 합지벽지 컬렉션입니다.',
            Desc02: '벨루체가 제안하는 합리적인 라이프스타일. 편안한 내추럴부터 세련된 모던함까지 벨루체만의 은은하고 따뜻한 감성을 느껴보세요.',
            Src: [
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce01.jpg', Name: '93403-3' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce02.jpg', Name: '93427-3' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_Veluce03.jpg', Name: '93424-5' },
            ],
        },

        {
            Title: '더홈 The Home',
            SubTitle: '"나만의 라이프 스타일이 담긴 공간"',
            Desc01: '더홈은 어떠한 공간이던 화사하게 밝혀주는 컬러와 디자인의 소폭 합지벽지 컬렉션입니다.',
            Desc02: '더홈과 함께 완성하는 나만의 인테리어. 생기를 불어넣는 산뜻한 디자인으로 당신의 일상이 더욱 특별해지는 공간을 만들어보세요.',

            Src: [
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome01.jpg', Name: '5407-2' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome02.jpg', Name: '5404-2' },
                { Img: process.env.PUBLIC_URL + '/img/mainCollection_Laminat_TheHome03.jpg', Name: '5404-4' },
            ],
        }
    ];

    return (
        <section className="MainCollection sec">
            <div className="inner">
                <div className="m_cont_tit">
                    <h2>COLLECTION</h2>
                </div>
                <div className="Collection_wrap">
                    <ul className="col_nav">
                        {
                            Collection.map((it, m_idx) => {
                                return (
                                    <li key={it.key}>
                                        <span>{it.MainTitle}</span>
                                        <ul className="col_submenu">
                                            {it.Submenu.map((subit, s_idx) => (
                                                <li
                                                    key={subit.key}
                                                    className={on.main === m_idx && on.sub === s_idx ? 'on' : ''}
                                                    onClick={() => handleTabClick(m_idx, s_idx)}
                                                >
                                                    <strong>{subit.NavTitle}</strong>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="col_content" >
                        {Coll_Content.map((it, idx) => {

                            return (
                                <div className={`col_con_box content_box0${idx + 1}`} key={idx} style={{ display: conIdx === idx ? 'block' : 'none' }}>
                                    <div className="left">

                                    </div>
                                    <div className="right" key={idx}>
                                        <strong>{it.Title}</strong>
                                        <span>{it.SubTitle}</span>
                                        <p>{it.Desc01}</p>
                                        <p className='last_p'>{it.Desc02}</p>
                                        <div className='r_img_box'>
                                            <figure>
                                                <img src={it.Src[0].Img} alt="" /><span>{it.Src[0].Name}</span>
                                            </figure>
                                            <figure>
                                                <img src={it.Src[1].Img} alt="" /><span>{it.Src[1].Name}</span>
                                            </figure>
                                            <figure>
                                                <img src={it.Src[2].Img} alt="" /><span>{it.Src[2].Name}</span>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainCollection;
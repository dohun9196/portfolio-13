<<<<<<< HEAD
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronRight, BsChevronLeft, BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainCollection from './MainCollection';
import styled from "styled-components";

const Main = ({ MainVisual, Collection, News }) => {


    const [Playing, setPlaying] = useState(true);

    const pauseHandler = () => {
        M_Slide.current.slickPause();
        setPlaying(true);
    };

    const playHandler = () => {
        M_Slide.current.slickPlay();
        setPlaying(false);
    };
    const MainSlide = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        fade: true,
        nextArrow: <BsChevronRight />,
        prevArrow: <BsChevronLeft />,
        slickPause: <BsFillPauseFill onClick={pauseHandler} />,
        slickPlay: <BsFillPlayFill onClick={playHandler} />,
        afterChange: idx => setSNum(idx),
    };

    const M_Slide = useRef(null);
    const [sNum, setSNum] = useState();

    useEffect(() => {
        setSNum(0);
    }, [])
    const Slide_btn = styled.div`
    position: absolute;
    top: 65%;
    left: 25px;
    font-size: 20px;
    font-weight: 700;
    z-index: 100;
    cursor: pointer;
`

    return (
        <>
            <section className="MainVisual">
                <div className="mainSlide">
                    <Slider {...MainSlide} ref={M_Slide}>
                        {
                            MainVisual.map((it, idx) => {
                                return (
                                    <figure className={`M_slide_itm0${idx + 1} ${idx === sNum ? 'on' : ''}`} key={idx} >
                                        <div className="left m_slide_tit">
                                            <h2>{it.Title}</h2>
                                            <p>{it.Desc}</p>
                                            <span>{it.SubText}</span>
                                        </div>
                                        <div className="right">
                                            <img src={process.env.PUBLIC_URL + `/img/MainVisual0${idx + 1}.jpg`} alt="" />
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                    <div className="num">
                        <em>{MainVisual[0].SlideText}</em>
                        <strong>0{(sNum + 1)}</strong><span>0{MainVisual.length}</span>
                    </div>
                    <Slide_btn>
                        {
                            Playing ? (
                                <BsFillPlayFill onClick={playHandler} />

                            ) : (
                                <BsFillPauseFill onClick={pauseHandler} />
                            )
                        }
                    </Slide_btn>
                </div>
            </section>

            <MainCollection MainCollection={Collection} />

            <section className="MainNews sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>NEWS</h2>
                        <p>KS벽지의 새로운 소식을 전합니다</p>
                    </div>
                    <div className="news_wrap">
                        <div className="left">
                            {
                                News.slice(0, 3).map((it, idx) => {

                                    return (
                                        <Link className={`left_a0${idx + 1}`} key={idx}>
                                            <figure >
                                                <img src={it.Src[0].Img} alt="" />
                                            </figure>
                                            <div className="news_text" key={idx}>
                                                <strong>{it.Title}</strong>
                                                <p>{it.Desc}</p>
                                                <span>{it.Date}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                        <div className="right">
                            {
                                News.slice(3).map((it, idx) => {

                                    return (
                                        <Link key={idx}>
                                            <figure >
                                                <img src={it.Src[0].Img} alt="" />
                                            </figure>
                                            <div className="news_text" key={idx}>
                                                <strong>{it.Title}</strong>
                                                <p>{it.Desc}</p>
                                                <span>{it.Date}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronRight, BsChevronLeft, BsPauseCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainCollection from './MainCollection';

const Main = ({ MainVisual, Collection, News }) => {

    const MainSlide = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        fade: true,
        nextArrow: <BsChevronRight />,
        prevArrow: <BsChevronLeft />,
        slickPause: <BsPauseCircle />,
        afterChange: idx => setSNum(idx),
    };

    const M_Slide = useRef(null);
    const [sNum, setSNum] = useState();

    useEffect(() => {
        setSNum(0);
    }, [])


    return (
        <>
            <section className="MainVisual">
                <div className="mainSlide">
                    <Slider {...MainSlide} ref={M_Slide}>
                        {
                            MainVisual.map((it, idx) => {
                                return (
                                    <figure className={`M_slide_itm0${idx + 1} ${idx === sNum ? 'on' : ''}`} key={idx} >
                                        <div className="left m_slide_tit">
                                            <h2>{it.Title}</h2>
                                            <p>{it.Desc}</p>
                                            <span>{it.SubText}</span>
                                        </div>
                                        <div class="right">
                                            <img src={process.env.PUBLIC_URL + `/img/MainVisual0${idx + 1}.jpg`} alt="" />
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                    <div className="num">
                        <em>{MainVisual[0].SlideText}</em>
                        <strong>0{(sNum + 1)}</strong><span>0{MainVisual.length}</span>
                    </div>
                </div>
            </section>

            <MainCollection MainCollection={Collection} />

            <section className="MainNews sec">
                <div className="inner">
                    <div className="m_cont_tit">
                        <h2>NEWS</h2>
                        <p>KS벽지의 새로운 소식을 전합니다</p>
                    </div>
                    <div className="news_wrap">
                        <div className="left">
                            {
                                News.slice(0, 3).map((it, idx) => {

                                    return (
                                        <Link className={`left_a0${idx + 1}`} key={idx}>
                                            <figure >
                                                <img src={it.Src[0].Img} alt="" />
                                            </figure>
                                            <div className="news_text" key={idx}>
                                                <strong>{it.Title}</strong>
                                                <p>{it.Desc}</p>
                                                <span>{it.Date}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                        <div className="right">
                            {
                                News.slice(3).map((it, idx) => {

                                    return (
                                        <Link key={idx}>
                                            <figure >
                                                <img src={it.Src[0].Img} alt="" />
                                            </figure>
                                            <div className="news_text" key={idx}>
                                                <strong>{it.Title}</strong>
                                                <p>{it.Desc}</p>
                                                <span>{it.Date}</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b
export default Main;
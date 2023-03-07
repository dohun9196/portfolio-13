import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronRight, BsChevronLeft, BsPauseCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainCollection from './MainCollection';

const Main = ({ MainVisual, Collection }) => {

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
            <section className="MainSns"></section>
        </>
    )
}

export default Main;
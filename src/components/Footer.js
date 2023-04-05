<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";



const Footer = () => {

    const [on, setOn] = useState(true);

    const toggleFamily = () => {
        setOn(!on);
    }
    return (
        <footer className="footer">
            <div className="inner">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="" />
                </div>
                <div className="center">
                    <ul className="f_banner">
                        <li>개인정보처리방침</li>
                        <li>이메일무단수집거부</li>
                        <li>이용약관</li>
                    </ul>
                    <address>
                        <span>대표자 : 박식순</span>
                        <span>사업자등록번호 : 365-85-01709</span>
                        <span>대표번호 : 031-642-6111</span>
                        <span>주소 : 경기도 이천시 장호원읍 서동대로 8798-50</span>


                        <div className="copy">
                            &copy; 2022 KSWALLCOVERINGS ALL Rights Reserved. Created by masstige
                        </div>
                    </address>
                </div>
                <div className="right">
                    <div className="famliy">
                        <button onClick={toggleFamily}><span>패밀리사이트</span><i className="xi-plus"></i></button>
                        <div className={`famliy_wrap ${on ? 'on' : ''}`}>
                            <div className="f_box">
                                <strong>패밀리사이트</strong>
                                <p>KS벽지 패밀리 사이트를 소개합니다.<br />
                                    아래계열사를 선택하시면 해당 홈페이지로 이동합니다.</p>
                                <div className="link_box">
                                    <Link to='/'>KS더블유</Link>
                                    <Link to='https://www.jeilwallpaper.com/' target="_blink">제일벽지</Link>
                                    <Link to='#'>케이엔피이노텍</Link>
                                    <Link to='http://www.cosmoswa.co.kr/' target="_blink">코스모스벽지</Link>
                                    <Link to='#'>케이엔피물류</Link>
                                </div>
                                <i className="xi-close" onClick={toggleFamily}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

=======
import { useState } from "react";
import { Link } from "react-router-dom";



const Footer = () => {

    const [on, setOn] = useState(true);

    const toggleFamily = () => {
        setOn(!on);
    }
    return (
        <footer className="footer">
            <div className="inner">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="" />
                </div>
                <div className="center">
                    <ul className="f_banner">
                        <li>개인정보처리방침</li>
                        <li>이메일무단수집거부</li>
                        <li>이용약관</li>
                    </ul>
                    <address>
                        <span>대표자:박식순</span>
                        <span>사업자등록번호 : 365-85-01709</span>
                        <span>대표번호 : 031-642-6111</span>
                        <span>주소 : 경기도 이천시 장호원읍 서동대로 8798-50</span>


                        <div className="copy">
                            &copy; 2022 KSWALLCOVERINGS ALL Rights Reserved. Created by masstige
                        </div>
                    </address>
                </div>
                <div className="right">
                    <div className="famliy">
                        <button onClick={toggleFamily}><span>패밀리사이트</span><i className="xi-plus"></i></button>
                        <div className={`famliy_wrap ${on ? 'on' : ''}`}>
                            <div className="f_box">
                                <strong>패밀리사이트</strong>
                                <p>KS벽지 패밀리 사이트를 소개합니다.<br />
                                    아래계열사를 선택하시면 해당 홈페이지로 이동합니다.</p>
                                <div className="link_box">
                                    <Link to='/'>KS더블유</Link>
                                    <Link to='/'>제일벽지</Link>
                                    <Link to='/'>케이엔피이노텍</Link>
                                    <Link to='/'>코스모스벽지</Link>
                                    <Link to='/'>케이엔피물류</Link>
                                </div>
                                <i className="xi-close" onClick={toggleFamily}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

>>>>>>> 71274d17d50e357c313904cbb8bd416b1fcb7a5b
export default Footer;
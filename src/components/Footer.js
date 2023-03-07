const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner">
                <div className="lfet">
                    <img src={process.env.PUBLIC_URL + `/img/logo-footer.png`} alt="" />
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
                        <span>주소 : 경기도 이천시 장호원읍 서동대로 8798-50</span>
                        <span>대표번호 : 031-642-6111</span>
                    </address>
                    <div className="copy">
                        &copy; 2022 KSWALLCOVERINGS ALL Rights Reserved. Created by masstige
                    </div>
                </div>
                <div className="right">
                    <ul className="famliy">
                        <li>패밀리사이트

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
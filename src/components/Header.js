import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Header = ({ Nav }) => {
    const [on, setOn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setOn(true);
            } else {
                setOn(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`header${on ? ' on' : ''}`}>
                <div className="inner">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="" />
                        </Link>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            {
                                Nav.map((it, idx) => (
                                    <li key={idx}>
                                        <Link to={it.Lik}>{it.NavTitle}</Link>

                                        <ul className="drop_menu">
                                            {
                                                it.Submenu.map((sub, idx) => (
                                                    <li key={idx}>
                                                        <Link to={sub.Lik}>{sub.Title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
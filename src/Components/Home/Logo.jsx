import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/img1.png";
import logoDark from "../../assets/logo-bg-removed.png";

const Logo = ({ isDark }) => {
    return (
        <>
            <Link
                rel="canonical"
                to={"/"}
                className={`${isDark? 'w-36 h-24':'w-36 h-22'}`}
            >
                <img
                    src={isDark ? logoDark:img1}
                    className={`w-full h-full`}
                    alt="logo"
                />
            </Link>
        </>
    )
}

export default Logo
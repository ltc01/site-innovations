import React from "react";
import { Link } from "react-router-dom";

import AppStorePng from "../../assets/Images/Stores/AppStoreDark.png";
import PlayStorePng from "../../assets/Images/PlayStore.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FooterBottom = () => {
    return (
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
                <Link to={"https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"} className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500">
                    <FaFacebook className=" min-w-6 text-xl aspect-square" /> <span className="hidden md:inline-block">Facebook</span>
                </Link>
                <Link
                    to={"https://twitter.com/BAOIAM1"}
                    target="_blank"
                    className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
                >
                    <FaSquareXTwitter className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">Twitter</span>
                </Link>
                <Link
                    to={"https://www.instagram.com/baoiam_innovations/"}
                    target="_blank"
                    className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
                >
                    <FaInstagram className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">Instagram</span>
                </Link>
                <Link
                    to={
                        "https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
                    }
                    target="_blank"
                    className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
                >
                    <FaLinkedin className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">LinkedIn</span>
                </Link>

            </div>

            {/* Play Store & App Store */}
            <div className="flex space-x-4">
                {/* <div className=""> */}
                <Link to="#" className="">
                    <img
                        src={AppStorePng}
                        className="object-cover max-h-8"
                        alt="AppStore"
                    />
                </Link>
                <Link to="#" className="">
                    <img
                        src={PlayStorePng}
                        className="object-cover max-h-8"
                        alt="PlayStore"
                    />
                </Link>
                {/* </div> */}
            </div>
        </div>
    );
};

export default FooterBottom;

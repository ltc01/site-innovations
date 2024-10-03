import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <div className={"col-span-2 md:col-span-1"}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li className="mb-2" key={index}>
            <Link to={link.to} className="hover:underline flex items-start gap-1">
            {link.icon || <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" /> }
            <span className="">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

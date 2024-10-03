import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links, hiddenOnSmall }) => {
  return (
    <div className={`${hiddenOnSmall ? "hidden lg:block" : "col-span-2 md:col-span-1"}`}>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li className="mb-2" key={index}>
            <Link to={link.to} className="hover:underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

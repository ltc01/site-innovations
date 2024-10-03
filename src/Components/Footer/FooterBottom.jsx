import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
      {/* Social Links */}
      <div className="flex space-x-4 mb-4 md:mb-0">
        <Link to="/facebook" className="hover:text-gray-400">
          Facebook
        </Link>
        <Link to="/twitter" className="hover:text-gray-400">
          Twitter
        </Link>
        <Link to="/instagram" className="hover:text-gray-400">
          Instagram
        </Link>
        <Link to="/linkedin" className="hover:text-gray-400">
          LinkedIn
        </Link>
      </div>

      {/* Play Store & App Store */}
      <div className="flex space-x-4">
        <Link to="/playstore">
          <img
            src="playstore-url-here"
            alt="Play Store"
            className="w-32"
          />
        </Link>
        <Link to="/appstore">
          <img
            src="appstore-url-here"
            alt="App Store"
            className="w-32"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;

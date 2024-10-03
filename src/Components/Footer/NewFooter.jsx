import React from "react";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <Logo />

          {/* Links section */}
          <FooterLinks title="Quick Links" links={[
              { name: "Home", to: "/home" },
              { name: "About Us", to: "/about" },
              { name: "Services", to: "/services" },
              { name: "Contact Us", to: "/contact" }
            ]}
          />

          <FooterLinks title="Resources" links={[
              { name: "Blog", to: "/blog" },
              { name: "FAQ", to: "/faq" },
              { name: "Terms of Service", to: "/terms" },
              { name: "Privacy Policy", to: "/privacy" }
            ]}
          />

          {/* These sections only appear on large screens */}
          <FooterLinks
            title="Company"
            links={[
              { name: "Our Team", to: "/team" },
              { name: "Careers", to: "/careers" }
            ]}
            hiddenOnSmall
          />

          <FooterLinks
            title="Support"
            links={[
              { name: "Help Center", to: "/support" },
              { name: "Contact Support", to: "/contact-support" }
            ]}
            hiddenOnSmall
          />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

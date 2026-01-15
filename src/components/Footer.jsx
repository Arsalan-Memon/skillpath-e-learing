import React from "react";
import { contactInfo, footerLists, socialIcons } from "../data/data";

const Footer = () => {
  return (
    <footer className="pt-14 pb-5 bg-white">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <div>
              <img
                src="../src/assets/logo.png"
                alt="footer-logo"
                width={150}
                height={50}
              />
            </div>
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a
                  href=""
                  key={item.id}
                  className="flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors"
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {footerLists.map((item) => (
            <div key={item.id} className="space-y-3">
              <p className="text-lg font-semibold">{item.title}</p>
              <ul className="space-y-2.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-orange-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-lg font-semibold">Social Profiles</p>
            <div className="flex mt-5 gap-3">
              {socialIcons.map((icon) => (
                <button className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-colors">
                  <a href="">{<icon.icon />}</a>
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-center lg:mt-15 border-t border-t-white-95 pt-5 ">
          © 2026 Skillbridge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "../assets/footerData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container  mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-6">
          {/* Footer Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 px-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-300">Quick Links</h2>
            <div className="grid grid-cols-2 gap-y-2">
              {FOOTER_LINKS.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2 text-gray-300">{section.title}</h3>
                  <ul className="text-gray-400">
                    {section.links.map((link, idx) => (
                      <li key={idx} className="mb-1">
                        <a
                          href={`/${link.toLowerCase().replace(" ", "-")}`}
                          className="text-gray-400 hover:text-white transition-colors duration-300 block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 px-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-300">{FOOTER_CONTACT_INFO.title}</h2>
            <ul className="text-gray-400">
              {FOOTER_CONTACT_INFO.links.map((info, index) => (
                <li key={index} className="mb-2 text-center">
                  <span className="font-semibold text-gray-300">{info.label}: </span>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 px-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-300">{SOCIALS.title}</h2>
            <ul className="flex justify-center space-x-4">
              {SOCIALS.links.map((social, index) => (
                <li key={index}>
                  <a href="#" className="block w-8 h-8 bg-white rounded-full p-1 hover:bg-gray-200">
                    <img src={social} alt={`${social.replace('./', '')} Icon`} className="w-full h-full object-cover" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

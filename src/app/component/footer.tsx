import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="body-font w-full bg-[#2A254B] text-[#FFFFFF]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:text-left text-center order-first gap-2">
            {/* Menu Column */}
            <div className="lg:w-1/4 md:w-1/3 w-full px-4">
              <h2 className="font-medium tracking-widest text-lg mb-3">Menu</h2>
              <nav className="list-none mb-10 space-y-2">
                <li><a className="hover:text-gray-400">New arrivals</a></li>
                <li><a className="hover:text-gray-400">Recently viewed</a></li>
                <li><a className="hover:text-gray-400">Popular this week</a></li>
                <li><a className="hover:text-gray-400">All products</a></li>
              </nav>
            </div>

            {/* Categories Column */}
            <div className="lg:w-1/4 md:w-1/3 w-full px-4">
              <h2 className="font-medium tracking-widest text-lg mb-3">Categories</h2>
              <nav className="list-none mb-10 space-y-2">
                <li><a className="hover:text-gray-400">Furniture</a></li>
                <li><a className="hover:text-gray-400">Homeware</a></li>
                <li><a className="hover:text-gray-400">Plant pots</a></li>
                <li><a className="hover:text-gray-400">Chairs</a></li>
                <li><a className="hover:text-gray-400">Crockery</a></li>
              </nav>
            </div>

            {/* Company Column */}
            <div className="lg:w-1/4 md:w-1/3 w-full px-4">
              <h2 className="font-medium tracking-widest text-lg mb-3">Our Company</h2>
              <nav className="list-none mb-10 space-y-2">
                <li><a className="hover:text-gray-400">About us</a></li>
                <li><a className="hover:text-gray-400">Vacancies</a></li>
                <li><a className="hover:text-gray-400">Contact us</a></li>
                <li><a className="hover:text-gray-400">Privacy</a></li>
                <li><a className="hover:text-gray-400">Returns policy</a></li>
              </nav>
            </div>

            {/* Mailing List Column (Right side) */}
            <div className="lg:w-1/2 md:w-full w-full px-4">
              <h2 className="font-medium tracking-widest text-lg mb-3 font-[Clash Display] lg:ml-10">Join Our Mailing List</h2>
              <div className="flex flex-wrap justify-center space-x-2">
                <input
                  type="email"
                  placeholder="shahzaibrajput240@email.com"
                  className="w-full sm:w-96  p-3 text-lg bg-[#dedbdb] mb-2 sm:mb-0 md:w-full lg:w-80" // Ensuring full width on mobile
                  style={{ height: '50px' }}
                />
                <button className="bg-[#FAFAFA] text-[#2A254B] w-full sm:w-[90px] p-3 sm:p-1 hover:bg-[#dedbdb] sm:mt-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-[#2A254B] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm sm:ml-10">© Copyright 2025 Shahzaib_Rajput</p>
            <div className="flex space-x-4 text-2xl sm:mr-10 sm:space-x-2 ">
              <a href="https://www.facebook.com/share/18LnPDuf1b/" className="hover:text-gray-400"><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/shahzaibrajput240?igsh=MWV5NzQ2bmJieHF3dg==" className="hover:text-gray-400"><RiInstagramLine /></a>
              <a href="https://join.skype.com/invite/pvnrR0hGQdGS" className="hover:text-gray-400"><SlSocialSkype /></a>
              <a href="@ShahzaibRa96024" className="hover:text-gray-400"><SlSocialTwitter /></a>
              <a href="https://www.linkedin.com/in/shahzaib-rajput-93360628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-400"><FaLinkedin /></a>
              <a href="https://pin.it/2C3p5AuQq" className="hover:text-gray-400"><SlSocialPintarest /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

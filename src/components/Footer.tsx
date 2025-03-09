import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="grid grid-cols-3 bg-gradient-to-r from-cvdsa-red-200 via-cvdsa-orange-100 via-10% to-cvdsa-purple-100 text-white">
      <div className="col-span-2 mb-4 mt-4 pl-4">
        <p>Subscribe to our Newsletter!</p>
        <div className="mt-2 flex items-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScp2vI1qp2TY2f7dkbMfajwCw87RrSyBeHAgDQGOa-4E7NfgQ/viewform"
            target="_blank"
            className="rounded-2xl bg-white px-4 py-2 text-black hover:scale-105"
          >
            Subscribe!
          </Link>
        </div>
      </div>
      <div className="mr-4 mt-2 text-right text-sm">
        <p>27 King's College Cir, Toronto,</p>
        <p> ON M5S 1A1</p>
        <div className="flex justify-end gap-3 md:mt-2">
          <Link
            href="https://www.instagram.com/cvdsa.uoft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="hover:scale-105"
          >
            <IoLogoInstagram className="text-4xl" />
          </Link>
          <Link
            href="mailto:cvdsa.uoft@gmail.com"
            target="_blank"
            className="hover:scale-105"
          >
            <IoMailOutline className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

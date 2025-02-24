import { Mail } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-cols-3 bg-gradient-to-r from-cvdsa-red-200 via-cvdsa-orange-100 via-10% to-cvdsa-purple-100 text-white">
      <div className="col-span-2 mb-4 mt-4 pl-4">
        <p>Subscribe to our Newsletter!</p>
        <div className="mt-2 flex items-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScp2vI1qp2TY2f7dkbMfajwCw87RrSyBeHAgDQGOa-4E7NfgQ/viewform"
            className="rounded-2xl bg-white px-4 py-2 text-black"
          >
            Subscribe!
          </Link>
        </div>
      </div>
      <div className="mr-4 mt-2 text-right text-sm">
        <p>27 King's College Cir, Toronto,</p>
        <p> ON M5S 1A1</p>
        <div className="mt-2 flex justify-end gap-3">
          <Link href="https://www.instagram.com/cvdsa.uoft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="mailto:cvdsa.uoft@gmail.com">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

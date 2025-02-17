import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex bg-gradient-to-r from-cvdsa-red-200 via-cvdsa-orange-100 via-10%  to-cvdsa-purple-100 text-white">
      <div className="mb-4 pl-4 mt-4">
        <p className="">Subscribe to our Newsletter!</p>
        <div className="mt-2 flex items-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScp2vI1qp2TY2f7dkbMfajwCw87RrSyBeHAgDQGOa-4E7NfgQ/viewform" className="bg-white rounded-2xl px-4 py-2 text-black">
                Subscribe!
            </Link>
        </div>
      </div>
      <div className="text-right mt-2">
        <p className="text-sm">27 King's College Cir, Toronto, ON M5S 1A1</p>
      </div>
    </div>
  );
};

export default Footer;

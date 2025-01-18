import Link from "next/link";
const HomeButton = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link
        href="/"
        className="rounded-full border bg-gradient-to-r from-cvdsa-orange-100 to-cvdsa-purple-100 px-6 py-2 text-2xl font-bold text-white shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default HomeButton;

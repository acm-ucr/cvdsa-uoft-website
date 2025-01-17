import Link from "next/link";
const HomeButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="mt-[57vh] rounded-full border bg-gradient-to-r from-red-300 to-purple-300 px-6 py-2 text-3xl"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default HomeButton;

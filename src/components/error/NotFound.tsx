import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="py-9 text-4xl">
        Sorry, the page you were<br></br>
        looking for was not found!
      </p>
      <Link
        href="/"
        className="rounded-full border bg-gradient-to-r from-cvdsa-orange-100 to-cvdsa-purple-100 px-6 py-2 text-2xl font-medium text-white shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

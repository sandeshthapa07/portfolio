import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center h-screen w-full">
      <h3 className="text-3xl font-bold">Back to where you </h3>
      <Link
        href="/"
        className="text-green-700 text-4xl font-black underline uppercase"
      >
        belong
      </Link>
    </div>
  );
};

export default NotFound;

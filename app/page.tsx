export default async function Home() {
  return (
    <div className="content-wrapper flex justify-center items-center h-screen -mt-20 ">
      <div className="size-full px-6 flex justify-center items-center py-6 md:px-8 md:py-12 md:max-w-screen-sm">
        <div className="flex flex-row flex-wrap">
          <p className="text-gray-500">
            <span>Hi, there my name is </span>
            <button className="hover:underline text-black ">
              Sandesh Thapa
            </button>{" "}
            <span>
              , a <span className="text-black">Frontend Developer</span> ,
              writer , react, nextjs enthusiast based in Kathmandu , Nepal.
            </span>
            <span> I am currently working at </span>
            <a
              target="_blank"
              className="underline visited:text-red-400 p-1  text-green-700 "
              rel="noreferrer"
              href="https://aitc.ai/"
            >
              AITC international{" "}
            </a>
            {"   "}
            <span>as a Frontend Developer</span>
          </p>
        </div>
      </div>
    </div>
  );
}

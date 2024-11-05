export default function Home() {
  return (
    <div className="content-wrapper ">
      <div className="conten">
        {" "}
        <p
          style={{
            animationTimeline: "view()",
          }}
        >
          Hi, there my name is Sandesh Thapa, a frontend developer, writer ,
          react, nextjs enthusiast based in Kathmandu , Nepal.
        </p>
        <p>
          I am currently working at{" "}
          <a
            target="_blank"
            className="underline visited:text-red-400  text-green-700 "
            rel="noreferrer"
            href="https://aitc.ai/"
          >
             AITC international
          </a>{" "}
          as a Frontend Developer
        </p>
      </div>
    </div>
  );
}

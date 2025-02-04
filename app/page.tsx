export default async function Home() {
  return (
    <div className='content-wrapper relative -mt-20 flex h-screen items-center justify-center'>
      <div className='flex flex-col gap-1 md:max-w-screen-sm'>
        <h1 className='text-lg font-medium'> Hello, I’m Sandesh Thapa</h1>

        <p>
          I give <span className='text-green-500'>life</span> and <span className='text-red-500'>emotion</span> to the
          design{' '}
        </p>
      </div>
    </div>
  );
}

{
  /* <div className='flex flex-row flex-wrap'>
          <p className='text-gray-500'>
            <span>Hi, my name is </span>
            <button className='group relative text-black hover:underline'>
              Sandesh Thapa
              <div className='absolute -top-1/2 left-1/2 -mt-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100'>
                <Image src='/main.jpeg' alt='Hi' width={100} height={100} className='rounded-2xl' />
              </div>
            </button>{' '}
            <span>
              , a <span className='text-black'>Frontend Developer</span> , writer , react, nextjs enthusiast based in
              Kathmandu , Nepal.
            </span>
            <span> I am currently working at </span>
            <a
              target='_blank'
              className='p-1 text-green-700 underline visited:text-red-400'
              rel='noreferrer'
              href='https://aitc.ai/'
            >
              AITC international{' '}
            </a>
            {'   '}
            <span>as a Frontend Developer.</span>
          </p>
        </div> */
}

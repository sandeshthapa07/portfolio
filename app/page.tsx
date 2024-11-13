import ThemeChanger from './ThemeChanger';

export default async function Home() {
  return (
    <div className='content-wrapper relative -mt-20 flex h-screen items-center justify-center'>
      <div className='flex size-full items-center justify-center px-6 py-6 md:max-w-screen-sm md:px-8 md:py-12'>
        <div className='flex flex-row flex-wrap'>
          <p className='text-gray-500'>
            <span>Hi, there my name is </span>
            <button className='text-black hover:underline'>Sandesh Thapa</button>{' '}
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
            <span>as a Frontend Developer</span>
            <ThemeChanger />
          </p>
        </div>
      </div>
    </div>
  );
}

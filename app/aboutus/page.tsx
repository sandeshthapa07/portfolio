import Signature from './Signature';

const Page = () => {
  return (
    <section className='aboutme flex flex-col gap-4'>
      <div>
        <h1>Sandesh Thapa </h1>
        <p>
          I am a Frontend Developer based on Kathmandu, Nepal. I am currently working at AITC international as a
          Frontend Developer where i focus on crafting beautiful websites,interfaces and web applications.{' '}
        </p>
        <p>
          In recent years, I&apos;ve been fully committed to perfecting my craft, driven by a firm belief that passion
          and perseverance lead to great things.
        </p>
        <p>
          I&apos;m eager to collaborate with early-stage startups and founders looking to define their visual design,
          particularly for marketing websites or product UI. If that sounds like you, let’s connect and chat about your
          project.
        </p>
      </div>
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL} `}
        className='btn flex w-fit flex-row items-center rounded-full bg-primary px-4 py-2 text-sm text-background hover:bg-primary/90'
        target='_blank'
        rel='noopener noreferrer'
      >
        Send Email{' '}
      </a>
      <Signature />

      <p className='text-sm font-thin text-primary'>Your Developer </p>
      <a href='https://x.com/sandeslambu' target='_blank'>
        @sandeslambu{' '}
      </a>
    </section>
  );
};

export default Page;

import { MdOutlineIosShare } from 'react-icons/md';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className='flex flex-col gap-4 p-4'>
      <div className='flex justify-between space-x-4'>
        <div>
          <h1 className='text-lg font-semibold'>On developer experience</h1>
          <div className='mt-2 flex items-center space-x-2'>
            <span className='text-sm text-primary/70'>11/08/2023</span>
            <span className='text-sm text-primary/70'> 200 views</span>
          </div>
        </div>
        <button className='h-fit rounded-full bg-primary/10 p-2'>
          <MdOutlineIosShare className='text-primary' />
        </button>
      </div>

      {children}
    </article>
  );
};

export default layout;

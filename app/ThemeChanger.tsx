'use client';

import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className='error here flex gap-4'>
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
};

export default ThemeChanger;

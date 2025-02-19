// [!code ++]
import type { BundledLanguage, BundledTheme } from 'shiki';
import { codeToHtml } from 'shiki';

import CopyToClipboard from '../CopyToClipboard';

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};
export default async function Code({ code, lang = 'javascript', filename }: Readonly<Props>) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: 'vitesse-light',
      dark: 'github-dark',
    },
  });

  return (
    <div className='my-4 max-w-xl rounded-lg border border-neutral-700'>
      <div className='rounded-lg'>
        <div className='flex items-center justify-between py-2 pl-2 pr-4 text-sm'>
          <span className=''>{filename}</span>
          <CopyToClipboard code={code} />
        </div>
        <div className='code-data overflow-x-auto' dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}

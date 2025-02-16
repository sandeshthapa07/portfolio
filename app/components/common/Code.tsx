import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';
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
export default async function Code({ code, lang = 'javascript', theme = 'nord', filename }: Readonly<Props>) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });

  return (
    <div className='my-4 max-w-xl rounded-lg border border-neutral-700'>
      <div className='rounded-lg'>
        <div className='flex items-center justify-between py-2 pl-2 pr-4 text-sm'>
          <span className=''>{filename}</span>
          <CopyToClipboard code={code} />
        </div>
        <div
          className='border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full'
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}

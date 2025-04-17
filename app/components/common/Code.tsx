// [!code ++]
import type { BundledLanguage, BundledTheme } from 'shiki';
import { codeToHtml } from 'shiki';

import CopyToClipboard from '../CopyToClipboard';

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
  parent?: boolean;
};
export default async function Code({ code, lang = 'javascript', filename, parent }: Readonly<Props>) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  if (parent) {
    return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
  }

  return (
    <div className='codehighlighter relative my-4 w-full rounded-lg border border-border'>
      <CopyToClipboard code={code} />

      <figure
        className='code-data relative w-full'
        data-filename={filename}
        dangerouslySetInnerHTML={{ __html: html }}
      ></figure>
    </div>
  );
}

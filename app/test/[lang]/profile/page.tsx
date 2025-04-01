import { use } from 'react';

export type Props = {
  params: Promise<{ lang: string }>;
};

const page = ({ params }: Props) => {
  const { lang } = use(params);
  console.log(lang, 'inside profile');
  return <div>page</div>;
};

export default page;

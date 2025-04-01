import { use } from 'react';

export type Props = {
  params: Promise<{ lang: string; id: string }>;
};

const page = ({ params }: Props) => {
  const { lang, id } = use(params);
  console.log(lang, id, 'inside profile id');
  return <div>page</div>;
};

export default page;

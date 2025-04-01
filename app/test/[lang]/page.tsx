const page = async ({ params }: { params: Promise<{ lang: 'en' | 'np' }> }) => {
  const lang = (await params).lang;
  console.log(lang, 'lang');
  return <div>page</div>;
};

export default page;

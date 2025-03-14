import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const cookiess = await cookies();

  if (cookiess.get('theme')?.value) return;

  const prefersColorScheme = req.headers.get('Sec-CH-Prefers-Color-Scheme');

  if (prefersColorScheme) {
    console.log('prefersColorScheme', prefersColorScheme);
    (await cookies()).set('theme', prefersColorScheme, { path: '/', httpOnly: false });
  }

  return NextResponse?.redirect(req.nextUrl, {
    headers: {
      'Set-Cookie': `sessionid=${prefersColorScheme}`,
    },
  });
  // return NextResponse.redirect(req.url);
}

// export function middleware(request: NextRequest) {
//   console.log('sanmdes');
//   return NextResponse.redirect(new URL('/home', request.url));
// }

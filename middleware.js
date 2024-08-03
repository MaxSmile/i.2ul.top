// middleware.js
import { NextResponse } from 'next/server';

const redirects = [];

export default function middleware(request /*: NextRequest */) {


    const { pathname, origin, search } = request.nextUrl;
    // const redirectUrl = redirects[pathname.toLocaleLowerCase()];
    // //console.log("redirectUrl", redirectUrl, pathname);
    // if (redirectUrl) { 
    //   return NextResponse.redirect(new URL(redirectUrl, origin).toString(), 301);
    // } 
  
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);
    requestHeaders.set('x-url', request.url);
    requestHeaders.set('x-search', search);
    console.log("requestHeaders", requestHeaders);
    return NextResponse.next({
      request: {
          headers: requestHeaders,
      }
  });
}

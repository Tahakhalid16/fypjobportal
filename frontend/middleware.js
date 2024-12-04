// // middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const token = request.localStorage.get('jwt_token');

//   // Redirect to login if the token is missing
//   if (!token) {
//     return NextResponse.redirect(new URL('/signin', request.url));
//   }

//   return NextResponse.next(); // Continue to the requested page
// }

// export const config = {
//   matcher: ['/company/:path*'], // Apply middleware only to `/company` routes
// };


// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("🔄 Middleware dey run on:", req.nextUrl.pathname);
  // const token = req.cookies.get("token"); // check cookie

  // // If no token, redirect away
  // if (!token) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  // return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!_next|favicon.ico|auth).*)"],
// };

import { NextResponse } from "next/server";

import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(_req: NextRequest, _ev: NextFetchEvent) {
   const response = NextResponse.next();

   response.headers.set("Referrer-Policy", "origin-when-cross-origin");
   response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
   response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
   response.headers.set("X-Frame-Options", "DENY");
   response.headers.set("X-Content-Type-Options", "nosniff");
   response.headers.set("X-DNS-Prefetch-Control", "on");

   return response;
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language") ?? "";
  // Pick Arabic only if it is clearly preferred; otherwise default to English.
  const preferred = accept
    .split(",")
    .map((part) => part.trim().split(";")[0].toLowerCase());
  for (const lang of preferred) {
    if (lang.startsWith("ar")) return "ar";
    if (lang.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Run on everything except Next internals and static assets.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};

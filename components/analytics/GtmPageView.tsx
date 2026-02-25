"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GtmPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasMounted = useRef(false);
  const search = searchParams.toString();

  useEffect(() => {
    if (!pathname) return;

    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

export default GtmPageView;

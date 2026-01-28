"use client";

import { Provider } from "./provider";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}


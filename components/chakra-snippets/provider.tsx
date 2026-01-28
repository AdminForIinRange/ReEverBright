// components/chakra-snippets/provider.tsx
"use client";

import { useEmotionCache } from "@chakra-ui/next-js/use-emotion-cache";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { system } from "./theme";

export function Provider({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  return (
    <CacheProvider value={cache}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

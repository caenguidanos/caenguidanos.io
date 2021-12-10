import * as NextImage from "next/image";
import { inspect } from "@xstate/inspect";

import { worker } from "../src/lib/shared/config/msw/lib/browser.msw";

// Styles
import "../src/lib/client/shared/styles/index.scss";

export const decorators = [];

// Mock Service Worker
if (typeof window !== "undefined") {
   worker.start();
   decorators.push((story: any) => {
      worker.resetHandlers();
      return <>{story()}</>;
   });
}

// XState
if (typeof window !== "undefined") {
   inspect({ iframe: false, url: "https://stately.ai/viz?inspect" });
}

// Next Image
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props: any) => <OriginalNextImage {...props} unoptimized />
});

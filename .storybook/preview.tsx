import * as NextImage from "next/image";

import { worker } from "../src/config/msw/browser.msw";

// Styles
import "../src/lib/client/shared/styles/lib/globals.scss";

export const decorators = [];

// Mock Service Worker
if (typeof window !== "undefined") {
   worker.start();
   decorators.push((story: any) => {
      worker.resetHandlers();
      return <>{story()}</>;
   });
}

// Next Image
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props: any) => <OriginalNextImage {...props} unoptimized />
});

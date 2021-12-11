import * as NextImage from "next/image";

import { worker } from "../config/tests/msw/browser.msw";

import "../styles/index.scss";

export const decorators = [];

// Next Image
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props: any) => <OriginalNextImage {...props} unoptimized />
});

// Mock Service Worker
if (typeof window !== "undefined") {
   worker.start();
   decorators.push((story: any) => {
      worker.resetHandlers();
      return <>{story()}</>;
   });
}

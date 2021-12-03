import * as NextImage from "next/image";

import "../src/lib/client/shared/styles/globals.scss";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props) => <OriginalNextImage {...props} unoptimized />
});

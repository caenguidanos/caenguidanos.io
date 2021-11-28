import * as NextImage from "next/image";

import "../src/styles/globals.scss";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props) => <OriginalNextImage {...props} unoptimized />
});

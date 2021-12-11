import { keyframes, styled } from "$stitches";

import { Color, Size } from "../../shared";

const SpinnerRotate = keyframes({
   "0%": { transform: "rotate(0deg)" },
   "100%": { transform: "rotate(360deg)" }
});

export const Spinner = styled("span", {
   display: "block",
   userSelect: "none",

   borderStyle: "solid",
   borderRadius: "50%",

   animationName: `${SpinnerRotate}`,
   animationDuration: "700ms",
   animationTimingFunction: "linear",
   animationIterationCount: "infinite",

   pointerEvents: "none",

   variants: {
      color: {
         [Color.Default]: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral900"
         },
         [Color.Primary]: {
            borderColor: "$blue700",
            borderLeftColor: "$blue300"
         },
         [Color.Disable]: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral500"
         }
      },
      size: {
         [Size.Sm]: {
            width: "$4",
            height: "$4",
            borderWidth: "$px",
            my: "2px"
         },
         [Size.Base]: {
            width: "$5",
            height: "$5",
            borderWidth: "2px",
            my: "2px"
         },
         [Size.Md]: {
            width: "$6",
            height: "$6",
            borderWidth: "$2px",
            my: "2px"
         }
      }
   },
   defaultVariants: {
      color: Color.Default,
      size: Size.Base
   }
});

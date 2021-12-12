import { keyframes, styled } from "$caenguidanos.io/stitches";

import { ThemeColor, ThemeSize } from "../../entity/theme/shared-simple-ui-entity-theme";

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
         [ThemeColor.Default]: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral900"
         },
         [ThemeColor.Primary]: {
            borderColor: "$blue700",
            borderLeftColor: "$blue300"
         },
         [ThemeColor.Disable]: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral500"
         }
      },
      size: {
         [ThemeSize.Sm]: {
            width: "$4",
            height: "$4",
            borderWidth: "$px",
            my: "2px"
         },
         [ThemeSize.Base]: {
            width: "$5",
            height: "$5",
            borderWidth: "2px",
            my: "2px"
         },
         [ThemeSize.Md]: {
            width: "$6",
            height: "$6",
            borderWidth: "$2px",
            my: "2px"
         }
      }
   },
   defaultVariants: {
      color: ThemeColor.Default,
      size: ThemeSize.Base
   }
});

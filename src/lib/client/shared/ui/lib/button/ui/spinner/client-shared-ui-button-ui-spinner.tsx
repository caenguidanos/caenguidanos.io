import { keyframes, styled } from "../../../../stitches.config";

const buttonSpinnerRotate = keyframes({
   "0%": { transform: "rotate(0deg)" },
   "100%": { transform: "rotate(360deg)" }
});

export const ButtonSpinner = styled("span", {
   display: "block",
   userSelect: "none",

   borderStyle: "solid",
   borderRadius: "50%",

   animationName: `${buttonSpinnerRotate}`,
   animationDuration: "700ms",
   animationTimingFunction: "linear",
   animationIterationCount: "infinite",

   pointerEvents: "none",

   variants: {
      color: {
         default: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral900"
         },
         primary: {
            borderColor: "$blue700",
            borderLeftColor: "$blue300"
         },
         muted: {
            borderColor: "$neutral300",
            borderLeftColor: "$neutral500"
         }
      },
      size: {
         sm: {
            width: "$4",
            height: "$4",
            borderWidth: "$px",
            my: "2px"
         },
         base: {
            width: "$5",
            height: "$5",
            borderWidth: "2px",
            my: "2px"
         },
         md: {
            width: "$6",
            height: "$6",
            borderWidth: "$2px",
            my: "2px"
         }
      }
   },
   defaultVariants: {
      color: "default",
      size: "base"
   }
});

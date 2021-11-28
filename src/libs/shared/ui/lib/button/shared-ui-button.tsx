import { styled, keyframes } from "../../stitches.config";

import type { ButtonProps } from "./shared-ui-button.entity";

const rotate = keyframes({
   "0%": { transform: "rotate(0deg)" },
   "100%": { transform: "rotate(360deg)" }
});

const ButtonPrimitive = styled("button", {
   userSelect: "none",
   borderRadius: "$xs",
   fontFamily: "$sans",
   width: "100%",

   variants: {
      status: {
         normal: {
            display: "block"
         },
         disabled: {
            display: "block",
            cursor: "not-allowed"
         },
         loading: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "wait"
         }
      },
      color: {
         default: {
            backgroundColor: "$white",
            color: "$neutral900",
            border: "1px solid $neutral900",
            "&:hover": {
               backgroundColor: "$neutral100"
            },
            "&:active": {
               backgroundColor: "$neutral200"
            }
         },
         primary: {
            backgroundColor: "$primary",
            color: "$white",
            border: "1px solid transparent",
            "&:hover": {
               backgroundColor: "$blue500"
            },
            "&:active": {
               backgroundColor: "$blue600"
            }
         },
         muted: {
            backgroundColor: "$neutral200",
            color: "$neutral400",
            border: "1px solid transparent"
         }
      },
      size: {
         sm: {
            fontSize: "$sm",
            fontWeight: "$medium",
            lineHeight: "$sm",
            px: "$2",
            py: "$1"
         },
         base: {
            fontSize: "$base",
            fontWeight: "$medium",
            lineHeight: "$base",
            px: "$3",
            py: "$1"
         },
         md: {
            fontSize: "$lg",
            fontWeight: "$medium",
            lineHeight: "$lg",
            px: "$3",
            py: "$1"
         }
      }
   },
   defaultVariants: {
      color: "default",
      size: "base"
   }
});

const ButtonSpinnerPrimitive = styled("span", {
   display: "block",
   userSelect: "none",

   borderStyle: "solid",
   borderRadius: "50%",

   animationName: `${rotate}`,
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

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   const isLoading: boolean = props.load === true;
   const isDisabled: boolean = props.disabled === true;

   const buttonMuted = isDisabled || isLoading;
   const buttonOnClick = buttonMuted ? undefined : props.onClick;
   const buttonStatus = isLoading ? "loading" : isDisabled ? "disabled" : "normal";
   const buttonType = props.type ?? "button";
   const buttonColor = isDisabled ? "muted" : props.color;
   const buttonChildren = isLoading ? (
      <ButtonSpinnerPrimitive id={`${props.id}Spinner`} size={props.size} color={buttonColor} />
   ) : (
      props.children
   );

   return (
      <ButtonPrimitive
         id={props.id}
         type={buttonType}
         color={buttonColor}
         size={props.size}
         children={buttonChildren}
         onClick={buttonOnClick}
         disabled={buttonMuted}
         status={buttonStatus}
      />
   );
};

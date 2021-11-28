import { ButtonHTMLAttributes, ReactNode } from "react";

import { styled } from "../../stitches.config";

import type { ButtonProps } from "./shared-ui-button.entity";

const ButtonPrimitive = styled("button", {
   borderRadius: "$xs",
   fontFamily: "$sans",
   variants: {
      color: {
         primary: {
            backgroundColor: "$slate1",
            color: "$slate12",
            "&:hover": {
               backgroundColor: "$slate5"
            },
            "&:active": {
               backgroundColor: "$slate3"
            }
         },
         disabled: {
            backgroundColor: "$slate12",
            color: "$slate9",
            cursor: "not-allowed"
         },
         load: {
            backgroundColor: "$slate12",
            color: "$slate9",
            cursor: "wait"
         }
      },
      size: {
         md: {
            fontSize: "$base",
            fontWeight: "$light",
            lineHeight: "$base",
            px: "$3",
            py: "$1"
         }
      }
   },
   defaultVariants: {
      color: "primary",
      size: "md"
   }
});

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   const isLoading: boolean = props.load === true;
   const isDisabled: boolean = props.disabled === true;

   const buttonOnClick: ButtonProps["onClick"] = isDisabled || isLoading ? undefined : props.onClick;
   const buttonChildren: ReactNode = isLoading ? "Loading" : props.children;
   const buttonType: ButtonHTMLAttributes<HTMLButtonElement>["type"] = props.type ?? "button";
   const buttonColor: ButtonProps["color"] = isLoading
      ? "load"
      : isDisabled
      ? "disabled"
      : props.color;

   return (
      <ButtonPrimitive
         id={props.id}
         type={buttonType}
         color={buttonColor}
         size={props.size}
         children={buttonChildren}
         onClick={buttonOnClick}
         disabled={isDisabled}
      />
   );
};

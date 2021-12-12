import { useMemo } from "react";
import { styled } from "$caenguidanos.io/stitches";

import { ButtonProps, ButtonStatus } from "../../entity/button/shared-simple-ui-entity-button";
import { ThemeColor, ThemeSize } from "../../entity/theme/shared-simple-ui-entity-theme";
import { Spinner } from "../../ui/spinner/shared-simple-ui-spinner";

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   const isLoading: boolean = props.load === true;
   const isDisabled: boolean = props.disabled === true;

   const status: ButtonStatus = useMemo(() => {
      if (isLoading) {
         return ButtonStatus.Loading;
      }
      if (isDisabled) {
         return ButtonStatus.Disabled;
      }

      return ButtonStatus.Normal;
   }, [isLoading, isDisabled]);

   const color: ThemeColor = isDisabled ? ThemeColor.Disable : props.color;

   const onClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!isDisabled && !isLoading && props.onClick) {
         props.onClick(ev);
      }
   };

   return (
      <ButtonPrimitive
         id={props.id}
         color={color}
         onClick={onClick}
         size={props.size}
         type={props.type || "button"}
         disabled={isDisabled || isLoading}
         status={status}
      >
         {isLoading ? <Spinner id={`${props.id}Spinner`} size={props.size} color={color} /> : props.children}
      </ButtonPrimitive>
   );
};

const ButtonPrimitive = styled("button", {
   userSelect: "none",
   borderRadius: "$xs",
   fontFamily: "$sans",
   width: "100%",

   variants: {
      status: {
         [ButtonStatus.Normal]: {
            display: "block"
         },
         [ButtonStatus.Disabled]: {
            display: "block",
            cursor: "not-allowed"
         },
         [ButtonStatus.Loading]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "wait"
         }
      },
      color: {
         [ThemeColor.Default]: {
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
         [ThemeColor.Primary]: {
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
         [ThemeColor.Disable]: {
            backgroundColor: "$neutral200",
            color: "$neutral400",
            border: "1px solid transparent"
         }
      },
      size: {
         [ThemeSize.Sm]: {
            fontSize: "$sm",
            fontWeight: "$medium",
            lineHeight: "$sm",
            px: "$2",
            py: "$1"
         },
         [ThemeSize.Base]: {
            fontSize: "$base",
            fontWeight: "$medium",
            lineHeight: "$base",
            px: "$3",
            py: "$1"
         },
         [ThemeSize.Md]: {
            fontSize: "$lg",
            fontWeight: "$medium",
            lineHeight: "$lg",
            px: "$3",
            py: "$1"
         }
      }
   },
   defaultVariants: {
      color: ThemeColor.Default,
      size: ThemeSize.Base
   }
});

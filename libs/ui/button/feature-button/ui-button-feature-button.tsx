import { styled } from "$stitches";

import { Color, Size } from "../../shared";

import { useButton } from "../util-use-button/ui-button-util-use-button";
import { ButtonProps, ButtonStatus } from "../entity-button/client-shared-ui-button-entity-button";

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
         [Color.Default]: {
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
         [Color.Primary]: {
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
         [Color.Disable]: {
            backgroundColor: "$neutral200",
            color: "$neutral400",
            border: "1px solid transparent"
         }
      },
      size: {
         [Size.Sm]: {
            fontSize: "$sm",
            fontWeight: "$medium",
            lineHeight: "$sm",
            px: "$2",
            py: "$1"
         },
         [Size.Base]: {
            fontSize: "$base",
            fontWeight: "$medium",
            lineHeight: "$base",
            px: "$3",
            py: "$1"
         },
         [Size.Md]: {
            fontSize: "$lg",
            fontWeight: "$medium",
            lineHeight: "$lg",
            px: "$3",
            py: "$1"
         }
      }
   },
   defaultVariants: {
      color: Color.Default,
      size: Size.Base
   }
});

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   const args = useButton(props);

   return <ButtonPrimitive {...args} />;
};

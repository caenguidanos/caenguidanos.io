import { styled } from "../../../stitches.config";

import { useButton } from "../util/use-button/client-shared-ui-button-util-use-button";

import type { ButtonProps } from "../entity/client-shared-ui-button.entity";

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

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
   const { id, type, color, size, onClick, disabled, status, children } = useButton(props);

   return (
      <ButtonPrimitive
         id={id}
         type={type}
         color={color}
         size={size}
         onClick={onClick}
         disabled={disabled}
         status={status}
      >
         {children}
      </ButtonPrimitive>
   );
};

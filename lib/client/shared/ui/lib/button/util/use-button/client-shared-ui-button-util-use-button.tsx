import { PropsWithChildren } from "react";

import { ButtonProps } from "../../entity/client-shared-ui-button.entity";
import { ButtonSpinner } from "../../ui/spinner/client-shared-ui-button-ui-spinner";

export function useButton(props: PropsWithChildren<ButtonProps>) {
   const isLoading: boolean = props.load === true;
   const isDisabled: boolean = props.disabled === true;

   const buttonMuted = isDisabled || isLoading;
   const buttonOnClick = buttonMuted ? undefined : props.onClick;
   const buttonColor = isDisabled ? "muted" : props.color;

   const buttonStatus: "normal" | "disabled" | "loading" = isLoading ? "loading" : isDisabled ? "disabled" : "normal";

   const buttonChildren = isLoading ? (
      <ButtonSpinner id={`${props.id}Spinner`} size={props.size} color={buttonColor} />
   ) : (
      props.children
   );

   return {
      id: props.id,
      type: props.type ?? "button",
      color: buttonColor,
      size: props.size,
      onClick: buttonOnClick,
      disabled: buttonMuted,
      status: buttonStatus,
      children: buttonChildren
   };
}

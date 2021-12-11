import { PropsWithChildren, useCallback, useMemo } from "react";

import { Color } from "../../../shared";
import { Spinner } from "../../../spinner";

import { ButtonProps, ButtonStatus } from "../../entity/client-shared-ui-button-entity";

export function useButton({
   id,
   type = "button",
   load,
   disabled,
   size,
   children,
   ...rest
}: PropsWithChildren<ButtonProps>) {
   const isLoading: boolean = load === true;
   const isDisabled: boolean = disabled === true;

   const status: ButtonStatus = useMemo(() => {
      if (isLoading) {
         return ButtonStatus.Loading;
      }
      if (isDisabled) {
         return ButtonStatus.Disabled;
      }

      return ButtonStatus.Normal;
   }, [isLoading, isDisabled]);

   const color: Color = isDisabled ? Color.Disable : rest.color;

   const onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = useCallback(
      (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
         if (!isDisabled && !isLoading) {
            rest.onClick(ev);
         }
      },
      [isDisabled, isLoading, rest.onClick]
   );

   return {
      id,
      type,
      color,
      size,
      onClick,
      disabled: isDisabled || isLoading,
      status,
      children: isLoading ? <Spinner id={`${id}Spinner`} size={size} color={color} /> : children
   };
}

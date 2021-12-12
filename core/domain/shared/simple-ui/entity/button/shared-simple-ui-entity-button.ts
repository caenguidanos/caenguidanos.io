import { ButtonHTMLAttributes, DOMAttributes } from "react";

import { ThemeColor, ThemeSize } from "../theme/shared-simple-ui-entity-theme";

export interface ButtonProps {
   id: ButtonHTMLAttributes<HTMLButtonElement>["id"];
   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
   onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
   color?: ThemeColor;
   size?: ThemeSize;
   disabled?: boolean;
   load?: boolean;
}

export const enum ButtonStatus {
   Normal = "normal",
   Disabled = "disabled",
   Loading = "loading"
}

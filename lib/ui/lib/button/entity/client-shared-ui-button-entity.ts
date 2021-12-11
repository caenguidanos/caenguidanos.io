import { ButtonHTMLAttributes, DOMAttributes } from "react";

import { Color, Size } from "../../shared";

export interface ButtonProps {
   id: ButtonHTMLAttributes<HTMLButtonElement>["id"];
   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
   onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
   color?: Color;
   size?: Size;
   disabled?: boolean;
   load?: boolean;
}

export const enum ButtonStatus {
   Normal = "normal",
   Disabled = "disabled",
   Loading = "loading"
}

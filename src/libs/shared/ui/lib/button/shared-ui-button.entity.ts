import { ButtonHTMLAttributes, DOMAttributes } from "react";

export type ButtonColor = "default" | "primary" | "muted";
export type ButtonSize = "sm" | "base" | "md";

export interface ButtonProps {
   id: ButtonHTMLAttributes<HTMLButtonElement>["id"];
   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
   onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
   color?: ButtonColor;
   size?: ButtonSize;
   disabled?: boolean;
   load?: boolean;
}

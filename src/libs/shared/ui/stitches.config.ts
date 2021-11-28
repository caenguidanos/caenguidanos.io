import { createStitches } from "@stitches/react";
import { slateDark } from "@radix-ui/colors";

// import tailwindcss from "tailwindcss/defaultTheme";
// console.log(tailwindcss);

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
   createStitches({
      theme: {
         colors: {
            ...slateDark
         },
         space: {
            "0": "0px",
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "7": "1.75rem",
            "8": "2rem",
            "9": "2.25rem",
            "10": "2.5rem",
            "11": "2.75rem",
            "12": "3rem",
            "14": "3.5rem",
            "16": "4rem",
            "20": "5rem",
            "24": "6rem",
            "28": "7rem",
            "32": "8rem",
            "36": "9rem",
            "40": "10rem",
            "44": "11rem",
            "48": "12rem",
            "52": "13rem",
            "56": "14rem",
            "60": "15rem",
            "64": "16rem",
            "72": "18rem",
            "80": "20rem",
            "96": "24rem",
            "108": "28rem",
            "116": "32rem",
            "128": "36rem",
            "256": "44rem",
            "512": "60rem",
            px: "1px",
            "0.5": "0.125rem",
            "1.5": "0.375rem",
            "2.5": "0.625rem",
            "3.5": "0.875rem"
         },
         radii: {
            none: "0px",
            sm: "0.125rem",
            base: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
         },
         lineHeights: {
            xs: "1rem",
            sm: "1.25rem",
            base: "1.5rem",
            lg: "1.75rem",
            xl: "1.75rem",
            "2xl": "2rem",
            "3xl": "2.25rem",
            "4xl": "2.5rem",
            "5xl": "1rem",
            "6xl": "1rem",
            "7xl": "1rem",
            "8xl": "1rem",
            "9xl": "1rem"
         },
         fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
         },
         fontWeights: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900"
         },
         fonts: {
            sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
            mono: "'SF Mono', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
         },

         sizes: {
            "0": "0px",
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "7": "1.75rem",
            "8": "2rem",
            "9": "2.25rem",
            "10": "2.5rem",
            "11": "2.75rem",
            "12": "3rem",
            "14": "3.5rem",
            "16": "4rem",
            "20": "5rem",
            "24": "6rem",
            "28": "7rem",
            "32": "8rem",
            "36": "9rem",
            "40": "10rem",
            "44": "11rem",
            "48": "12rem",
            "52": "13rem",
            "56": "14rem",
            "60": "15rem",
            "64": "16rem",
            "72": "18rem",
            "80": "20rem",
            "96": "24rem",
            "108": "28rem",
            "116": "32rem",
            "128": "36rem",
            "256": "44rem",
            "512": "60rem",
            px: "1px",
            "0.5": "0.125rem",
            "1.5": "0.375rem",
            "2.5": "0.625rem",
            "3.5": "0.875rem"
         }
      },
      utils: {
         px: (space: string) => ({
            paddingLeft: space,
            paddingRight: space
         }),
         py: (space: string) => ({
            paddingTop: space,
            paddingBottom: space
         }),
         mx: (space: string) => ({
            marginLeft: space,
            marginRight: space
         }),
         my: (space: string) => ({
            marginTop: space,
            marginBottom: space
         })
      }
   });

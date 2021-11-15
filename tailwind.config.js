const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{ts,tsx,js,jsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: [...fontFamily.sans],
            serif: [...fontFamily.serif],
            mono: ["SF Mono", "JetBrains Mono", ...fontFamily.mono]
         },
         fontSize: {
            "3xs": ".58rem",
            "2xs": ".69rem",
            "10xl": "9rem"
         },
         spacing: {
            108: "28rem",
            116: "32rem",
            128: "36rem",
            256: "44rem",
            512: "60rem"
         }
      }
   },
   plugins: []
};

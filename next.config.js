/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   pageExtensions: ["page.tsx", "page.ts"],

   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         const preactAlias = {
            react: "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat"
         };

         config.resolve.alias = {
            ...config.resolve.alias,
            ...preactAlias
         };
      }

      return config;
   }
};

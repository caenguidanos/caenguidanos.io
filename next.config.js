/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   pageExtensions: ["page.tsx", "page.ts"],
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         const preactSustitution = {
            react: "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat"
         };

         Object.assign(config.resolve.alias, preactSustitution);
      }

      return config;
   }
};

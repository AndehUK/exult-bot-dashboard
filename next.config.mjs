/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/yWytr4XVt5",
        permanent: false,
      },
      {
        source: "/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=889185777555210281&permissions=8&scope=bot%20applications.commands",
        permanent: false,
      },
    ];
  },
};

export default config;

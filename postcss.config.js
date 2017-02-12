// https://coolors.co/d3d4d9-4b88a2-bb0a21-252627-fff9fb
// http://www.color-hex.com/color/d3d4d9
module.exports = (config) => [
    //require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#4a040d",
            colorPrimary: "#bb0a21",
            colorSecondaryDark: "#1e3640",
            colorSecondary: "#4b88a2",
            colorNeutralDark: "#545456",
            colorNeutral: "#d3d4d9",
            colorNeutralLight: "#fff9fb",
            colorText: "#252627",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]

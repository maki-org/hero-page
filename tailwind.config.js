/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cut-mule-87308980-figma-site-color-black-40":
          "var(--cut-mule-87308980-figma-site-color-black-40)",
        "cut-mule-87308980-figma-site-color-black-solid":
          "var(--cut-mule-87308980-figma-site-color-black-solid)",
        "cut-mule-87308980-figma-site-color-grey-15-80":
          "var(--cut-mule-87308980-figma-site-color-grey-15-80)",
        "cut-mule-87308980-figma-site-color-grey-4":
          "var(--cut-mule-87308980-figma-site-color-grey-4)",
        "cut-mule-87308980-figma-site-color-grey-98":
          "var(--cut-mule-87308980-figma-site-color-grey-98)",
        "cut-mule-87308980-figma-site-color-white-10":
          "var(--cut-mule-87308980-figma-site-color-white-10)",
        "cut-mule-87308980-figma-site-color-white-solid":
          "var(--cut-mule-87308980-figma-site-color-white-solid)",
      },
    },
  },
  plugins: [],
};

export default config;



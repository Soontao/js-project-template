import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: "error",
      "no-extra-semi": "off",
      "no-var": "error",
    },
    ignores: ["node_modules", "lib"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        NodeJS: true,
      },
    },
    plugins: { js },
    extends: ["js/recommended", "plugin:prettier/recommended"],
  },
  tseslint.configs.recommended,
]);

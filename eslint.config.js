import eslint from "@eslint/js";
import svelteEslint from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import tsEslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin-js";

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...svelteEslint.configs["flat/recommended"],
  {
    files: ["src/**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        chrome: true
      }
    },
    plugins: {
      "@stylistic/js": stylistic
    },
    rules: {
      "@stylistic/js/quotes": [
        "warn",
        "double",
        {
          allowTemplateLiterals: true,
          avoidEscape: true
        }
      ],
      "svelte/html-quotes": [
        "error",
        {
          prefer: "double",
          dynamic: {
            quoted: true,
            avoidInvalidUnquotedInHTML: true
          }
        }
      ]
    }
  }
];

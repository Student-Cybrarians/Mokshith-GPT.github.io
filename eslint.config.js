import js from '@eslint/js';
export default [js.configs.recommended,{files:['server/**/*.ts'],languageOptions:{parserOptions:{project:'./tsconfig.json'},globals:{process:'readonly',Buffer:'readonly',URL:'readonly',fetch:'readonly',AbortController:'readonly',setTimeout:'readonly',clearTimeout:'readonly',crypto:'readonly'}},rules:{'no-console':'off'}}];

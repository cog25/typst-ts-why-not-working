import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import typstTsPackage from './node_modules/@myriaddreamin/typst.ts/package.json' with { type: 'json' };

export default defineConfig({
  plugins: [solid()],
  define: {
    '__TYPST_TS_VERSION__': `"${typstTsPackage.version}"`
  }
})

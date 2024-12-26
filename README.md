```
Uncaught (in promise) Error: Renderer.MissingLayout: with []
    __wbg_new_70a2f23d1565c04c typst_ts_renderer.mjs:1767
    logError typst_ts_renderer.mjs:225
    __wbg_new_70a2f23d1565c04c typst_ts_renderer.mjs:1766
    svg_data typst_ts_renderer.mjs:1328
    pnpm @myriaddreamin_typst__ts_dist_cjs_renderer__cjs.js:1457
    withinOptionSession renderer.mts:974
    renderSvg renderer.mts:901
    svg index.tsx:30
    runWithSession renderer.mts:1005
    App index.tsx:29
    untrack dev.js:518
    onMount dev.js:543
    runComputation dev.js:802
    updateComputation dev.js:780
    runTop dev.js:897
    runUserEffects dev.js:1011
    completeUpdates dev.js:966
    runUpdates dev.js:914
    completeUpdates dev.js:966
    runUpdates dev.js:915
    createRoot dev.js:207
    render dev.js:563
    <anonymous> index.tsx:45
typst_ts_renderer.mjs:1767:20
```


## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

Learn more about deploying your application with the [documentations](https://vite.dev/guide/static-deploy.html)

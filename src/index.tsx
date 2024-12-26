/* @refresh reload */
import { render } from 'solid-js/web'

import { createTypstCompiler } from "@myriaddreamin/typst.ts/dist/esm/compiler"
import { onMount } from 'solid-js'
import { createTypstRenderer } from '@myriaddreamin/typst.ts/dist/cjs/renderer.cjs'

const App = () => {

    onMount(async () => {
        const cc = createTypstCompiler();
        await cc.init({ getModule: () => `https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler@${__TYPST_TS_VERSION__}/pkg/typst_ts_web_compiler_bg.wasm` })

        const { result } = await cc.withIncrementalServer(async (incrServer) => {
            cc.addSource("/main.typ", "Hello.");
            return cc.compile({
                diagnostics: "none",
                incrementalServer: incrServer,
                mainFilePath: "/main.typ",
                format: "vector"
            })
        });

        console.log(!!result);
        if(!result) return;

        const renderer = createTypstRenderer()
        await renderer.init( { getModule: () => `https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer@${__TYPST_TS_VERSION__}/pkg/typst_ts_renderer_bg.wasm` })
        const svg = await renderer.runWithSession(async (kModule)=>{
            return renderer.renderSvg({
                artifactContent: result,
                format: "vector",
                renderSession: kModule,
            })
        })

        console.log(svg);
    });

    return <></>
}


const root = document.getElementById('root')
render(() => <App />, root!)

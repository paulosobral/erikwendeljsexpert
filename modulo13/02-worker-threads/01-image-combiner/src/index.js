import { createServer } from 'http'
import { parse, fileURLToPath } from 'url'
import { Worker } from 'worker_threads'

// https://sharp.pixelplumbing.com/install#worker-threads
import sharp from 'sharp'

import { dirname } from 'path'
const currentFolder = dirname(fileURLToPath(import.meta.url))
const workerFileName = 'worker.js'
async function joinImages(images) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(`${currentFolder}/${workerFileName}`)
        worker.postMessage(images)
        worker.once('message', resolve)
        worker.once('error', reject)
        worker.once('exit', code => {
            if(code !== 0) {
                return reject(new Error(`Thread ${worker.threadId} stopped with exit code ${code}`))
            }

            console.log(`the thread ${worker.threadId} exited!`)
        })
    })
    

}

async function handler(request, response) {
    if(request.url.includes('joinImages')) {
        const { query: {background, img}} = parse(request.url, true)
        const imageBase64 = await joinImages({
            image: img,

            background
        })

        response.writeHead(200, {
            'Content-Type': 'text/html'
        })

        response.end(`<img style="width:100%;height:100%" src="data:image/jpeg;base64,${imageBase64}" />`)
        return;
    }


    return response.end('ok')
}

createServer(handler)
    .listen(3000, () => console.log("running at 3000"))



// localhost:3000/joinImages?img=https://cdn.awsli.com.br/800x800/2657/2657807/produto/255897542/1708370824944-removebg-preview-1d3081427f.png&https://t3.ftcdn.net/jpg/07/39/50/80/360_F_739508001_IXn1x2ww6Zqi2GfYHUkfqD9ZhFfyu4au.jpg

// https://cdn.awsli.com.br/800x800/2657/2657807/produto/255897542/1708370824944-removebg-preview-1d3081427f.png
// https://img2.storyblok.com/fit-in/1536x1536/filters:format(png)/f/115795/1342x2061/e0a273dbff/predator.png

// backgrounds
// * https://t3.ftcdn.net/jpg/07/39/50/80/360_F_739508001_IXn1x2ww6Zqi2GfYHUkfqD9ZhFfyu4au.jpg
// https://www.iamag.co/wp-content/uploads/2017/10/rick-morty-ca59-640x400.jpeg
// https://img.freepik.com/fotos-premium/crie-um-fundo-de-animacao-2d-inspirado-no-artista-de-rick-and-morty-nick-bear_899449-1669.jpg
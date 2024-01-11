import {
    expect,
    describe,
    test,
    jest,
    beforeEach,
    beforeAll,
    afterAll
} from '@jest/globals'

import { tmpdir } from 'os'
import fsPromises from 'fs/promises'
import { join } from 'path'
import { createLayersIfNotExists } from './../../src/createLayers.js'
import { createFiles } from './../../src/createFiles.js'
import Util from '../../src/util.js'

function generateFilePath({ mainPath, defaultMainFolder, layers, componentName }) {
    return layers.map(layer => {
        // factory
        // factory/heroesFactory.js
        const fileName = `${componentName}${Util.upperCaseFirstLetter(layer)}.js`
        // mainPath: /Documents/project/jsexpert/
        // defaultMainFolder: src
        // layer: factory
        // fileName: heroesFactory.js

        return join(mainPath, defaultMainFolder, layer, fileName)
    })
}


describe('#Integration - Files - Files Structure', () => {

    const config = {
        defaultMainFolder: 'src',
        mainPath: '',
        // colocamos um sort, pq o sistema retorna em ordem alfabética
        layers: ['service', 'factory', 'repository'].sort(),
        componentName: 'heroes'
    }
    // como não obtivemos o caminho relativo, estamos pensando que o comando
    // vai rodar do package.json que está na raiz, por isso, iniciamos pegando da
    // pasta test
    const packageJSON = 'package.json'
    const packageJSONLocation = join('./test/integration/mocks/', packageJSON)

    beforeAll(async () => {
        config.mainPath = await fsPromises.mkdtemp(join(tmpdir(), 'layers-'))
        await fsPromises.copyFile(
            packageJSONLocation,
            join(config.mainPath, packageJSON)
        )
        await createLayersIfNotExists(config)
    })
    
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    afterAll(async () => {
        // await fsPromises.rmdir(config.mainPath, { recursive: true })
    })

    test('Repository class should have create, read, update and delete methods', async () => {
        const myConfig = {
            ...config,
            layers: ['repository']
        }

        await createFiles(myConfig)
        const [ repositoryFile ] = generateFilePath(myConfig)
        console.log({ repositoryFile })

    })
    test.todo('Service should have the same signature of repository and call all its methods')
    test.todo('Factory instance should match layers')
    
})



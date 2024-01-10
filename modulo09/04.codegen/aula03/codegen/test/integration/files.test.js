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

async function getFolders({ mainPath, defaultMainFolder }) {
    return fsPromises.readdir(join(mainPath, defaultMainFolder))
}


describe('#Integration - Layers - Folders Structure', () => {

    const config = {
        defaultMainFolder: 'src',
        mainPath: '',
        // colocamos um sort, pq o sistema retorna em ordem alfabética
        layers: ['service', 'factory', 'repository'].sort(),
    }

    beforeAll(async () => {
        config.mainPath = await fsPromises.mkdtemp(join(tmpdir(), 'skeleton-'))
    })
    
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    afterAll(async () => {
        await fsPromises.rmdir(config.mainPath, { recursive: true })
    })

    test('should not create folders if it exists')

    
})



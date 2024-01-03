import {
    expect,
    describe,
    test,
    jest,
    beforeEach
} from '@jest/globals'

import fsPromises from 'fs/promises'


describe('#Layers - Folder Structure', () => {
    const defaultLayers = ['service', 'factory', 'repository']
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    
    test.todo('should not create folders if it exists')
    
})
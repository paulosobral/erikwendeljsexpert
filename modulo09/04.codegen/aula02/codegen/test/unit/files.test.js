import {
    expect,
    describe,
    test,
    jest,
    beforeEach
} from '@jest/globals'

import fsPromises from 'fs/promises'
import { createFiles } from '../../src/createFiles.js'
import templates from '../../src/templates/index.js'


describe('#Layers - Files Structure', () => {
    const defaultLayers = ['service', 'factory', 'repository']
    const config = {
        layers: defaultLayers, 
        mainPath: './', 
        defaultMainFolder: 'src', 
        componentName: 'heroes'
    }

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test('should not create file structure on inexistent templates', async () => {
        const myConfig = {
            ...config,
            layers: ['inexistent']
        }

        const expected = { error: 'the chosen layer doenst have a template'}
        const result = await createFiles(myConfig)
        expect(result).toStrictEqual(expected)

    })
    test('repository should not add any additional dependencies', async () => {
        jest.spyOn(fsPromises, fsPromises.writeFile.name).mockResolvedValue()
        jest.spyOn(templates, templates.repositoryTemplate.name)
            .mockReturnValue({ className: '', template: ''  })

        const myConfig = {
            ...config,
            layers: ['repository']
        }

        const expected = { success: true}

        const result = await createFiles(myConfig)
        expect(result).toStrictEqual(expected)

        expect(fsPromises.writeFile).toHaveBeenCalledTimes(myConfig.layers.length)
        expect(templates.repositoryTemplate).toHaveBeenCalledWith(myConfig.componentName)
    })
    test.todo('service should have repository as dependency')
    test.todo('factory should have repository and service as dependencies')
    

})
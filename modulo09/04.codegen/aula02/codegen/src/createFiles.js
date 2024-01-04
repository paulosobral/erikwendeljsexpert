import fsPromises from 'fs/promises'
import fs from 'fs'
import templates from './templates/index.js'

export async function createFiles({ mainPath, defaultMainFolder, layers,  componentName }) {
    
    const keys = Object.keys(templates)

    for(const layer of layers) {
        /*
        keys = [
            factoryTemplate,
            serviceTemplate,
            repositoryTemplate
        ]

        layers = ['inexistent']

        */
        const chosenTemplate = keys.find(key => key.includes(layer))
        if(!chosenTemplate) {
            return { error: 'the chosen layer doenst have a template'}
        }

        const template = templates[chosenTemplate]
        // Users/Document/jsexpert/codegen/src/factory
        const targetFile = `${mainPath}/${defaultMainFolder}/${layer}`
    }
}
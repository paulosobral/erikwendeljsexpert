import fsPromises from 'fs/promises'
import fs from 'fs'
import templates from './templates/index.js'
import Util from './util.js'

const defaultDependencies = (layer, componentName) => {
    const dependencies = {
        repository: [],
        service: [
            // ProductRepository
            `${componentName}Repository`
        ],
        factory: [
            `${componentName}Repository`,
            `${componentName}Service`
        ]
    }

    return dependencies[layer]
        // Pode ser que venha Product
        // Quero que retorne: product
        .map(Util)
}

export async function createFiles({ mainPath, defaultMainFolder, layers,  componentName }) {
    
    const keys = Object.keys(templates)
    const pendingFilesToWrite = []
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
        // s[o o exemplo debaixo /Users/Document/jsexpert/codegen/src/factory
        const targetFolder = `${mainPath}/${defaultMainFolder}/${layer}`
        const dependencies = defaultDependencies(layer, componentName)
        const {fileName, template: txtFile} = template(componentName, ...dependencies)
        const fileName = `${targetFolder}/${Util.lowerCaseFirstLetter(fileName)}.js`
        pendingFilesToWrite.push({ fileName, txtFile })
    }
}
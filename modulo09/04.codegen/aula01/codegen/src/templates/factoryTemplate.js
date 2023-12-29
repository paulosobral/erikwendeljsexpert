import Util from "../util.js"
const componentNameAnchor = '$$componentName$$'
const currentContextAnchor = '$$currentContext'
const repositoryAnchor = '$$repositoryName'
const template = ``

export function factoryTemplate(componentName, repositoryName, serviceName) {
    // const currentContext = `this.${repositoryName}`
    // const txtFile = template
    //     .replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
    //     .replaceAll(currentContextAnchor, currentContext)
    //     .replaceAll(repositoryAnchor, repositoryName)

    return {
        fileName: `${componentName}Service`,
        template
    }
}
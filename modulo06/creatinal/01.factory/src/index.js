const UserFactory = require("./factory/userFactory")

;(async () => {

    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find({ name : 'Erick*'})
    console.log({ result })
})()
// TODO: Parei aqui: https://training.erickwendel.com.br/92103-javascript-expert/2196672-factory-design-pattern-n-tier-architecture-dependency-injection-creation
// faltando -09:00
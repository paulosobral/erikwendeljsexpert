export default class Marketing {
    update({ id, userName }) {
        // importante lembrar que o [update] é responsável por gerenciar seus erros/exceptions
        // nao deve-ser ter await no notify porque a responsabilidade do notify é só emitir eventos
        // só notificar todo mundo
        console.log(`[${id}]: [shipment] will pack the user's order to [${userName}]`)
    }
}
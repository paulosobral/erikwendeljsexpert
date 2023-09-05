import { NotImplementedException } from '../../util/exceptions.js'

export default class BaseBusiness {
    _validateRequiredFields(data) {

    }

    _create(data) {

    }

    /*
    Padrao do Martin Fowler
    a proposta do padrão é garatir um fluxo de métodos, definindo uma sequencia a ser
    executada

    esse create é a implementação efetiva do Template Method
    */
    create(data) {
        // validar campos
        // salvar no banco
    }
}
import database from "../database.js";

import Cart from "./entities/cart.js"

const cart = new Cart(database);
console.log(cart)
// TODO: 16:06 https://training.erickwendel.com.br/92103-javascript-expert/2196747-benchmarking-como-comparar-a-performance-entre-funcoes
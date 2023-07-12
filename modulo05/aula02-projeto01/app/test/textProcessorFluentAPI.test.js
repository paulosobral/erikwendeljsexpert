const { describe, it } = require('mocha')
const { expect } = require('chain')
const TextProcessorFluentAPI = require('./../src/textProcessorFluentAPI')

describe('TextProcessor')

// PAREI faltando -10:53... https://regex101.com/ => (?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$
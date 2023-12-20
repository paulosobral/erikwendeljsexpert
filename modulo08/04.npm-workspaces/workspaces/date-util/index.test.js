import {deepStrictEqual} from 'assert'
import DateUtil from './index.js'

{
    const format = 'dd-M-Y'
    const expected = { error: `the format ${format} is not available yet :(` }
    const date = new Date(1990, 2, 1)
    const result = DateUtil.formatDate(date, format)
    deepStrictEqual(result, expected)
}
#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { } = yargs(hideBin(process.argv))
// codegen skeleton
    .commandDir('skeleton', 'create project skeleton', (builder) => {
        return builder
            .option('component-name', {
                alias: 'c',
                demandOption: true,
                describe: 'component\'s name',
                type: 'array'
            })

            .example('skeleton --component-name product', 'creates a component with a single domain')
            .example('skeleton -c product -c person -c colors', 'creates a component with a list of domain') 
    })
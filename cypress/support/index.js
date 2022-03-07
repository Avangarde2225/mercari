
// ***********************************************************


// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

import cypressGrep from '../..'
// register the grep feature
// https://github.com/cypress-io/cypress-grep
cypressGrep()

// Alternatively you can use CommonJS syntax:
// require('./commands')
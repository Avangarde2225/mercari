## Mercari Cypress Demo Framework
An automation testing framework for web application using Cypress


### Project structure
```
.
├── cypress
│   ├── fixtures
│   │   ├── example.json
│   |   └── test_data.json
|   │    
│   ├── integration
│   │   ├── order.js
│   │   ├── simple_search.js
│   |   └── ...
|   |
|   │   
│   ├── page-objects
│   │   ├── locators──────── ...
│   │   ├── pages─────────── ...
│   │   
│   │   
│   ├── plugins
│   │   ├── index.js
│   │   
│   └── support
│   │   ├── 
│   │   │   
│   │   │   
│   │   ├── commands.js
│   │   ├── index.js
│   │   └── ...
│   │
│   │
│   │
│   └──── reports── output.html
│       
│
├── package.json
│── cypress.json



```

### Prerequisites
- NodeJS

### Installation
1. Clone the repo
```
git clone https://github.com/Avangarde2225/mercari.git
```
2. Install NPM packages
```
$ npm install
```
### Running the tests from Terminal
```
$ npm test

### After running successfully 

GET the mochawesome report from

cypress/reports/output.html



NOTE: It can be improved and can be much more dynamic, just takes time !!!

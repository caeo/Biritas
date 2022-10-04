const bodyParser = require('body-parser')
const fornecedores = require('./fornecedoresRoute.js')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(fornecedores)
}

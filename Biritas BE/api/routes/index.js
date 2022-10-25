const bodyParser = require('body-parser')
const fornecedores = require('./fornecedoresRoute.js')
const produtos = require('./produtosRoute.js')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(fornecedores)
  app.use(produtos)
}

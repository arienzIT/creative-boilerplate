const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/views'))

app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  defaultLayout: 'main',
  extname: 'hbs'
}))

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.listen(port, () => {
  console.log('listening to port', port)
})

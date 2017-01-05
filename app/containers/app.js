import Hanzo from 'hanzojs/mobile'
import createLogger from 'redux-logger';

const app = new Hanzo()
app.registerModule(require('../modules/todoApp'))
app.use({
  onAction: [
    createLogger()
  ]
})
app.router(require('./router'))
const App = app.start()

export default App

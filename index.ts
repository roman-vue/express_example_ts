//**IMPORTS */
import express from 'express'
import morgan from 'morgan'
import ExampleRoutes from './controllers/example.controller'
import * as colors from 'colors'
const app = express()

//**SETTINGS */
app.set('port', 3000)

//**MIDLEWARES */
app.use(express.urlencoded({ extended: true, limit: '550mb', parameterLimit: 55000000 }));
app.use(express.json({ limit: '550mb' }));
app.use(morgan((tokens, req, res) => {
    let status = tokens.status(req, res);
    let color = status >= 500 ? 'red' : status >= 300 ? 'yellow' : 'green'
    return [
      'ip: ' + colors.gray(tokens['remote-addr'](req, res)),
      'status: '+ colors[color](status),
      'path: ' + colors.blue(tokens['url'](req, res))
    ].join(' ')}))

//** CONTROLLERS */
app.use('/', ExampleRoutes)

//* LISTEN*/
app.listen(app.get('port'), ()=>{
    console.log(`server started`);
    console.log(`http://localhost:${app.get('port')}`);
})
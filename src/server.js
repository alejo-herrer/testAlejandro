import http from 'http' 
import { taskRoutes } from './routes/tasks.routes.js'

const server = http.createServer( async(req, res) => {

    taskRoutes(req,res);

})

server.listen(3000, () => {console.log('Server corriendo')})
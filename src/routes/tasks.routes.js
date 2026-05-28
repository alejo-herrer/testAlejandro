import { listTaskController } from "../controllers/tasks.controller.js";

export async function taskRoutes(req,res){

    const {url, method} = req

    res.setHeader("Content-type","application/json");

    if(url === '/tasks' && method === 'GET'){
       return listTaskController(req,res)
    }

    res.statusCode = 404
    return res.end(JSON.stringify({message: 'Página no encontrada'}))
    

}
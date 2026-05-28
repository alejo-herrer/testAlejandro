import { listTaskController, newTaskController } from "../controllers/tasks.controller.js";

export async function taskRoutes(req,res){

    const {url, method} = req

    res.setHeader("Content-type","application/json");

    if(url === '/tasks' && method === 'GET'){
       return listTaskController(req,res)
    }

    if(url === '/tasks' && method === 'POST'){
       return newTaskController(req,res)
    }


    res.statusCode = 404
    return res.end(JSON.stringify({message: 'Página no encontrada'}))
    

}
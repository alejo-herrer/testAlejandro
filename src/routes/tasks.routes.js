import { listTaskController, newTaskController } from "../controllers/tasks.controller.js";
import fs from 'fs/promises'

export async function taskRoutes(req,res){

    const method = req.method
    const url = req.url.split('?')[0];

    console.log(method, url);

   if(url === '/tasks' && method === 'GET'){
      res.setHeader("Content-type","application/json")
      return listTaskController(req,res)
   }    

    if(url === '/tasks' && method === 'POST'){
      res.setHeader("Content-type","application/json")
       return newTaskController(req,res)
    }
    
    res.statusCode = 404
    return res.end(JSON.stringify({message: 'Página no encontrada'}))
    

}
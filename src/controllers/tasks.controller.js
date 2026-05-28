import { listTasks } from "../services/task.service.js"


export async function listTaskController(req, res){

        const data = await listTasks()
        return res.end(data)

}
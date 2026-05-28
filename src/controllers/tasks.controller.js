import { listTasks, registerTask } from "../services/task.service.js"


export async function listTaskController(req, res){

        const data = await listTasks()
        return res.end(data)

}

export async function newTaskController(req, res){

        let body = ''

        req.on('data', chunk => {
                body += chunk
        })

        req.on('end', async() => {

                const newTask = JSON.parse(body)
                const data = await listTasks()
                const tasks = JSON.parse(data)
                
                tasks.push(newTask)

                await registerTask(tasks)
                res.statusCode = 201
                return res.end(JSON.stringify(tasks))
                
        })

}
import { listAllTasks, registerTasks } from "../repositories/tasks.repository.js"

export async function listTasks(){

        return await listAllTasks()

}


export async function registerTask(data) {
        await registerTasks(data)
}
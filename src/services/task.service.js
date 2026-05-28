import { listAllTasks, registerTasks } from "../repositories/tasks.repository.js"

export async function listTasks(){

        return listAllTasks()

}


export async function registerTask(data) {
        registerTasks(data)
}
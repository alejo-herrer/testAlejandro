import { listAllTasks } from "../repositories/tasks.repository.js"

export async function listTasks(){

        return listAllTasks()

}
import fs from 'fs/promises'

export function listAllTasks(){

    return fs.readFile("./database/tasks.json", "utf-8");

}
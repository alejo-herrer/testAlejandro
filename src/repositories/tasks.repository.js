import fs from 'fs/promises'

export function listAllTasks(){

    return fs.readFile("./database/tasks.json", "utf-8");

}

export function registerTasks(data){

    fs.writeFile("./database/tasks.json", JSON.stringify(data, null, 2));

}
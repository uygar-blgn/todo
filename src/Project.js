import { Task } from "./Task"

class Project {

    constructor(name='', todos=[]) {
        this.name = name
        this.todos = todos
    }
}

export {Project}
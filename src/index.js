import { Task } from "./Task"
import { Display } from "./Display"
import { Project } from "./Project"

const task1 = new Task('task1', 'yes', 'High Priority', '01/07/2004', false)

const untitled = new Project('', [task1])
const a = new Project('a', [task1])
const b = new Project('b', [task1])

new Display([untitled, a, b])
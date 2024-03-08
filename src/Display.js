import { Task } from "./Task"
import { Project } from "./Project"

class Display {
    
    constructor(projects=[]) {
        this.projects = projects
        this.renderSidebar()
        this.renderContent()
    }

    renderSidebar() {
        const sidebar = document.querySelector('#sidebar')
        sidebar.textContent = ''
        this.projects.forEach(project => {
            if(project.name != '') {
                const currentProject = document.createElement('div')
                currentProject.className = 'project'
                currentProject.textContent = project.name
                sidebar.appendChild(currentProject)
            }
        });
        const newProject = document.createElement('div')
        newProject.id = 'new-project'
        const newProjectImg = document.createElement('img')
        newProjectImg.src = 'https://www.svgrepo.com/show/2087/plus.svg'
        newProject.appendChild(newProjectImg)
        newProject.addEventListener('click', () => {
            const newProjectName = prompt('Name of new project?')
            const newProjectObj = new Project(newProjectName, [])
            this.projects.push(newProjectObj)
            const addedProject = document.createElement('div')
            addedProject.className = 'project'
            addedProject.textContent = newProjectObj.name
            sidebar.removeChild(newProject)
            sidebar.appendChild(addedProject)
            sidebar.appendChild(newProject)
            this.renderContent()
        })
        sidebar.appendChild(newProject)
    }

    renderContent() {
        const content = document.querySelector('#content')
        content.textContent = ''
        this.projects.forEach(project => {
            const projectCategory = document.createElement('div')
            projectCategory.className = 'project-category'
            if(project.name != '') {
                const projectTitle = document.createElement('div')
                projectTitle.className = 'project-title'
                projectTitle.textContent = project.name
                projectCategory.appendChild(projectTitle)
            }
            project.todos.forEach(todo => {
                const task = document.createElement('div')
                task.className = 'task'

                const taskName = document.createElement('div')
                taskName.className = 'task-name'

                const taskDesc = document.createElement('div')
                taskDesc.className = 'task-desc'

                const taskPriority = document.createElement('div')
                taskPriority.className = 'task-priority'

                const taskDue = document.createElement('div')
                taskDue.className = 'task-due'

                const taskComplete = document.createElement('div')
                taskComplete.className = 'task-complete'

                const taskDelete = document.createElement('div')
                taskDelete.className = 'task-delete'
                const deleteImg = document.createElement('img')
                deleteImg.src = 'https://www.svgrepo.com/show/124986/big-trash-can.svg'
                taskDelete.appendChild(deleteImg)

                taskName.textContent = todo.name
                taskDesc.textContent = todo.desc
                taskPriority.textContent = todo.priority
                taskDue.textContent = todo.due

                if(!todo.complete) {
                    const checkboxImg = document.createElement('img')
                    checkboxImg.src = 'https://www.svgrepo.com/show/309415/checkbox-unchecked.svg'
                    taskComplete.appendChild(checkboxImg)
                }
                else {
                    const checkboxImg = document.createElement('img')
                    checkboxImg.src = 'https://www.svgrepo.com/show/309414/checkbox-checked.svg'
                    taskComplete.appendChild(checkboxImg)
                }

                taskComplete.addEventListener('click', () => {
                    if(!todo.complete) {
                        todo.complete = true
                        taskComplete.querySelector('img').src = 'https://www.svgrepo.com/show/309414/checkbox-checked.svg'
                        task.style.backgroundColor = 'rgb(200, 200, 200)'
                    }
                    else {
                        todo.complete = false
                        taskComplete.querySelector('img').src = 'https://www.svgrepo.com/show/309415/checkbox-unchecked.svg'
                        task.style.backgroundColor = 'white'
                    }
                })

                taskDelete.addEventListener('click', () => {
                    const taskIndex = project.todos.indexOf(todo)
                    project.todos.splice(taskIndex, 1)
                    this.renderContent()
                })
                
                task.appendChild(taskName)
                task.appendChild(taskDesc)
                task.appendChild(taskPriority)
                task.appendChild(taskDue)
                task.appendChild(taskComplete)
                task.appendChild(taskDelete)

                projectCategory.appendChild(task)
            })

            const newTask = document.createElement('div')
            newTask.id = 'new-task'
            const newTaskImg = document.createElement('img')
            newTaskImg.src = 'https://www.svgrepo.com/show/2087/plus.svg'
            newTask.appendChild(newTaskImg)

            newTask.addEventListener('click', () => {
                const newTaskName = prompt('Task name?')
                const newTaskDesc = prompt('Task description?')
                const newTaskPriority = prompt('Task priority?')
                const newTaskDue = prompt('Due date?')
                const newTaskObj = new Task(newTaskName, newTaskDesc, newTaskPriority, newTaskDue, false)
                project.todos.push(newTaskObj)
                const addedTask = document.createElement('div')
                addedTask.className = 'task'

                const taskName = document.createElement('div')
                taskName.className = 'task-name'

                const taskDesc = document.createElement('div')
                taskDesc.className = 'task-desc'

                const taskPriority = document.createElement('div')
                taskPriority.className = 'task-priority'

                const taskDue = document.createElement('div')
                taskDue.className = 'task-due'

                const taskComplete = document.createElement('div')
                taskComplete.className = 'task-complete'

                const taskDelete = document.createElement('div')
                taskDelete.className = 'task-delete'
                const deleteImg = document.createElement('img')
                deleteImg.src = 'https://www.svgrepo.com/show/124986/big-trash-can.svg'
                taskDelete.appendChild(deleteImg)

                taskName.textContent = newTaskName
                taskDesc.textContent = newTaskDesc
                taskPriority.textContent = newTaskPriority
                taskDue.textContent = newTaskPriority


                const checkboxImg = document.createElement('img')
                checkboxImg.src = 'https://www.svgrepo.com/show/309415/checkbox-unchecked.svg'
                taskComplete.appendChild(checkboxImg)

                taskComplete.addEventListener('click', () => {
                    if(!newTaskObj.complete) {
                        newTaskObj.complete = true
                        checkboxImg.src = 'https://www.svgrepo.com/show/309414/checkbox-checked.svg'
                        addedTask.style.backgroundColor = 'rgb(200, 200, 200)'
                    }
                    else {
                        newTaskObj.complete = false
                        checkboxImg.src = 'https://www.svgrepo.com/show/309415/checkbox-unchecked.svg'
                        addedTask.style.backgroundColor = 'white'
                    }
                })

                taskDelete.addEventListener('click', () => {
                    const taskIndex = project.todos.indexOf(newTaskObj)
                    project.todos.splice(taskIndex, 1)
                    this.renderContent()
                })
                
                addedTask.appendChild(taskName)
                addedTask.appendChild(taskDesc)
                addedTask.appendChild(taskPriority)
                addedTask.appendChild(taskDue)
                addedTask.appendChild(taskComplete)
                addedTask.appendChild(taskDelete)

                projectCategory.removeChild(newTask)
                projectCategory.appendChild(addedTask)
                projectCategory.appendChild(newTask)
            })


            projectCategory.appendChild(newTask)
            content.appendChild(projectCategory)
        })
    }

}

export {Display}
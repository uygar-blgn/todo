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

                taskName.textContent = todo.name
                taskDesc.textContent = todo.desc
                taskPriority.textContent = todo.priority
                taskDue.textContent = todo.due
                
                task.appendChild(taskName)
                task.appendChild(taskDesc)
                task.appendChild(taskPriority)
                task.appendChild(taskDue)
                task.appendChild(taskComplete)
                task.appendChild(taskDelete)

                projectCategory.appendChild(task)
            })

            content.appendChild(projectCategory)
        })
    }

}

export {Display}
class Task {

    constructor(name='', desc='', priority='Low Priority', due='01/01/1970', complete=false) {
        this.name = name
        this.desc = desc
        this.priority = priority
        this.complete = complete
        this.due = due
    }
}

export {Task}
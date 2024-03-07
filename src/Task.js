class Task {

    constructor(title='', desc='', priority='Low Priority', due='01/01/1970', complete=false) {
        this.title = title
        this.desc = desc
        this.priority = priority
        this.complete = complete
        this.due = due
    }
}

export {Task}
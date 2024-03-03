class Task {

    title;
    desc;
    priority;
    complete;

    constructor(title='', desc='', priority='M', complete=false) {
        this.title = title
        this.desc = desc
        this.priority = priority
        this.complete = complete
    }
}

export {Task}
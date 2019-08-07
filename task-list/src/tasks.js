const uuidv4 = require('uuid/v4');

export default class Tasks {
    constructor(){
        this.id = uuidv4()
        this.title = "Make a task list"
        this.isCompleted = false
    }
}
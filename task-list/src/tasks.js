const uuidv4 = require('uuid/v4');

export class Tasks {
    constructor(inputTitle){
        this.id = uuidv4
        this.title = inputTitle
        this.isCompleted = false
    }
}
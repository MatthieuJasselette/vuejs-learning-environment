const uuidv4 = require('uuid/v4');

export default class Tasks {
    constructor(titleInput){
        this.id = uuidv4()
        this.title = titleInput
        this.isCompleted = false
    }
}
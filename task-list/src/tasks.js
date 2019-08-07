const uuidv4 = require('uuid/v4');

export default class Tasks {
    constructor(titleInput, inputBoolean){
        this.id = uuidv4()
        this.title = titleInput
        this.isCompleted = inputBoolean
    }
}
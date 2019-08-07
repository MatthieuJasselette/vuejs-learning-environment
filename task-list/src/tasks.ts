const uuidv4 = require('uuid/v4');

export class Tasks {
    id: String = uuidv4
    title: String
    isCompleted: Boolean
}
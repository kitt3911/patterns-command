class Todo{
    constructor(action,isDone_ = false){
        this.action = action
        this.isDone = isDone_
    }

    done(){
        this.isDone_ =true
    }

    rename(action){
        this.action = action
    }
    isDone(){
        return this.isDone_
    }
    
}

class Todos{
    constructor(initialValue = []){
        this.todos = initialValue
    }

    addTodo(actionName){
        this.todos.push(new Todo(actionName))
        return this // for testing
    }

    getTodos(){
        return this.todos
    }

    getTodoByIdx(idx__){
        return this.todos.find((item,idx) => idx === idx__)
    }
}

class Command{
    constructor(subject){
        this.subject = subject
        this.commandExecuted = []
    }

    execute(command,args){
        this.commandExecuted.push(command)
        return this.subject[command](args)
    }
}

const command = new Command(new Todos())
console.log(command.execute('addTodo','lets go to the school'))
console.log(command.execute('addTodo','lets go the shop'))
console.log(command.commandExecuted)
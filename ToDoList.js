class Task {
  constructor(title, discription) {
    this.title = title;
    this.discription = discription;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
  update(title,discription){
    this.title = title;
    this.discription = discription;
  }
}

class TaskManger{
    constructor(){
        this.Tasks=[];
    }
    addTask(task){
        this.Tasks.push(task)
    }
    removeTask(index){
        this.Tasks.splice(index,1)
    }
}

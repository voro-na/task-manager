import {makeAutoObservable} from "mobx"
import {task} from "../models";

class TaskStore {
    tasks: any = []

    constructor() {
        makeAutoObservable(this)
    }

    RemoveTask = (id: number) => {
        const index = this.tasks.map((item: task) => {
            return item.id
        }).indexOf(id);
        this.tasks.splice(index, 1);
    }
    EditTask = (value: string, id: number) => {
        this.tasks.map((t: task) => (t.id === id ? t.task = value : t))
    }
    DoneTask = (id: number) => {
        this.tasks.map((t: task) => (t.id === id ? t.done = !t.done : t))
    }
    AddTask = (UserInput: string, category: number) => {
        let NewTask: task = {
            task: UserInput,
            id: Math.trunc(Math.random() * 10000000),
            done: false, category: category
        }
        this.tasks.push(NewTask)
    }
    GetTasks = (id: number) => {
        return this.tasks.filter((t: task) => t.category === id)
    }
}

export default TaskStore
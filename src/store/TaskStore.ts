import {makeAutoObservable} from "mobx"
import {task} from "../models";
import dayjs from "dayjs";

class TaskStore {
    tasks: task[] = []

    constructor() {
        makeAutoObservable(this)
    }

    RemoveTask = (id: number) => {
        const index = this.tasks.map((item: task) => {
            return item.id
        }).indexOf(id);
        debugger
        this.tasks.splice(index, 1);
    }
    EditTask = (value: string, id: number, index: string) => {
        switch (index) {
            case 'task':
                this.tasks.map((t: task) => (t.id === id ? t.task = value : t));
                break
            case 'header':
                this.tasks.map((t: task) => (t.id === id ? t.header = value : t));
                break
            case 'date':
                this.tasks.map((t: task) => (t.id === id ? t.date = value : t));
                this.tasks.map((t: task) => (t.id === id && dayjs(t.date).isBefore(dayjs()) ?
                    t.done = true : t.done = false));
                break
            default:
                break
        }
    }
    DoneTask = (id: number) => {
        this.tasks.map((t: task) => (t.id === id ? t.done = !t.done : t))
    }
    AddTask = (UserInput: string, category: number) => {
        let NewTask: task = {
            task: '',
            id: Math.trunc(Math.random() * 10000000),
            done: false,
            category: category,
            header: UserInput,
            date: ''
        }
        this.tasks.push(NewTask)
    }
    GetTasks = (id: number) => {
        return this.tasks.filter((t: task) => t.category === id)
    }
}

export default TaskStore
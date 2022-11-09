import React, {useState} from "react";
import OneTask from "./OneTask";
import styles from "./ToDoForm.module.css"
import taskStore from "../store/TaskStore";
import {observer} from "mobx-react-lite";

const store = new taskStore()

const ToDoForm = observer(({id}: any) => {

    const [TaskStore] = useState(() => store);
    const [UserInput, SetUserInput] = useState("");

    const AddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!UserInput) return;
        TaskStore.AddTask(UserInput, id);
        SetUserInput("");
    }
    const ChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
        SetUserInput(e.currentTarget.value);
    }
    const CategoryTasks = TaskStore.GetTasks(id);

    return (<div>
            <form onSubmit={AddTask}>
                <input value={UserInput}
                       onChange={ChangeInput}
                       placeholder="  Input tasks..."
                       className={styles.input}/>
                <button className={styles.btn}>Add</button>
            </form>
            <OneTask tasks={CategoryTasks}
                     RemoveTask={TaskStore.RemoveTask}
                     EditTask={TaskStore.EditTask}
                     DoneTask={TaskStore.DoneTask}/>
        </div>)
})

export default ToDoForm
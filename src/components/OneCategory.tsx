import React, {memo, useState} from "react";
import OneTask from "./OneTask";
import styles from "./OneCategory.module.css"
import taskStore from "../store/TaskStore";
import {observer} from "mobx-react-lite";


const store = new taskStore()

const OneCategory= observer(({id}: any) => {

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

    return <>
            <form onSubmit={AddTask}>
                <input value={UserInput}
                       onChange={ChangeInput}
                       placeholder="  Input tasks..."
                       className={styles.input}/>
                <button className={styles.btn}>Add</button>
            </form>
            <OneTask tasks={TaskStore.GetTasks(id)}
                     RemoveTask={TaskStore.RemoveTask}
                     EditTask={TaskStore.EditTask}
                     DoneTask={TaskStore.DoneTask}/>
        </>
})

export default memo(OneCategory)
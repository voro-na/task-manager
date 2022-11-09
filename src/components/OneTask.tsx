import React from "react";
import styles from './OneTask.module.css';
import {observer} from "mobx-react-lite";
import {propsToDo, task} from "../models";


const OneTask = observer(({tasks, RemoveTask, EditTask, DoneTask}: propsToDo) => {

    const Remove = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        RemoveTask(id);
    }
    const Edit = (value: string, id: number) => {
        EditTask(value, id);
    }
    const Done = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        DoneTask(id);
    }

    const ToDoes = tasks.map((task: task) =>
        <form className={styles.todo} key={task.id}>
        <input value={task.task}
               onChange={(e) => Edit(e.currentTarget.value, task.id)}
               className={task.done ? styles.input2 :  styles.input1}
        />
        <button className={styles.btn}
                onClick={(e) => Done(e, task.id)}>
            <i className="fa-solid fa-check"></i></button>
        <button className={styles.btn}
                onClick={(e) => Remove(e, task.id)}>
            <i className="fa-regular fa-trash-can"></i></button>
    </form>)

    return (<div>
        {ToDoes}
    </div>)
})

export default OneTask


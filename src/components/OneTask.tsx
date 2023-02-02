import React from "react";
import styles from './OneTask.module.css';
import {observer} from "mobx-react-lite";
import {propsToDo, task} from "../models";


const OneTask = observer(({tasks, RemoveTask, EditTask, DoneTask}: propsToDo) => {

    const Remove = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        RemoveTask(id);
    }
    const Edit = (value: string, id: number, index: string) => {
        EditTask(value, id, index);
    }
    const Done = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        DoneTask(id);
    }

    const ToDoes = tasks.map((task: task ) =>
        <form className={styles.todo} key={task.id}>
            <div className={styles.inputs}>
                <input type="text" value={task.header}
                       onChange={(e) => Edit(e.currentTarget.value, task.id, 'header')}
                       className={task.done ? styles.header2 : styles.header1}/>
                <input value={task.task}
                       onChange={(e) => Edit(e.currentTarget.value, task.id, 'task')}
                       className={task.done ? styles.input2 : styles.input1}
                       placeholder='Input description ... '
                />
                <input type="date" value={task.date}
                       onChange={(e) => Edit(e.currentTarget.value, task.id, 'date')}
                       className={styles.input1}
                       />
                <input type="file"
                       className={styles.input1}/>
            </div>
            <button className={styles.btn}
                    onClick={(e) => Done(e, task.id)}>
                <i className="fa-solid fa-check"></i></button>
            <button className={styles.btn}
                    onClick={(e) => Remove(e, task.id)}>
                <i className="fa-regular fa-trash-can"></i></button>
        </form>)

    return <>{ToDoes}</>
})

export default OneTask


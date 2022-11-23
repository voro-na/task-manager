import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import styles from './Page.module.css'
import {category} from "../models";


const Page = () => {
    const [categories, SetCat] = useState<category[]>([]);
    const [UserInput, SetUserInput] = useState("");

    const ChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
        SetUserInput(e.currentTarget.value);
    }

    const AddCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!UserInput) return

        let NewCat: category = {
            category: UserInput,
            id: Math.trunc(Math.random() * 10000000),
            show: true
        }

        SetCat([...categories, NewCat]);
        SetUserInput("");
    }
    const RemoveCategory = (id: number) => {
        SetCat(categories.filter((t: category) => t.id !== id));
    }
    const ShowCategory = (id: number) => {
        let data: category[] = [...categories];
        let objIndex = categories.findIndex((obj: category) => obj.id === id);
        data[objIndex].show = !data[objIndex].show
        SetCat(data)
    }

    const ToDoCategories = categories.map((t: category) => {
        return <div className={styles.container} key={t.id}>
            <div className={styles.category}>

                <div className={styles.header}>{t.category}</div>

                <button className={styles.btn}
                        onClick={(e) => ShowCategory(t.id)}><i
                    className="fa-solid fa-arrows-up-down"></i></button>
                <button className={styles.btn}
                        onClick={(e) => RemoveCategory(t.id)}><i
                    className="fa-regular fa-trash-can"></i></button>
            </div>
            {t.show && <ToDoForm id={t.id}/>}
        </div>
    })

    return (<div className={styles.page}>
        <header>TO DO</header>

        <form onSubmit={AddCategory}>
            <input value={UserInput}
                   onChange={ChangeInput}
                   placeholder="  Input category..."
                   className={styles.input}/>
            <button className={styles.btn}>Add</button>
        </form>

        <div className={styles.main}>
            {ToDoCategories}
        </div>
    </div>)
}

export default Page
import React, {useState} from "react";
import OneCategory from "./OneCategory";
import styles from './Page.module.css'
import {category} from "../models";
import CaterogyStore from "../store/CategoryStore";
import {observer} from "mobx-react-lite";

const store = new CaterogyStore()
const Page = observer(() => {

    const [categories] = useState(() => store);
    const [userInput, SetUserInput] = useState("");

    const ChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
        SetUserInput(e.currentTarget.value);
    }

    const AddCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userInput) return

        categories.AddCategory(userInput)
        SetUserInput("");
    }
    const RemoveCategory = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault()
        categories.RemoveCategory(id)
    }
    const ShowCategory = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault()
        categories.ShowCategory(id)
    }

    const ToDoCategories = categories.categories.map((t: category) => {
        return <div className={styles.container} key={t.id}>
            <div className={styles.category}>

                <div className={styles.headerCategory}>{t.category}</div>

                <button className={styles.btn}
                        onClick={(e) => ShowCategory(e, t.id)}><i
                    className="fa-solid fa-arrows-up-down"></i></button>
                <button className={styles.btn}
                        onClick={(e) => RemoveCategory(e, t.id)}><i
                    className="fa-regular fa-trash-can"></i></button>
            </div>

            {t.show && <OneCategory id={t.id}/>}
        </div>
    })

    return <div className={styles.page}>
        <header>TO DO</header>

        <form onSubmit={AddCategory}>
            <input value={userInput}
                   onChange={ChangeInput}
                   placeholder="  Input category..."
                   className={styles.input}/>
            <button className={styles.btn}>Add</button>
        </form>

        <div className={styles.main}>
            {ToDoCategories}
        </div>
    </div>
})

export default Page
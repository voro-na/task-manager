import React from "react";
import {category} from "../models";
import styles from "./Page.module.css";
import OneCategory from "./OneCategory";

type props = {
    categories : any,
    userInput: string
}
const Categories = ({categories, userInput}: props) => {

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

    return <>{ToDoCategories}</>
}

export default Categories
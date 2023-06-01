import {makeAutoObservable} from "mobx"
import {category} from "../models";

class CaterogyStore {
    categories: category[] = []

    constructor() {
        makeAutoObservable(this)
    }
    AddCategory = (userInput: string) => {

        const newCat: category = {
            category: userInput,
            id: Math.trunc(Math.random() * 10000000),
            show: true
        }

        this.categories.push(newCat);
    }
    RemoveCategory = (id: number) => {
        const index = this.categories.map((item: category) => {
            return item.id
        }).indexOf(id);
        this.categories.splice(index, 1);
    }
    ShowCategory = (id: number) => {
        const data: category[] = [...this.categories];
        const objIndex = this.categories.findIndex((obj: category) => obj.id === id);
        data[objIndex].show = !data[objIndex].show
    }

}

export default CaterogyStore
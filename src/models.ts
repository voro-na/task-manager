import React from "react";
import dayjs from "dayjs";

export interface task {
    task: string,
    id: number,
    done: boolean,
    category: number,
    header: string,
    date: string,
}
export interface category{
    category: string,
    id: number,
    show: boolean
}
export interface propsToDo {
    tasks: task[],
    RemoveTask: (id: number) => void,
    EditTask: (value: string, id: number, index: string) => void,
    DoneTask: (id: number) => void
}

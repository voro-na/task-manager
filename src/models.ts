import React from "react";

export interface task {
    task: string,
    id: number,
    done: boolean,
    category: number
}
export interface category{
    category: string,
    id: number,
    show: boolean
}
export interface propsToDo {
    tasks: task[],
    RemoveTask: (id: number) => void,
    EditTask: (value: string, id: number) => void,
    DoneTask: (id: number) => void
}

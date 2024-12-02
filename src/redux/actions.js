import { TODO } from "./types"

export function inputText(text){
    return {
        type: TODO,
        text
    }
}
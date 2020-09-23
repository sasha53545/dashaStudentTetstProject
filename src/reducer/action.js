import {DECREMENT, INCREMENT, RESET} from "./types";

export function incrementAction() {
    return {
        type: INCREMENT,
    }
}

export function decrementAction() {
    return {
        type: DECREMENT,
    }
}

export function resetAction() {
    return {
        type: RESET,
    }
}

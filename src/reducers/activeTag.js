export default function (state = null, action) {
    switch (action.type) {
        case "TAG_SELECTED":
            console.log(`state is ${state !== null ? state.current.innerText : null}`)
            console.log(`action is ${action.payload.current.innerText}`)
            if (action.payload === state) {
                action.payload.current.classList.remove("btn-info")
                action.payload.current.classList.add("btn-outline-info")
                return null
            } else {
                if(state !== null) {
                    state.current.classList.remove("btn-info")
                    state.current.classList.add("btn-outline-info")
                }
                action.payload.current.classList.remove("btn-outline-info")
                action.payload.current.classList.add("btn-info")
                return action.payload
            }
        default:
            return state

    }
}
import ReactDom from 'react-dom'

export  default  function (state = null, action) {
    switch (action.type) {
        case "TAG_SELECTED":
            console.log(action)
            return action.payload === state ? null : action.payload
        default:
            return state

    }
}
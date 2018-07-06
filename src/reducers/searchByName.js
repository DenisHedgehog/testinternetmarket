export default function (state = null, action) {
    switch (action.type) {
        case "SEARCH_BY_NAME":
            console.log('search is ', action.payload)
            return action.payload
        default:
            return state

    }
}
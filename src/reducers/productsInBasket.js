export default function (state = [], action) {
    switch (action.type) {
        case "ADD_PURCHASE":
            // state.push({product: action.payload.product, count: action.payload.count})
            // console.log("pushed one product")
            // console.log(`size is ${state.length}`)
            // console.log(state)
            return [...state, {product: action.payload.product, count: action.payload.count}]
        case "DELETE_PURCHASE":
            break
        default:
            return state
    }
}
export const selectTag = (ref) => {
    return {
        type: "TAG_SELECTED",
        payload: ref
    }
}

export const searchByName = (name) => {
    return {
        type: "SEARCH_BY_NAME",
        payload: name
    }
}

export const addProductToBasket = (product, count) => {
    return {
        type: "ADD_PURCHASE",
        payload: {product: product, count: count}
    }
}
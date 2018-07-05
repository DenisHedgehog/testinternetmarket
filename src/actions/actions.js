export const selectTag = (tag) => {
    console.log(tag)
    return {
        type: "TAG_SELECTED",
        payload: tag
    }
}
export const selectTag = (ref) => {
    return {
        type: "TAG_SELECTED",
        payload: ref
    }
}
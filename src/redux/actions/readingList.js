const addReadingList = (item) => {
  return {
    type: "ADD_READING_LIST",
    payload: item
  }
}
const deleteReadingList = () => {
  return {
    type: "UPDATE_READING_LIST",
    payload: [1,32]
  }
}
export {
  addReadingList,
  deleteReadingList
}

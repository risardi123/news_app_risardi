const addReadingList = (item) => {
  return {
    type: "ADD_READING_LIST",
    payload: item
  }
}
const deleteReadingList = (id) => {
  return {
    type: "DELETE_READING_LIST",
    book_mark_id: id
  }
}
export {
  addReadingList,
  deleteReadingList
}

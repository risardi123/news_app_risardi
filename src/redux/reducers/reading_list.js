const reading_list = (state=[], action) => {
  switch (action.type){
    case "ADD_READING_LIST":
      return [...state, action.payload]
    case "DELETE_READING_LIST":
      return state.reduce((p,c) => (c.book_mark_id !== action.book_mark_id && p.push(c),p),[])
    default:
      return state
  }
}
export default reading_list

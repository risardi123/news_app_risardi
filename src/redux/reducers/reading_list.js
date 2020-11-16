const reading_list = (state=[], action) => {
  switch (action.type){
    case "ADD_READING_LIST":
      return {
        state: [...state, ...action.payload]
      }
    case "UPDATE_READING_LIST":
      return {
        state:[...action.payload],
      }
    default:
      return state
  }
}
export default reading_list

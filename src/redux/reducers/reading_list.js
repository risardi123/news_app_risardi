const initial_state = {
  list: []
}
const reading_list = (state= initial_state, action) => {
  console.log("reduers: "+JSON.stringify(action.payload, null, 2))
  switch (action.type){
    case "ADD_READING_LIST":
      return state
    case "UPDATE_READING_LIST":
      return {
        state:[...action.payload],
      }
    default:
      return state
  }
}
export default reading_list

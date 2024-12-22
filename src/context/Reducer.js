const Reducer = (state, action) =>{
  switch(action.type){
    case "LOGIN_START":
      return{
        user: null,
        isfetching: true,
        error: false,
      }
    case "LOGIN_SUCCES":
      return{
        user: action.payload,
        isfetching: false,
        error: false,
      }
    case "LOGIN_FAILURE":
      return{
        user: null,
        isfetching: false,
        error: true,
      }
    default: throw new Error('что-то пошло не так');
  }
}

export default Reducer;
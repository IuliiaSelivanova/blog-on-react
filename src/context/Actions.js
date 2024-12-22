export const LoginStart = (userData) =>({
  type:"LOGIN_START"
})

export const LoginSucces = (user) =>({
  type:"LOGIN_SUCCES",
  payload: user,
})

export const LoginFailure = () =>({
  type:"LOGIN_FAILURE",
})
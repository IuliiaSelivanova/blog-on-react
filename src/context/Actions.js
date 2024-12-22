export const LoginStart = () =>({
  type:"LOGIN_START"
})

export const LoginSucces = (user) =>({
  type:"LOGIN_SUCCESS",
  payload: user,
})

export const LoginFailure = (error) =>({
  type:"LOGIN_FAILURE",
  payload: error || "Login failed",
})

export const Logout = () =>({
  type:"LOGOUT",
})
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

export const UpdateStart = () =>({
  type:"UPDATE_START"
})

export const UpdateSucces = (user) =>({
  type:"UPDATE_SUCCESS",
  payload: user,
})

export const UpdateFailure = (error) =>({
  type:"UPDATE_FAILURE",
  payload: error || "Update failed",
})
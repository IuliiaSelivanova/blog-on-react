import {
  LoginFailureAction,
  LoginStartAction,
  LoginSuccessAction,
  LogoutAction,
  UpdateFailureAction,
  UpdateStartAction,
  UpdateSuccessAction,
} from "../types/actionTypes";
import { IUser } from "../types/interface";

export const LoginStart = (): LoginStartAction => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (
  user: IUser,
): LoginSuccessAction => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (
  error?: string,
): LoginFailureAction => ({
  type: "LOGIN_FAILURE",
  payload: error || "Login failed",
});

export const Logout = (): LogoutAction => ({
  type: "LOGOUT",
});

export const UpdateStart = (): UpdateStartAction => ({
  type: "UPDATE_START",
});

export const UpdateSucces = (
  user: IUser,
): UpdateSuccessAction => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = (
  error?: string,
): UpdateFailureAction => ({
  type: "UPDATE_FAILURE",
  payload: error || "Update failed",
});

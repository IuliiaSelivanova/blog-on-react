import { IUser } from "./interface";

export interface UserState {
  user: IUser | null;
  isFetching: boolean;
  error: boolean | string;
}

export interface LoginStartAction {
  type: "LOGIN_START";
}
export interface LoginSuccessAction {
  type: "LOGIN_SUCCESS";
  payload: IUser;
}
export interface LoginFailureAction {
  type: "LOGIN_FAILURE";
  payload: string;
}
export interface LogoutAction {
  type: "LOGOUT";
}
export interface UpdateStartAction {
  type: "UPDATE_START";
}
export interface UpdateSuccessAction {
  type: "UPDATE_SUCCESS";
  payload: IUser;
}
export interface UpdateFailureAction {
  type: "UPDATE_FAILURE";
  payload: string;
}

export type UserActions =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | UpdateStartAction
  | UpdateSuccessAction
  | UpdateFailureAction;

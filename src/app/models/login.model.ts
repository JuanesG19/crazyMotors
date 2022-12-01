import { User } from "./user.model";

export interface Login{
  state: Boolean;
  userInfo: User;
}
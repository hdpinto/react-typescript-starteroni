import { actionTypes } from "../actions/actionTypes";

export default (state: string, action: any): string => {
  switch (action.type) {

    case(actionTypes.UPDATE_PAGE):
      return action.page;

    default:
      if (state) {
        return state;
      }
      return "";
  }
};
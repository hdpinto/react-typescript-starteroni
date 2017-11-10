import { actionTypes } from "./actionTypes";

export const updatePage = (page: string) => {
  return {
    type: actionTypes.UPDATE_PAGE,
    page,
  };
};
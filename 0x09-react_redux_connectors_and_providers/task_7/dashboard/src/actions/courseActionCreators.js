import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index: index,
  });

export const boundSelectCourse = (index) => {
  return (dispatch) => {
    dispatch(selectCourse(index));
  };
};

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export const boundUnSelectCourse = (index) => {
  return (dispatch) => {
    dispatch(unSelectCourse(index));
  };
};


import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export const boundSelectCourse = (index) => dispath(selectCourse(inde));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));


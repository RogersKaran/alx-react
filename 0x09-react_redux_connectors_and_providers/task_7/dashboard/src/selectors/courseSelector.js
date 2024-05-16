import { createSelector } from 'reselect';
import { List } from 'immutable';

const getAllCourses = state => state.courses;

export const courseEntitiesSelector = createSelector(
  getAllCourses,
  courses => List(courses.valueSeq())
);


import { selectCourse, unSelectCourse, fetchCourses, setCourses } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from "./courseActionTypes";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("tests for action creators", () => {
  it("should return right action payload and type when selectCourse is called", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("should return right action payload and type when unSelectCourse is called", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it("should dispatch SET_COURSES after successful fetch", () => {
    const courses = [{ id: 1, title: 'Course 1' }];
    const expectedActions = [{ type: SET_COURSES, courses }];
    
    const store = mockStore({ courses: [] });

    fetchMock.getOnce('dist/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' },
    });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


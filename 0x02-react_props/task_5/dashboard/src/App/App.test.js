import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('App Component', () => {
  it('should not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  describe('when isLoggedIn is true', () => {
    it('should not include Login component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('should include CourseList component', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
});


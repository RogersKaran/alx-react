import { courseEntitiesSelector } from './courseSelector';
import { fromJS } from 'immutable';

describe('courseEntitiesSelector', () => {
  it('should return all course entities as a List', () => {
    const state = {
      courses: fromJS({
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
      }),
    };

    const result = courseEntitiesSelector(state);
    expect(result.size).toBe(2);
    expect(result.get(0).get('title')).toBe('Course 1');
    expect(result.get(1).get('title')).toBe('Course 2');
  });
});


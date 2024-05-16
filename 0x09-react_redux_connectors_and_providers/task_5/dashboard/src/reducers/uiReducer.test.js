import uiReducer, { initialState } from './uiReducer';
import { YOUR_NEW_ACTION_TYPE } from '../actions/types';

describe('reducer', function () {
  it('initial state', function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('SELECT_COURSE', function () {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('DISPLAY_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle the new action correctly', () => {
  const action = {
   type: YOUR_NEW_ACTION_TYPE,
   // Add payload data here if needed
  };

  const newState = uiReducer(initialState, action);

  // Add your assertions to test the newState after the action
  // For example:
  // expect(newState).toEqual(/* Expected state after the action */);
  });
});


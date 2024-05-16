import { filterTypeSelected, getNotifications, getUnreadNotifications } from '../selectors/notificationSelector';

describe('Notification Selectors', () => {
  const initialState = {
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]
  };

  it('should return the selected filter type', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('should return the list of notifications', () => {
    expect(getNotifications(initialState)).toEqual(initialState.notifications);
  });

  it('should return the list of unread notifications', () => {
    expect(getUnreadNotifications(initialState)).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]);
  });
});


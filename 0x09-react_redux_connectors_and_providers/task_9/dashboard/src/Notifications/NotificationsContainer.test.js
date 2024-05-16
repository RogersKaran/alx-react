import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer', () => {
  it('should fetch notifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    const wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);

    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});


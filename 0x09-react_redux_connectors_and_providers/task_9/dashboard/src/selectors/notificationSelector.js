import { createSelector } from 'reselect';

const getFilter = state => state.filter;
const getNotifications = state => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  [getFilter, getNotifications],
  (filter, notifications) => {
    if (filter === 'urgent') {
      return notifications.filter(notification => notification.read === false && notification.urgent === true);
    } else {
      return notifications.filter(notification => notification.read === false);
    }
  }
);


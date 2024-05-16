import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';

const NotificationsContainer = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} />;
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => {
    // Add your notification fetching logic here
    dispatch({ type: 'FETCH_NOTIFICATIONS_REQUEST' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

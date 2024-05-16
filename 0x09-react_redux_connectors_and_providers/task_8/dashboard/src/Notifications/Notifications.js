import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import { connect } from "react-redux";
import { fetchNotifications, markAsRead } from "../actions/notificationActions";
import { setNotificationFilter } from '../actions/notificationActions';
import { getUnreadNotifications } from "../selectors/notificationSelectors";

const Notifications = ({ notifications, setNotificationFilter , markAsRead }) =>  {
  return (
    <React.Fragment>
      {!this.props.displayDrawer ? (
        <div
          className={css(styles.menuItem)}
          onClick={() => {
            this.props.handleDisplayDrawer();
          }}
        >
          <p>Your notifications</p>
        </div>
      ) : (
        <div className={css(styles.Notifications)}>
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              top: "3px",
              cursor: "pointer",
              outline: "none",
            }}
            aria-label="Close"
            onClick={(e) => {
              console.log("Close button has been clicked");
              this.props.handleHideDrawer();
            }}
          >
            <img src={closeIcon} alt="close icon" width="10px" />
          </button>
	  <p>Here is the list of notifications</p>
          <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
          <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
          <ul>
            {notifications.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              notifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={markAsRead}
                  id={val.id}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);


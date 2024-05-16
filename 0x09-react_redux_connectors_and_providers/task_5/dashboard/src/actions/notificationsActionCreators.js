import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "../constants/actionTypes";

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    payload: isLoading
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: notifications
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch("./notifications.json")
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data));
	dispatch(setLoadingState(false));
      })
      .catch(error => {
        console.error("Error fetching notifications:", error);
	dispatch(setLoadingState(false));
      });
  };
};

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const boundMarkAsRead =(index) => dispatch(markAsRead(index));

export const setNotificationsFilter =  (filter => {
  return {
    type: SET_TYPE_FILTERS,
    filter,
  }
}

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));


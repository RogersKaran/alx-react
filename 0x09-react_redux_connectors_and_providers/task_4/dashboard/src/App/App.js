import React from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { AppContext } from '../App/AppContext';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { css } from 'aphrodite';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import { mapStateToProps } from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const App = ({ displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) => {
  const state = {
    user: fromJS({ isLoggedIn: false }),
    logOut: () => null,
    listNotifications: fromJS([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ]),
  };

  const markNotificationAsRead = (id) => {
    markNotificationAsRead(id);
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        logout: state.logOut,
      }}
    >
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              markNotificationAsRead={markNotificationAsRead}
              listNotifications={state.listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          {state.user.get('isLoggedIn') ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
              ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    </AppContext.Provider>
  );
};

App.propTypes = {
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  displayDrawer: false,
  displayNotificationDrawer: () => null,
  hideNotificationDrawer: () => null,
  login: () => null,
};

const mapDispatchToProps = {
 login: loginRequest,
};

export default connect(null, mapDispatchToProps)(App);


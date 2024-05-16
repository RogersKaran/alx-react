import React from "react";
import { connect } from 'react-redux';
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { logout } from "../actions";

const Header = ({ user, logout }) {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </>
  );
};

const mapStateToProps = state => {
 return {
  user: state.user // Map the user props to the user within the Redux state
 };
};

export default connect(mapStateToProps, { logout })(Header);


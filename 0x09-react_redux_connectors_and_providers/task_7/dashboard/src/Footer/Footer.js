import React, { useContext } from "react";
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = ({ user }) => {
  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
 return {
  user: state.user // Map the user props to the user within the Redux state
 };
};

export default connect(mapStateToProps)(Footer); // Connect Footer component to the mapStateToProps function


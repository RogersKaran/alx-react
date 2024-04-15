import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;

  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd
  );

  if (isHeader === true) {
    //
    if (textSecondCell === null) {
      element = <th colSpan="2">{textFirstCell}</th>;
    } else {
      element = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
    //
  } else if (isHeader === false) {
    element = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  let isHeaderStyle;

  if (isHeader) isHeaderStyle = headerRowStyles;
  else isHeaderStyle = rowStyles;

  return <tr style={isHeaderStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid ${cssVars.borderTableColor}`,
    borderBottom: `1px solid ${cssVars.borderTableColor}`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListThSpan2: {
    textAlign: "center",
  },

  CourseListTd: {
    textAlign: "left",
  },
});

export default CourseListRow;import React from "react";


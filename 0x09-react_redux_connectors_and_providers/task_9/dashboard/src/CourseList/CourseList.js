import React from "react";
import { connect } from "react-redux";
import { fetchCourses, selectCourse, unSelectCourse } from "./actions/courseActionCreators";
import { getListCourses } from "./selectors/courseSelectors";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import { css } from "aphrodite";

function CourseList({ listCourses, fetchCourses, selectCourse, unSelectCourse }) {
  useEffect(() => {
    fetchCourses();
  }, []);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.object),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state),
});

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);


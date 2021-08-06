import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createLogicalOr } from 'typescript';
import useTeacherApi from '../common/useTeachersApi';
import ThemeContext from '../theme-context';
import styles from './course-list.module.css'
import DeleteTeacher from './DeleteTeacher';


export default function CourseList() {
  const theme = useContext(ThemeContext)
  const { teachers, error } = useTeacherApi()

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    )
  }

  const refreshList = () => {
    console.log('refetch')
  }

  return (
    <>
      <h2>Teachers</h2>
      <h2>{theme}</h2>
      <ul>
        {teachers && teachers.map((teacher) => (
          <li className={styles.redBackground} key={teacher.id}>
            <h4>
              {teacher.title} Thought by {teacher.teacher}
              <DeleteTeacher id={teacher.id} refreshTeacherList={refreshList} />
              <Link to={`/editTeacher/${teacher.id}`}>
                Edit Teacher
              </Link>
            </h4>

          </li>
        ))}
      </ul>
    </>
  );
}

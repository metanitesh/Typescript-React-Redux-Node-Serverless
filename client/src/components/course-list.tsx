import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTeacherApi from '../common/useTeachersApi';
import ThemeContext from '../theme-context';
import styles from './course-list.module.css'
import Teacher from './Teacher';



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

  return (
    <>
      <h2>Teachers</h2>
      <h2>{theme}</h2>
      <ul data-testid="teachers-data">
        {teachers && teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </ul>
    </>
  );
}

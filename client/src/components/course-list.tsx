import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTeacherApi from '../common/useTeachersApi';
import EditTeacher from '../EditTeacher';
import styles from './course-list.module.css'
import DeleteTeacher from './DeleteTeacher';


export default function CourseList() {
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
      <ul>
        {teachers && teachers.map((teacher) => (
          <li className={styles.redBackground} key={teacher.id}>
            <h4>
              {teacher.title}
              <DeleteTeacher id={teacher.id} />
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

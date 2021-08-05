import React, { useEffect, useState } from 'react';
import useTeacherApi from '../common/useTeachersApi';
import styles from './course-list.module.css'


export default function CourseList() {
  const {teachers, error} = useTeacherApi()

  if(error){
    return(
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
            <button>edit</button>
            <button>delete</button>
          </h4>
          
        </li>
      ))}
    </ul>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import styles from './course-list.module.css'
import styled from 'styled-components'
import { api } from './config';
import useTeacherApi from './useTeachersApi';

export default function CourseList() {
  const [teachers] = useTeacherApi()

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

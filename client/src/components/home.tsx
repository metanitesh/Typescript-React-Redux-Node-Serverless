import React from 'react';
import { Link } from 'react-router-dom';
import CourseList from './course-list';

export default function Home() {
  return (
    <>
      <CourseList />
      <Link to ="/addTeacher"> Add New Teacher</Link>
    </>
  );
}

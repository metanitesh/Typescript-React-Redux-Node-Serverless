import React from 'react';
import { Link } from 'react-router-dom';
import Delete from './Delete';

type CoursesListProps = {
  courses: {
    id: number;
    courseTitle: string;
    teacherName: string;
  }[],
  handleDelete: (id: number) => void
}

export default function Home(props: CoursesListProps) {
  const { courses, handleDelete } = props;
  return (
    <>
      {courses.map((course) => (
        <li key={course.id}>{course.courseTitle} thought by {course.teacherName}
          <Link to={`/edit-course/${course.id}`}> Edit Course</Link>
          <Delete id={course.id} handleDelete={handleDelete} />
        </li>
      ))}
    </>
  );
}

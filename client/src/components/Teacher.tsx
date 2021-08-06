import React from 'react';
import { Link } from 'react-router-dom';
import DeleteTeacher from './DeleteTeacher';

type TeacherType = {
  teacher: {
    id: number;
    title: string;
    teacher: string;
  }
}


export default function Teacher({ teacher }: TeacherType) {
  console.log('---', teacher)
  return (
    <>
      <li >
        <h4>
          <span data-testid="teacher-info">{teacher.title} Thought by {teacher.teacher}</span>
          <DeleteTeacher id={teacher.id} />
          <Link to={`/editTeacher/${teacher.id}`}>
            Edit Teacher
          </Link>
        </h4>

      </li>
    </>
  );
}

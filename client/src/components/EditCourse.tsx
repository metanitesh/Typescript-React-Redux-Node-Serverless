import React, { useEffect, useState } from 'react';
import UserInfoForm from './UserInfoForm'
import { useParams } from 'react-router-dom'
import { getCourseById } from '../common/api';

type EditCourseProps = {
  editCourse: (id: number, courseTitle: string, teacherName: string) => void;
}

export default function EditCourse({ editCourse }: EditCourseProps) {

  const { id } = useParams<{ id: string }>();
  const [teacherName, setTeacherName] = useState('')
  const [courseTitle, setCourseTitle] = useState('')

  useEffect(() => {
    getCourseById(+id)
      .then(course => {
        setTeacherName(course.teacher_name)
        setCourseTitle(course.course_title)
      }).catch(err => console.log)
  }, [id])

  console.log(teacherName, courseTitle)
  const handleSubmit = (courseTitle: string, teacherName: string) => {
    console.log(courseTitle, teacherName)
    editCourse(+id, courseTitle, teacherName)
  }
  return (
    <>
      <UserInfoForm teacherNameProp={teacherName} courseTitleProp={courseTitle} handleSubmit={handleSubmit} />
    </>
  )
}

import React, { useEffect, useState } from 'react';

type UserInfoFormPropsType = {
  courseTitleProp?: string;
  teacherNameProp?: string;
  handleSubmit: (courseTitle: string, teacherName: string) => void
}

export default function UserInfoForm({ teacherNameProp = '', courseTitleProp = '', handleSubmit }: UserInfoFormPropsType) {
  console.log("1", teacherNameProp)
  const [teacherName, setTeacherName] = useState(teacherNameProp)
  const [courseTitle, setCourseTitle] = useState(courseTitleProp)
  useEffect(() => {
    setTeacherName(teacherNameProp)
    setCourseTitle(courseTitleProp)
  }, [teacherNameProp, courseTitleProp])
  // console.log(courseTitle)
  return (
    <form onSubmit={(event) => {
      handleSubmit(courseTitle, teacherName);
      event.preventDefault()
      console.log('submit')
    }}>
      <label>
        Course Title: <input type="text" placeholder="Javascript" value={courseTitle}
          onChange={(event) => setCourseTitle(event.target.value)} />
      </label>
      <label >
        Teacher Name: <input type="text" placeholder="Nitesh Sharma" value={teacherName}
          onChange={(event) => setTeacherName(event.target.value)} />
      </label>
      <button>Submit</button>
    </form >
  );
}

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getAllCourses, addCourse, deleteCourse, updateCourse } from './common/api';
import EditCourse from './components/EditCourse';
import Home from './components/Home';
import Nav from './components/Nav';
import UserInfoForm from './components/UserInfoForm';


type APIresponse = {
  id: number;
  course_title: string;
  teacher_name: string;
}

function transformData(dataSet: APIresponse[]): Course[] {
  return dataSet.map(data => ({
    id: data.id,
    courseTitle: data.course_title,
    teacherName: data.teacher_name
  }))
}

type Course = {
  id: number;
  courseTitle: string;
  teacherName: string;
}


export default function App() {

  const [courses, setCourses] = useState<Course[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [reloadData, callReloadData] = useState(Math.random())

  useEffect(() => {

    setLoading(true)
    getAllCourses()
      .then((data) => {
        const transformedData = transformData(data)
        setCourses(transformedData);
        setLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [reloadData])

  function handleAddCourse(courseTitle: string, teacherName: string) {
    console.log('ADD course')
    addCourse(courseTitle, teacherName).then(() => {
      console.log('ADD course Reload')
      callReloadData(Math.random())
    })

  }

  function handleDelete(id: number) {
    deleteCourse(id).then(() => {
      callReloadData(Math.random())
    })
  }

  function editCourse(id: number, courseTitle: string, teacherName: string) {

    updateCourse(id, courseTitle, teacherName).then(() => {
      callReloadData(Math.random())
    }).catch(console.log)
  }

  return (
    <Router>
      <div>
        <div>{loading && "Loading...."}</div>
        <Nav></Nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home courses={courses} handleDelete={handleDelete} />
          </Route>
          <Route exact path="/add-new-course">
            <UserInfoForm handleSubmit={handleAddCourse} />
          </Route>

          <Route exact path="/edit-course/:id">
            <EditCourse editCourse={editCourse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { api } from './common/config';

export default function EditTeacher() {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${api}/teachers/${id}`)
      const { teacher, title } = await res.json()
      console.log(teacher, title)
      setName(teacher)
      setCourse(title)
    }
    fetchData()

    // setCourse(title)
    //   .then(res => res.json())
    //   .then(({ teacher, title }) => {

    //   })
    //   .catch(console.log)
  }, [id])

  return (
    <form onSubmit={(event) => {
      event.preventDefault()


      fetch(`${api}/teachers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teacher: name, title: course })
      })
        .then(res => res.text())
        .then((data) => {
          console.log(data)
          history.push("/")
        })
        .catch(console.log)
    }}>
      <label>
        name: <input type="text" value={name} onChange={(event) => {
          setName(event.target.value)
        }} />
      </label>
      <label>
        course: <input type="text" value={course} onChange={(event) => {
          setCourse(event.target.value)
        }} />
      </label>
      <button>Update</button>
    </form>
  );
}

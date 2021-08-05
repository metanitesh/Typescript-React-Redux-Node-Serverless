import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { api } from '../common/config';

export default function AddTeacher() {

  const [teacher, setTeacher] = useState('')
  const [title, setTitle] = useState('')
  const history = useHistory()

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      fetch(`${api}/teachers`, {
        method: 'POST',
        body: JSON.stringify({
          teacher,
          title
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())
        .then(() => {
          setTitle('')
          setTeacher('')
          history.push("/")
        })
        .catch(console.log)

    }}>
      <label>Name:
        <input type="text"
          placeholder="teacher name"
          value={teacher}
          onChange={(event) => setTeacher(event.target.value)} />
      </label>

      <label>Course Title:
        <input type="text"
          placeholder="course name"
          value={title}
          onChange={(event) => setTitle(event.target.value)} />
      </label>

      <button disabled={!title || !teacher}>Add Teacher</button>
    </form>
  );
}

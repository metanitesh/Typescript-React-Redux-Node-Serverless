import React, { useEffect, useState, useReducer } from 'react';
import { useHistory } from 'react-router';
import { api } from '../common/config';

type StateType = {
  title?: string,
  teacher?: string
}

type ActionType = {
  type: string,
  data: StateType
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'setTeacher':
      return {
        ...state,
        teacher: action.data.teacher
      }

    case 'setTitle':
      return {
        ...state,
        title: action.data.title
      }

    default:
      return state
  }
}

export default function AddTeacher() {

  const [state, dispatch] = useReducer(reducer, {
    title: '',
    teacher: ''
  })

  const [teacher, setTeacher] = useState('')
  const [title, setTitle] = useState('')
  const history = useHistory()

  return (
    <form onSubmit={(event) => {
      const { title, teacher } = state;
      event.preventDefault();
      if (teacher?.trim() === '' || title?.trim() === '') {
        console.log('No empty string')
        return
      }
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
          dispatch({
            type: 'setTeacher',
            data: {
              teacher: ''
            }
          })

          dispatch({
            type: 'setTitle',
            data: {
              title: ''
            }
          })
          history.push("/")
        })
        .catch(console.log)

    }}>
      <label>Name:
        <input data-testid='teacher-name' type="text"
          placeholder="teacher name"
          value={state.teacher}
          onChange={(event) => {
            dispatch({
              type: 'setTeacher',
              data: {
                teacher: event.target.value
              }
            })
          }} />
      </label>

      <label>Course Title:
        <input type="text"
          placeholder="course name"
          value={state.title}
          onChange={(event) => {
            dispatch({
              type: 'setTitle',
              data: {
                title: event.target.value
              }
            })
          }} />
      </label>

      <button disabled={!state.title || !state.teacher}>Add Teacher</button>
    </form>
  );
}

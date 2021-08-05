import React from 'react';
import { useHistory } from 'react-router';
import { api } from '../common/config';

type DeleteTeacherProps = {
  id: number
}

export default function DeleteTeacher({ id }: DeleteTeacherProps) {
  const history = useHistory()
  return (
    <>
      <button onClick={() => {
        fetch(`${api}/teachers/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.text()) // or res.json()
          .then(res => {
            history.push("/?id=2")
          })

      }}>Delete</button>
    </>
  );
}

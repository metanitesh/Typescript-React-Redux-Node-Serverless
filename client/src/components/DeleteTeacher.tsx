import React from 'react';
import { useHistory } from 'react-router';
import { api } from '../common/config';

type DeleteTeacherProps = {
  id: number,
  refreshTeacherList: () => void
}

export default function DeleteTeacher({ id, refreshTeacherList }: DeleteTeacherProps) {
  const history = useHistory()
  return (
    <>
      <button onClick={() => {
        fetch(`${api}/teachers/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.text()) // or res.json()
          .then(res => {
            refreshTeacherList()
          })

      }}>Delete</button>
    </>
  );
}

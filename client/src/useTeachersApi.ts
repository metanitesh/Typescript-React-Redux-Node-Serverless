import React, { useEffect, useState } from 'react';
import { api } from './config';

type Teacher = {
  id: number;
  title: string;
  teacher: string;
}

export default function useTeacherApi() {
  const [teacher, setTeacher] = useState<Teacher[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${api}/teachers`)
      .then(res => res.json())
      .then((data) => {
        setTeacher(data)
      })
      .catch(err => setError(err))
  }, [])

  return [teacher]
}

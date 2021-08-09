import { API_URL } from "./config"


export const getAllCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`)
    const result = await response.json()
    return result;
  } catch {
    return 'an error occured'
  }

}

export const getCourseById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/courses/${id}`)
    const result = await response.json()
    return result;
  } catch {
    return 'an error occured'
  }

}

export const updateCourse = async (id: number, courseTitle: string, teacherName: string) => {
  const response = await fetch(`${API_URL}/courses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      course_title: courseTitle,
      teacher_name: teacherName
    })
  })

  const result = await response.json()
  console.log(result)
  return result;
  // .then(res => res.json())
  // .then((data) => {
  //   console.log(data)
  //   history.push("/")
  // })
  // .catch(console.log)

}

export const addCourse = async (courseTitle: string, teacherName: string) => {
  console.log('api call 1')

  const response = await fetch(`${API_URL}/courses`, {
    method: 'POST',
    body: JSON.stringify({
      course_title: courseTitle,
      teacher_name: teacherName
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

  const result = await response.json()
  console.log(result)
  return result

}

export const deleteCourse = async (id: number) => {

  const response = await fetch(`${API_URL}/courses/${id}`, {
    method: 'DELETE',
  })

  const result = await response.json()
  console.log(result)


}
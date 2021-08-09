const db = require('./config')

async function getCourses(){
  console.log('GET COURSES')
  const results = await db.query(`SELECT * FROM courses`)
  .catch(console.log);
  return results.rows;
}

async function getCoursesById(id){
  console.log('GET COURSE BY ID')
  const result = await db.query(`SELECT * FROM courses WHERE ID = ($1)`, [id])
  .catch(console.log);
  // console.log(result)
  return result.rows[0];
}

async function addCourse({course_title, teacher_name}){
  console.log('INSERT COURSE')
  const result = await db
  .query(`INSERT INTO courses ("course_title", "teacher_name") VALUES ($1, $2)`, [course_title, teacher_name])
  .catch((error) => {
    throw new Error(error);
  })
  
  return result
}

async function updateCourse(id, course_title, teacher_name){
  console.log('UPDATE COURSE')
  const result = await db
  .query(`UPDATE courses SET course_title=$1, teacher_name=$2 WHERE id=$3`, [course_title, teacher_name, id])
  .catch(console.log)
  
  return result
}

async function deleteCourse(id){
  console.log('DELETE COURSE')
  const result = await db
  .query(`DELETE FROM courses WHERE id = ($1)`, [id])
  .catch(console.log)
  
  return result
}

 module.exports = {
   getCourses,
   addCourse,
   getCoursesById,
   updateCourse,
   deleteCourse
 }

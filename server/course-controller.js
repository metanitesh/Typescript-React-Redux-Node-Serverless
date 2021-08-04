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

async function addCourse({title, teacher}){
  console.log('INSERT COURSE')
  const result = await db
  .query(`INSERT INTO courses (title, teacher) VALUES ($1, $2)`, [title, teacher])
  .catch(console.log)
  
  return result
}

async function updateCourse(id, title, teacher){
  console.log('UPDATE COURSE')
  const result = await db
  .query(`UPDATE courses SET title=$1, teacher=$2 WHERE id=$3`, [title, teacher, id])
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

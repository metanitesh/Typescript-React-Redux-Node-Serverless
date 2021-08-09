const express = require('express')
const app = express()
var cors = require('cors')
const coursesController = require('./course-controller')

app.use(express.json());
app.use(cors())

const port = 8080

app.get('/', (req, res) => res.json({
  status: 'success',
  message: 'Welcome to course API'
}))

app.get('/courses', async (req, res) => {
  const courses = await coursesController.getCourses()
  res.json(courses)
})

app.get('/courses/:id', async (req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.json({
      status: 'failed',
      message: 'Invalid id'
    })
  }

  const result = await coursesController.getCoursesById(id)
  
  if(result){
    res.json(result)
  }else{
    res.json({
      status: 'failed',
      message: 'No record found for the Id'
    })
  }
})


app.post('/courses', async(req, res) => {
  console.log(req.body)
  console.log('in post')
  if(!req.body['course_title'] || !req.body['teacher_name']){
    return res.send({
      status: 'failed',
      message: 'Invalid data'
    })
  }

  const result = await coursesController.addCourse(req.body)
  .catch(error => {
    return res.json({
      status: 'failed',
      message: 'internal error occured'
    })
  })

  return res.json({
    status: 'success',
    message: 'record inserted'
  })
})

app.put('/courses/:id', async(req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.json({
      status: 'failed',
      message: 'No record found for the ID'
    })
  }

  const result = await coursesController.getCoursesById(id)
  
  if(!result){
    return res.json({
      status: 'failed',
      message: "No record found for the ID"
    })
  }

  const {course_title, teacher_name} = req.body

  if(!course_title || !teacher_name){
    return res.json({
      status: 'failed',
      message: 'Invalid data'
    })
  }

  
  const output = await coursesController.updateCourse(id, course_title, teacher_name)
  .catch((err) => {
    return res.json({
      status: 'failed',
      message: 'internal error occured'
    })
  })

  console.log(result)
  
  res.json({
    status: 'success',
    message: 'record updated successfully'
  })
  
})

app.delete('/courses/:id', async(req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.json({
      status: 'failed',
      message: 'Invalid id'
    })
  }

  await coursesController.deleteCourse(id)
  .catch(err => {
    res.json({
      status: 'failed',
      message: 'an internal error occured'
    })
  })
  res.json({
    status: 'success',
    message: 'Record deleted successfully'
  })
})



app.listen(port, () => console.log(`Example app listening on port port! ${port}`))


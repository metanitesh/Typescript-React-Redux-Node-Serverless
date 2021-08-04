const express = require('express')
const app = express()
const coursesController = require('./course-controller')

app.use(express.json());
const port = 3000

app.get('/', (req, res) => res.send('Welcome to courses API'))

app.get('/teachers', async (req, res) => {
  const courses = await coursesController.getCourses()
  res.json(courses)
})

app.get('/teachers/:id', async (req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.send('Invalid Id')
  }

  const result = await coursesController.getCoursesById(id)
  
  if(result){
    res.json(result)
  }else{
    res.send('No record found')
  }
})


app.post('/teachers', async(req, res) => {
  
  if(!req.body.title || !req.body.teacher){
    return res.send("Invalid Data")
  }

  await coursesController.addCourse(req.body)
  res.send('ok')
})

app.put('/teachers/:id', async(req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.send('Id must be a number')
  }
  
  console.log(id)
  const result = await coursesController.getCoursesById(id)
  console.log(result)
  if(!result){
    res.send('No record for this ID')
  }

  const {title, teacher} = req.body

  if(!req.body.title || !req.body.teacher){
    return res.send("Invalid Data")
  }

  console.log(req.body)
  await coursesController.updateCourse(id, title, teacher)
  res.send('ok')
  
})

app.delete('/teachers/:id', async(req, res) => {
  const {id} = req.params;

  if(isNaN(+id)){
    res.send('Id must be a number')
  }

  await coursesController.deleteCourse(id)
  res.send('ok')
})



app.listen(port, () => console.log(`Example app listening on port port! ${port}`))


import express from 'express'

import {getUsers, getUser, createUser} from './database.js'

const app = express()
app.use(express.json())

app.get('/users:id', async (req,res) => {
  const id = req.params.id
  const users = await getUser(id)
  res.send(users)
})

app.post('/index.html', async (req,res) => {
  
  const user = createUser(`${req.body.username},${req.body.password}, ${req.body.email}`)
  res.send(user)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


  app.listen(8080, () => {
    console.log('Server is running on port 8080')
  })
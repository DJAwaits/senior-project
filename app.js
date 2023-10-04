import express from 'express'

import {getUsers, getUser, createUser} from './database.js'

const app = express()
app.use(express.json())

//app.get('/', async (req,res) => {
  //const id = req.params.id
  //const users = await getUser(id)
  //res.send(users)
//})

app.post('/register', async (req,res) => {
  
  const user = await createUser(`${req.body.username},${req.body.password},${req.body.email}`)
  console.log(users)
  //const user = createUser('josgsrg,wregwerg,wgwrg@grwsg')
  
  
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


  //app.listen(3306, () => {
    //console.log('Server is running on port 3306')
  //})
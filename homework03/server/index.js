const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/celebrity', db.getCelebrities)
app.get('/celebrity/:id', db.getCelebrityById)
app.post('/celebrity', db.createCelebrity)
app.put('/celebrity/:id', db.updateCelebrity)
app.delete('/celebrity/:id', db.deleteCelebrity)
app.get('/sighting', db.getSightings)
app.get('/sighting/:id', db.getSightingById)
app.post('/sighting', db.createSighting)
app.put('/sighting/:id', db.updateSighting)
app.delete('/sighting/:id', db.deleteSighting)
app.get('/sighting/celebrity/:celebrityId', db.getSightingByCelebrityId)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pgithsli',
  host: 'salt.db.elephantsql.com',
  database: 'pgithsli',
  password: 'IyT1o_L7Uiz2Mfyt0a7vXwdkWVGNyYqH',
  port: 5432,
})

const getCelebrities = (request, response) => {
    pool.query('SELECT * FROM celebrity ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getCelebrityById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM celebrity WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createCelebrity = (request, response) => {
    const { firstName, lastName, career, country } = request.body
  
    pool.query('INSERT INTO celebrity (first_name, last_name, career, country) VALUES ($1, $2, $3, $4)', [firstName, lastName, career, country], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Celebrity added with ID: ${results.insertId}`)
    })
  }

  const updateCelebrity = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstName, lastName, career, country } = request.body
  
    pool.query(
      'UPDATE celebrity SET first_name = $1, last_name = $2, career = $3, country = $4 WHERE id = $5',
      [firstName, lastName, career, country, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Celebrity modified with ID: ${id}`)
      }
    )
  }

  const deleteCelebrity = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM celebrity WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Celebrity deleted with ID: ${id}`)
    })
  }

  const getSightings = (request, response) => {
    pool.query('SELECT * FROM celebrity_sighting ORDER BY time_seen DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSightingById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM celebrity_sighting WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createSighting = (request, response) => {
    const { celebrityId, time, location, notes } = request.body
  
    pool.query('INSERT INTO celebrity_sighting (celebrity_id, time_seen, celebrity_location, notes) VALUES ($1, $2, $3, $4)', [celebrityId, time, location, notes], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Sighting added with ID: ${results.insertId}`)
    })
  }

  const updateSighting = (request, response) => {
    const id = parseInt(request.params.id)
    const { celebrityId, time, location, notes } = request.body
  
    pool.query(
      'UPDATE celebrity SET celebrity_id = $1, time_seen = $2, celebrity_location = $3, notes = $4 WHERE id = $5',
      [celebrityId, time, location, notes, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Sighting modified with ID: ${id}`)
      }
    )
  }

  const deleteSighting = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM celebrity_sighting WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Sighting deleted with ID: ${id}`)
    })
  }

  const getSightingByCelebrityId = (request, response) => {
    const celebrityId = parseInt(request.params.celebrityId)
  
    pool.query('SELECT time_seen, celebrity_location, notes FROM celebrity, celebrity_sighting WHERE celebrity.id = celebrity_id AND celebrity_id = $1 ORDER BY time_seen DESC', [celebrityId], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getCelebrities,
    getCelebrityById,
    createCelebrity,
    updateCelebrity,
    deleteCelebrity,
    getSightings,
    getSightingById,
    createSighting,
    updateSighting,
    deleteSighting,
    getSightingByCelebrityId,
  }
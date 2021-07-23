const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET all movies from database - provided by Prime
router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// GET movies by ID (for clicked on individual movie posters and routing to details component)
// Details page needs to show ALL details including ALL genres (title, poster, description, genres,)
router.get('/:id', (req, res) => {
  const detailsId = req.params.id;

  // This query returns all details to be displayed on details page.
  // Returns multiple genres for some movies.
  const detailsQuery = 
  `SELECT title, description, poster, genres.name
  FROM movies
  JOIN movies_genres on movies_genres.movie_id = movies.id
  JOIN genres ON genres.id = movies_genres.genre_id;
  WHERE movies.id = $1;`;
  pool.query(detailsQuery, [detailsId])
    .then( result => {
      console.log(`Details GET working`);
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR getting movie details', error);
      res.sendStatus(500)
    })
});

// POST a new movie - provided by Prime
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;
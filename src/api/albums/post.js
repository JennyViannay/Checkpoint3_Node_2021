const dbConnect = require('../../mysql-connect/connect');

module.exports = (req, res) => {
  const album = [req.body.title, req.body.genre, req.body.picture, req.body.artist]
  dbConnect.query('INSERT INTO album (title, genre, picture, artist) VALUES (?,?,?,?)', album, (err, results) => {
    if (err) res.json(err).status(500);
    else {
      console.log(results.insertId)
      dbConnect.query('SELECT * FROM album WHERE id = ?', results.insertId, (error, result) => {
        if (error) res.json(error).status(500);
        else res.status(201).json(result[0]);
      })
    }
  })
};
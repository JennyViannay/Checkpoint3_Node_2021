const dbConnect = require('../../mysql-connect/connect');

module.exports = (req, res) => {
  const track = [req.body.title, req.body.youtube_url, req.body.id_album]
  dbConnect.query('INSERT INTO track (title, youtube_url, id_album) VALUES (?,?,?)', track, (err, results) => {
    if (err) res.json(err).status(500);
    else {
      console.log(results.insertId)
      dbConnect.query('SELECT * FROM track WHERE id = ?', results.insertId, (error, result) => {
        if (error) res.json(error).status(500);
        else res.status(201).json(result[0]);
      })
    }
  })
};
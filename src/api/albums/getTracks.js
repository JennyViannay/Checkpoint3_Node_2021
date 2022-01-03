const dbConnect = require('../../mysql-connect/connect')

module.exports = (req, res) => {
  const id = req.params.id
  dbConnect.query('SELECT * FROM track WHERE id_album = ?', id, (err, results) => {
    if (err) res.json(err).status(204);
    else res.json(results).status(200);
  })
};

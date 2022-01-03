const dbConnect = require('../../mysql-connect/connect')

module.exports = (req, res) => {
  const id = req.params.id;
  dbConnect.query('SELECT * FROM track WHERE id = ?', id, (err, results) => {
    if (err) res.json(err).status(500);
    else results[0] ? res.json(results[0]).status(200) : res.status(404).json('Not Found');
  })
};
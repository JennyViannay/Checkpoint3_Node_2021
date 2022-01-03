const dbConnect = require('../../mysql-connect/connect');

module.exports = (req, res) => {
  dbConnect.query('UPDATE album SET title = ? WHERE id = ?', [req.body.title, req.params.id], (err, results) => {
    if (err) res.json(err).status(500);
    else res.status(204).json("No content");
  })
};
const dbConnect = require('../../mysql-connect/connect')

module.exports = (req, res) => {
  dbConnect.query('DELETE FROM album WHERE id = ?', req.params.id, (err) => {
    if (err) res.json(err).status(500);
    res.status(204).json("No content");
  })
};
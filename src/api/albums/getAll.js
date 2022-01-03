const dbConnect = require('../../mysql-connect/connect')

module.exports = (req, res) => {
  dbConnect.query('SELECT * FROM album', (err, results) => {
    if (err) res.json(err).status(500);
    else res.json(results).status(200);
  })
};

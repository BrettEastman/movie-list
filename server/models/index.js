var db = require('../db');

module.exports = {
  getAll: function(callback) {
    let queryStr = 'SELECT * FROM movies';
    db.connection.query(queryStr, function(err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  create: function(obj, callback) {
    let queryStr = 'INSERT INTO movies (title, watched) VALUES (?, ?)';
    db.connection.query(queryStr, [obj.title, obj.watched], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  changeWatched: function(data, id, callback) {
    let queryStr = 'UPDATE movies SET watched=? WHERE id=?';
    let watchNum;
    data.watched === 1 ? watchNum = 0 : watchNum = 1;
    db.connection.query(queryStr, [watchNum, id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
};
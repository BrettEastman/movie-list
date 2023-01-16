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
  changeWatched: function(obj, callback) {
    let queryStr = 'UPDATE movies SET watched=? WHERE title=?';
    let watchNum;
    obj.watched === 1 ? watchNum = 0 : watchNum = 1;
    db.connection.query(queryStr, [watchNum, obj.title], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
};
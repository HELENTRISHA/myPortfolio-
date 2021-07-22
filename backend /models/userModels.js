const connection = require("../db/conf");
const userModels = {};

userModels.userLogin = (clientfullname, callback) => {
  connection.query(
    `SELECT * FROM contacts WHERE clientfullname= ?`,
    [clientfullname],
    (err, results) => {
      callback(err, results);
    }
  );
};
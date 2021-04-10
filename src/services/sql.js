const mysql = require('mysql');
const mysqlConfig = require('../config/database.config')
const connection = mysql.createConnection(mysqlConfig);

sql = ({query = '', params = []}) => new Promise((resolve, reject) => {
    connection.query(query, params, function (error, results, fields) {
        if (error) {
            reject(error)
            return
        }
        resolve(results)
    });
})

module.exports = {sql}

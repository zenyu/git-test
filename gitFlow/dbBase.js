/**
 * @author ZenYu
 * @time 2016/11/15.
 */
'use strict';
let mysql = require('mysql');
// db
class DB {
    constructor(config) {
        this.pool = mysql.createPool(config)
    }
    query() {
        return this.pool.query.apply(this.pool, arguments)
    }
}
module.exports = DB;
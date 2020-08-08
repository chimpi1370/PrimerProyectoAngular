import mysql from 'promise-mysql';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(async (connection: mysql.PoolConnection) => {
     (await pool).releaseConnection(connection);
     console.log('DB is connected'); 
});

export default pool;
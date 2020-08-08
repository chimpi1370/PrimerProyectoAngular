import mysql from 'promise-mysql';
import keys from './keys';

// donde podria encontrar información de estos metodos y propiedades
const pool = mysql.createPool(keys.database);

pool.getConnection()//TODO tengo dudas con el metodo getConnection, me arroja error.
    .then(async (connection: mysql.PoolConnection) => {
     (await pool).releaseConnection(connection);
     console.log('DB is connected'); 
});

export default pool;
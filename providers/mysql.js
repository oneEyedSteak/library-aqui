import serverlessMysql from 'serverless-mysql';

const {
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME,
} = process.env;

export default serverlessMysql({
    config: {
        host: '127.0.0.1',
        database: 'lib_aqui',
        user: 'root',
        password: 'password',
    }
})
module.exports = {
    development: {
        username: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASS,
        database: process.env.LOCAL_DB_DATABASE,
        host: process.env.LOCAL_DB_HOST,
        port: process.env.LOCAL_DB_PORT
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },
    production: {
        // use_env_variable: ,
        // dialect:
    }
};

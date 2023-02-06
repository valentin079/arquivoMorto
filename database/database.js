const Sequelize = require ('sequelize');

const connection = new Sequelize('arquivoMorto', 'root', 'PL3459qa$', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
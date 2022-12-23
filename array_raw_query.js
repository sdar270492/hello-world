const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'hello_world_db',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

sequelize.query(
    'SELECT * FROM students WHERE student_id = ?',
    {
      replacements: ['07a94006-0279-477a-a89f-f4b4ee2a5622'],
      type: sequelize.QueryTypes.SELECT
    }
).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});
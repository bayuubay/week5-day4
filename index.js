const { Sequelize }= require('sequelize');
const sequelize = new Sequelize('binaracademy', 'bayuubay', 'Bayu1692!', {
    host: 'localhost',
    dialect: 'mysql',
});
//check DB connection
const testConnection = async()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
const getAllStudents = async () => {
    const data = await sequelize.query('select * FROM binaracademy.tbl_student ');
    return data
}

testConnection();
getAllStudents().then((data) => console.log(data));

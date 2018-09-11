module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Professions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      professionName: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Professions');
  }
};
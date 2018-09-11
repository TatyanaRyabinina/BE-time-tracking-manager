module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfessionalLevels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      professionalLevelName: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('ProfessionalLevels');
  }
};

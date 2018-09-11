module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'avatar',
      Sequelize.STRING
    );
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Users',
      'avatar'
    );
  },
};

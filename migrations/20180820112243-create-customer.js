module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      contacts: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Customers');
  }
};

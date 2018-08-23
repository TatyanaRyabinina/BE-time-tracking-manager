'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectName: {
        type: Sequelize.STRING
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
        allowNull: true
      },
      estimate: {
        type: Sequelize.REAL
      },
      deadline: {
        type: Sequelize.DATEONLY
      }
      /*  createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }*/
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};

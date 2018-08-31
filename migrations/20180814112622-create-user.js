'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      birthdayDate: {
        type: Sequelize.DATE
      },
      hireDate: {
        type: Sequelize.DATEONLY
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
        allowNull: true
      },
      professionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Professions',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
        allowNull: true
      },
      professionalLevelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProfessionalLevels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
        allowNull: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

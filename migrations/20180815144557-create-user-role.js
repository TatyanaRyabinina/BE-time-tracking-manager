module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: true
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id'
        },
        defaultValue: 1,
        onUpdate: 'cascade',
        onDelete: 'set null',
        allowNull: true
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('UsersRoles');
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TimeTracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      trackDate: {
        type: Sequelize.DATEONLY,
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
      taskId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: true
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('TimeTracks');
  }
};

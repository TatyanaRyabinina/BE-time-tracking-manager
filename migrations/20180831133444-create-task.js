module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taskName: {
        type: Sequelize.STRING
      },
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: true
      },
      estimate: {
        type: Sequelize.REAL
      },
      deadline: {
        type: Sequelize.DATEONLY
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Tasks');
  }
};

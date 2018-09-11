module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Roles', [
      { roleName: 'user' },
      { roleName: 'admin' },
      { roleName: 'super-admin' }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Roles');
  }
};

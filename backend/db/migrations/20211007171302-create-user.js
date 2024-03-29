'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
      },
      lastName: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      birthday: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      imgSrc: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users', options);
  }
};

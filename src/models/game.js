'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Player, {
        foreignKey: 'id',
      });
    }
  }
  Game.init({
    name: DataTypes.STRING,
    turn: DataTypes.INTEGER,
    winner: DataTypes.STRING,
    status: DataTypes.STRING,
    playerCounter: DataTypes.INTEGER,
    gameBoard: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }
}

module.exports = Category;

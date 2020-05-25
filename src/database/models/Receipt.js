const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Receipt extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
        category_id: Sequelize.INTEGER,
        date: Sequelize.DATEONLY,
        description: Sequelize.STRING,
        value: { type: Sequelize.DECIMAL(10, 4) },
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
  }
}

module.exports = Receipt;

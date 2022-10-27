const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}    



Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    comment:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    user_id:{
      type: DataTypes.Integer,
      allowNull: false,
      references: {
          model:'user',
          key: 'id',
      },
    },
    product_id:{
      type: DataTypes.Integer,
      allowNull: false,
      references: {
          model:'product',
          key: 'id',
      },
    },     
  },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
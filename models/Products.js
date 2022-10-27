const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}    



Product.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    title:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    price:{
        type: DataTypes.Integer,
        allowNull: false,        
    },
    main_image:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    second_image:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    third_image:{
        type: DataTypes.STRING,
        allowNull: false,        
    },
    zip_code:{
        type: DataTypes.Integer,
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
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
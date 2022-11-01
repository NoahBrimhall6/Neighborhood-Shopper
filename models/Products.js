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
        allowNull: true,        
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    main_image:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    second_image:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    third_image:{
        type: DataTypes.STRING,
        allowNull: true,        
    },
    zip_code:{
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    user_id:{
        type: DataTypes.INTEGER,
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
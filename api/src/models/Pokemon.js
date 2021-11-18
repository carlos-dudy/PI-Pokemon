const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    img: {
      type: DataTypes.STRING, 
      allowNull: true 
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
}

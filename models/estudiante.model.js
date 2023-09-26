import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Modelo de estudiante

export const EstudianteModel = sequelize.define("Estudiante", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  género: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  localidad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});


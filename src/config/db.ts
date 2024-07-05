import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let dbInstance: Sequelize | null = null;

const createInstance = () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });

  return sequelize;
};

const getInstance = () : Sequelize => {
  if (!dbInstance) {
    dbInstance = createInstance();
  }
  return dbInstance;
};

// Autenticar y sincronizar la base de datos
(async () => {
  try {
    const sequelize = getInstance();
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export { getInstance };


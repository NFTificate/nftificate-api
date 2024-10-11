import { AppDataSource } from './src/database/services/database.service';

module.exports = async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
};

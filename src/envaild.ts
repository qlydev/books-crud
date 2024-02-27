import { cleanEnv, num, str } from 'envalid';

export const validate = (config: Record<string, unknown>) =>
  cleanEnv(config, {
    PORT: num(),
    DB_HOST: str({ default: 'localhost' }),
    DB_PORT: num(),
    DB_USERNAME: str(),
    DB_PASSWORD: str(),
    DB_NAME: str(),
    DATABASE_URL: str(),
  });

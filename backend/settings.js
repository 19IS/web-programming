import dotenv from 'dotenv'

const env = dotenv.config();

const dbUrl = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`;
const appPort = process.env.NODE_JS_APP_PORT;
const appHost = process.env.NODE_JS_APP_HOST;

export { dbUrl, appPort, appHost };

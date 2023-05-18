require("dotenv").config();

const config = {
  PORT: Number(process.env.PORT),
  DATABASE: process.env.DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
  debug: process.env.DEBUG === 'true' ? true : false,
};

export default config;
import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    url: process.env.DB_CLIENT_URL,
  },
  port: process.env.PORT || 3000,
};

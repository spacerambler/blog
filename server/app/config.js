import dotenv from "dotenv";

dotenv.config();

export default {
  // TODO: Add additional configs 🔧 here.
  db: {
    url: process.env.DB_CLIENT_URL || "mongodb://localhost/sr-blog",
  },
  jwt: {
    expirationTime: process.env.JWT_EXPIRATION || "1d",
    secret: process.env.JWT_SECRET || "secrets",
  },
  port: process.env.PORT || 4000,
};

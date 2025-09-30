import { config } from "dotenv";

config({ path: `../.env.development.local` });

export const { PORT, NODE_ENV, MONGO_DB_URI,CLERK_WEBHOOK_SECRET } = process.env;
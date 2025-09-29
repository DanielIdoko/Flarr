import { config } from "dotenv";

config({ path: `../.env.${NODE_ENV || development}.local` });

export const { PORT, NODE_ENV } = process.env;
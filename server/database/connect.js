import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export default async function connect() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoURL = mongoServer.getUri();

  mongoose.connect(mongoURL, { dbName: "testingDb" });
  console.log(`MongoDB successfully connected to ${mongoURL}`);
}

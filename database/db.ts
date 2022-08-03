import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {


  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "mongodb://esto-es-challenge-nextjs.vercel.app:28015/projectsdb");
  mongoConnection.isConnected = 1;
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
};

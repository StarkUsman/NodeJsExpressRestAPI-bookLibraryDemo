import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect('mongodb://localhost/librarybase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `DB connected successfully! to host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};



const connectWithRetry = () => {
    console.log('Connecting to MongoDB...');
    mongoose.connect('mongodb://localhost/librarybase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    });
};

connectWithRetry(); // Start initial connection attempt

export { DBConnection, connectWithRetry };
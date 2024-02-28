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

export { DBConnection };

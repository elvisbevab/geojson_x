import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`super`);
  })
  .catch((err) => {
    console.log(err);
  });

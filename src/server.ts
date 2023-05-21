import mongoose from "mongoose";
import app from "./app";
const port: number = 5001;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("data base connect successful");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error: any) {
    console.log("error heppend", error);
  }
}
main();

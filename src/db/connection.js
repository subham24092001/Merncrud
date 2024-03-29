const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://singhsubh9198:Tqm7805rpnPgMxmy@cluster0.zxgrvo1.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log("Connected Successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection

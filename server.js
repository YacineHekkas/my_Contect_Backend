const express = require("express");

const errorHandler = require("./middleware/errorHandling");

const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();

const app = express();

const port = dotenv.PORT || 5001;

connectDB();

app.use(express.json());
app.use("/api/contacts",require("./routes/contactsRoute"));
app.use("/api/users",require("./routes/usersRoute"))
app.use(errorHandler);

app.listen(port, () => {
    console.log(' Server running on port ' + port);
    }
);

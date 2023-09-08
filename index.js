const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");

const app = express();
const studentRouter = require("./routes/studentRoutes");

//BODY-PARSER
app.use(express.json());

//ROUTE

app.use("/bfhl", studentRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    message: "API is Fully Functional",
  });
});

//LISTENING BY SERVER
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

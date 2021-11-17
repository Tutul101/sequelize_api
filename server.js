const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "https://localhost:4000",
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require("./routes/productRoutes");
app.use("/api/products", router);

//Testing api
app.get("/", (req, res) => {
  res.json({ message: "Testing api" });
});
const port = 4000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

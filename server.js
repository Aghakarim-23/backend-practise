import express from "express";
import chalk from "chalk"
import productRoutes from "./src/routes/productRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log(chalk.green("Server is going"))
});



app.use("/api/products", productRoutes);
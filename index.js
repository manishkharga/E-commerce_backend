import express from "express";
import connectDB from "./connect.db.js";
import userRoutes from "./src/user/user.route.js";
import productRoutes from "./src/product/product.route.js";
import cartRoutes from "./src/cart/cart.routes.js";
import cors from "cors";
const app = express();

// to make app understand json
app.use(express.json());

// enable cors
// Cross origin Resource Sharing

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// connect database
connectDB();

// register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

// network port and server
const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

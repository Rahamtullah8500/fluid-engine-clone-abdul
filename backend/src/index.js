import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./routes/userRouter.js";
import templateRouter from "./routes/templateRouter.js";
import { fileURLToPath } from "url";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/fluid-engine-mern";

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

const app = express();
const port = 4000;

app.options('*', cors());


// CORS setup
if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: "https://fluid-engine-clone-abdul.onrender.com",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5173"],
    })
  );
}




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use('/api/templates', templateRouter);

// app.use(express.static(path.join(path.resolve(), "public")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(path.resolve(), "client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(path.resolve(), "client", "build", "index.html"));
//   });
// }
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../../frontend/dist')))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)



const Port = parseInt((process.env.PORT || '5000'),10) 

app.listen(port, () => {
  console.log(`Server running on port ${Port}`);
});

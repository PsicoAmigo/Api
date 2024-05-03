import express from "express" ; // importa xpres
import cors from "cors";
import productRouter from "./routes/product.route.js";

const app = express() // inicializar la api
const port = process.env.PORT || 3000// se dice en que puerto se va a desplegar la api



app.use(express.json());
app.use(cors());
app.use(express.static("public"));



// app.get("/products", (req, res) => {

//     res.json({
//         success: true,
//         data: [
//             {
//             subject: "programacion V",
//             semester: "7",
//             data: new Date().toDateString(),
//             },
//         ],

//     });

// });

app.use("/products", productRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
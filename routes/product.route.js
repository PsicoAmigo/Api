import express from "express";
import { products } from "../controllers/product.controller.js" ;


const router = express.Router();

// router.get("/", (req, res) => {

//     res.status(200).json({
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
router.get("/", products)

export default router;